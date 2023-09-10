import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      toast.success("Login Successfully");

      if (response.data?.result?.newEmail) {
        // If a new email has been changed, update the stored email in the local storage
        const { token } = response.data;
        const profile = JSON.parse(localStorage.getItem("profile"));
        profile.email = response.data.result.newEmail;
        profile.token = token;
        localStorage.setItem("profile", JSON.stringify(profile));
      }
      if (response.data?.result?.newPassword) {
        // If a new password has been changed, update the stored password in the local storage
        const { token } = response.data;
        const profile = JSON.parse(localStorage.getItem("profile"));
        profile.password = response.data.result.newPassword;
        profile.token = token;
        localStorage.setItem("profile", JSON.stringify(profile));
      }
      navigate("/adminDashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success("Register Successfully");
      navigate("/adminDashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const checkSession = createAsyncThunk(
  "auth/checkSession",
  async (_, { getState }) => {
    try {
      const state = getState();
      const currentToken = state.auth.sessionToken;
      const storedToken = JSON.parse(localStorage.getItem("profile"))?.token;

      if (currentToken && storedToken && currentToken !== storedToken) {
        // If the current token in the state doesn't match the stored token in local storage,
        // clear the session and log the user out
        return false;
      }

      return true;
    } catch (error) {
      return true; // Return true in case of any error (you might want to handle this differently)
    }
  }
);

export const changeEmail = createAsyncThunk(
  "auth/changeEmail",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.changeEmail(formValue);
      toast.success("Email Change  Successfully");
      navigate(-1);
      // Optionally, you can update the local storage with the new email
      const profile = JSON.parse(localStorage.getItem("profile"));
      profile.email = formValue.newEmail;
      localStorage.setItem("profile", JSON.stringify(profile));
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.changePassword(formValue);
      toast.success("Password Change  Successfully");
      navigate(-1);
      // Optionally, you can update the local storage with the new password
      const profile = JSON.parse(localStorage.getItem("profile"));

      localStorage.setItem("profile", JSON.stringify(profile));
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    sessionToken: null, // Add this line to store the session token

    error: "",
    loading: false,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.sessionToken = action.payload.token; // Save the session token to the state
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      })
      .addCase(checkSession.fulfilled, (state, action) => {
        if (!action.payload) {
          // If checkSession returns false, clear the session and log the user out
          state.user = null;
          state.sessionToken = null;
          localStorage.clear();
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Login failed due to an error.";
      })

      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Login failed due to an error.";
      })
      .addCase(changeEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        // Update the user object if needed
        // Show success toast message
        // Navigate to the desired page
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        // Show error toast message or handle the error in any other way
      })
      .addCase(changeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
