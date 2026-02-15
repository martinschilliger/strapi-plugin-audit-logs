module.exports = [
  {
    method: "GET",
    path: "/config",
    handler: "config.get",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];
