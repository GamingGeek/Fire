module.exports = {
  apps: [
    {
      name: "fire",
      script: "dist/src/index.js",
      exec_mode: "cluster",
      instances: 2,
      wait_ready: true,
      listen_timeout: 20000,
      automation: false,
      env: {
        NODE_ENV: "production",
      },
      // node_args: "--expose-gc",
    },
    {
      name: "firedev",
      script: "yarn",
      args: "run rundev",
      automation: false,
      // node_args: "--expose-gc",
    },
    {
      name: "firedev-clustered",
      script: "yarn",
      args: "run rundev",
      instances: 1,
      automation: false,
      // node_args: "--expose-gc",
    },
  ],
};
