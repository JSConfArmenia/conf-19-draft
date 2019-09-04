module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/_common/variables.scss";
          @import "@/_common/mixins.scss";
        `,
      },
    },
  },
  configureWebpack: config => {
    config.devtool = 'source-map'
  },
}
