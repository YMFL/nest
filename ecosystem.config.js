module.exports = {
  apps : [{
    name: 'nestPro',
    script: 'npm run prestart:prod',

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    port: 3001,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
