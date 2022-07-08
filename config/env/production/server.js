module.exports = ({ env }) => ({
    url: env("https://strapi007.herokuapp.com"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["v8TigdFMcaCHJMdjZ2fPMQ==","HqGEl1c/k4vpUx3P2H109w==","bKb+nlWqidSctyHOFhAciQ==","Uyr5bjZSXRtVC7/xcF1t+g=="]),
    },
  });