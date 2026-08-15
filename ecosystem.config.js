module.exports = {
  apps: [{
    name: 'edicola-mondo',
    script: 'server.js',
    cwd: '/home/work/edicola-mondo',
    env: {
      NODE_ENV: 'production',
      PORT: 3200,
      ECCL_GIURIDICA_SRC: '/home/work/edicola-giuridica/data/giuridica.db'
    },
    max_memory_restart: '2G',
    min_uptime: 60000,
    restart_delay: 5000,
    max_restarts: 10,
    autorestart: true,
  }]
};
