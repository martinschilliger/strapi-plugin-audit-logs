module.exports = {
  async get(ctx) {
    const pluginConfig =
      strapi.config.get("plugin::audit-logs") ||
      strapi.plugin("audit-logs").config;

    ctx.body = pluginConfig.adminPanelConfig;
  },
};
