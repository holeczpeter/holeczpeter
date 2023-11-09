module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  pluginOptions: {
    i18n: {
      locale: 'hu',
      fallbackLocale: 'hu',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  }
};
