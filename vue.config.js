module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.externals({
      vuedraggable: 'vuedraggable'
    })
  }
}