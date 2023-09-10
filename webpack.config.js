const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Import the plugin
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Import the plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Entry point of your app
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve content from the 'dist' directory
    },
    compress: true,
    port: 3000, // Specify the port you want to use
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.webp$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.pdf$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader", // Add this loader
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // More options for other image formats
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Use MiniCssExtractPlugin loader for CSS
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },

    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // Path to your HTML template
    }),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      // Add this plugin
      filename: "[name].[contenthash].css", // Ensure unique CSS filenames
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "eval-cheap-source-map",
};
