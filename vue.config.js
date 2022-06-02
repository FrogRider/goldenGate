module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/globalStyles/_variables.scss";
          @import "@/globalStyles/components/main.scss";
          @import "@/globalStyles/_mixins.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/hello-world/" : "/",
};
