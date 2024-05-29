module.exports = {
    platform: 'gitlab',
    endpoint: 'http://gitlab.priv.rw.betadots.training/api/v4/',
    token: process.env.RENOVATE_TOKEN,
    logLevel: 'info',
    labels: ['renovate', 'dependencies'],
    autodiscover: true,
    autodiscoverNamespaces: ["puppet"],
  };
