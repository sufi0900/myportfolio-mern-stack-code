import React, {useState} from 'react';
import DrawerComp from './Drawer';
import NewD from './NewD';
import MenuIcon from '@mui/icons-material/Menu';

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SideDrawer from './SideDrawer';
import {useNavigate} from 'react-router-dom';
import {Home, MailLock} from '@mui/icons-material';
import NewDA from './NewDA';
const ResponsiveDrawer = () => {
  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const List = styled(Paper)(({theme}) => ({
    width: 250,
    height: 200,
    backgroundColor: 'Blue',
    color: 'white',
  }));
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const aboutb = () => {
    navigate('/about');
  };

  const sliderb = () => {
    navigate('/skilld');
  };

  const projectsb = () => {
    navigate('/projects');
  };
  const contactb = () => {
    navigate('/contact');
  };
  return (
    <div
      className="drawer"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100vh',
      }}
    >
      <div
        style={{border: '0px solid black', width: '20%', overflow: 'auto'}}
      >
        <NewDA />
        {/* <Drawer
          // variant="permanent"
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          style={{ marginLeft: "150px", color: "red" }}
        >
          <List>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary={"Home"}
                onClick={() => {
                  window.location.href = "/";
                }}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <MailLock />
              </ListItemIcon>
              <ListItemText
                primary={"About"}
                onClick={() => {
                  aboutb();
                }}
              />
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton
          sx={{ color: "black", marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon color="white" />
        </IconButton> */}
      </div>
      <br></br>
      <div
        style={{
          // border: "1px solid black",
          width: '77%',
          marginLeft: '40px',
          overflow: 'auto',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <h1>HTML</h1>
              onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.onsequat mauris nunc congue nisi
              vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam. Pulvinar elementum integer enim neque
              volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
              viverra tellus. Purus sit amet volutpat consequat mauris.
              Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
              risus sed vulputate odio. Morbi tincidunt ornare massa eget
              egestas purus viverra accumsan in. In hendrerit gravida rutrum
              quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum
              nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
              facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
              orci a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla
              est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <h1>css</h1>
              onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.onsequat mauris nunc congue nisi
              vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam. Pulvinar elementum integer enim neque
              volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
              viverra tellus. Purus sit amet volutpat consequat mauris.
              Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
              risus sed vulputate odio. Morbi tincidunt ornare massa eget
              egestas purus viverra accumsan in. In hendrerit gravida rutrum
              quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum
              nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
              facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
              orci a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla
              est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.onsequat mauris nunc congue nisi
              vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam. Pulvinar elementum integer enim neque
              volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
              viverra tellus. Purus sit amet volutpat consequat mauris.
              Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
              risus sed vulputate odio. Morbi tincidunt ornare massa eget
              egestas purus viverra accumsan in. In hendrerit gravida rutrum
              quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum
              nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
              facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
              orci a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla
              est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.=8
            </Item>
          </Grid>
        </Grid>
      </div>

      {/* <div className="drawera" style={{ width: "30%" }}>
          <Drawer
            // variant="permanent"
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            style={{ marginLeft: "150px", color: "red" }}
          >
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MailLock />
                </ListItemIcon>
                <ListItemText
                  primary={"About"}
                  onClick={() => {
                    aboutb();
                  }}
                />
              </ListItemButton>
            </List>
          </Drawer>
          <IconButton
            sx={{ color: "black", marginLeft: "auto" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon color="white" />
          </IconButton>
        </div> */}

      {/* <div className="contents">
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Item>
                <h1>HTML</h1>
                onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci
                a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci
                a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={10}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <h1>css</h1>
                onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci
                a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci
                a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci
                a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci
                a.onsequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.=8
              </Item>
            </Grid>
          </Grid>
        </div> */}
    </div>
  );
};

export default ResponsiveDrawer;
