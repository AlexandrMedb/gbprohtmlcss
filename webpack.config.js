const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPkugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const optimization = () => {
  const config = {
    //chunk -поток js файлов/ подключаемые скрипты / гугли
    splitChunks: {
      chunks: "all",
    },
  };

  if (!isDev) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        //изменение сущностей без перезагрузки страницы
        hmr: isDev,
        reloadAll: true,
      },
    },
    "css-loader",
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const babelOptions = (preset) => {
  const option = {
    presets: ["@babel/preset-env"],
    //плагины для работы с новыми функциями JS \ ts и т.д.
    plugins: [],
  };

  if (preset) {
    option.presets.push(preset);
  }
  return option;
};

module.exports = {
  //contect (папка) c файлами для работы webpack
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.js"],
    // second: "./src/second.js"
  },
  output: {
    //[] патерн названия [contenthash] -динамический парамет -решает проблему кеширования
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // расширения по умолчанию
    extensions: [".js", ".json", ".css", "svg"],
    //alias- заранее прописаные относительные пути
    alias: {
      "@img": path.resolve(__dirname, "src/img"),
    },
  },
  //оптимизитрует подключенные скрипты и  повторяющиеся js библиотеки (формирует js файл с ними)
  optimization: optimization(),

  // настройка локального сервера для разработки
  devServer: {
    port: 4200,
    hot: isDev,
  },
  // добавление исходных карт
  // devtool: isDev ? "source-map" : "enval",
  // плагины добавляются через новые инстансы класов
  plugins: [
    new HTMLWebpackPlugin({
      // подтяжка данных с моего html
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),

    new CleanWebpackPlugin(),
    // модуль для копирования файлов
    // new CopyWebpackPkugin([
    //   {
    //     from: path.resolve(__dirname, 'src/...'),
    //     to: path.resolve(__dirname, 'dist')
    //   }
    // ]),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // <= порядок выполнения , MiniCssExtractPlugin / style-loader add csss to html
        use: cssLoaders(),
      },

      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      // подгрузка шрифтов
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            //плагины для работы с новыми функциями JS \ ts и т.д.
            plugins: [],
          },
        },
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript"),
        },
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react"),
        },
      },
    ],
  },
};
// настроить devtool для webpack 5
