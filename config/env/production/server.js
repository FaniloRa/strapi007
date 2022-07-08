module.exports = ({ env }) => ({
    url: env("https://strapitestdeploy-v1.herokuapp.com"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["secure1", "secure2"]),
    },
  });