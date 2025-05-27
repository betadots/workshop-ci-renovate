module.exports = {
    platform: 'gitlab',
    endpoint: 'http://gitlab.priv.rw.betadots.training/api/v4/',
    token: process.env.RENOVATE_TOKEN,
    addLabels: ['renovate', 'dependencies'],
    extends: ['config:base', ':semanticCommits', ':semanticCommitTypeAll(chore)'],
    dependencyDashboard: true,
    autodiscover: true,
    autodiscoverNamespaces: ["puppet"],

    // if no autodiscovery is wanted
    // repositories: [
    //   'puppet/control_repo',
    // ],
    // use this branch only
    // baseBranches: ['production'],
    // only scan for puppet upgrades
    // enabledManagers: ['puppet'],
  };
