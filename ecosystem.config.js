module.exports = {
  apps : [{
    name: 'nestPro',
    script: 'NODE_ENV=production node dist/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
