module.exports = {
  apps: [
    {
      name: 'Mobile Server',
      cwd: './',
      script: 'node_modules/react-app-rewired/scripts/start.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        COMMON_VARIABLE: 'true',
        NODE_ENV: 'development',
        PORT: '5000',
        REACT_APP_LOCAL_ADDR: 'localhost',
        REACT_APP_LOCAL_HTTP_PORT: '8080',
        REACT_APP_LOCAL_HTTPS_PORT: '8443',
        REACT_APP_REMOTE_BACKEND_ADDR: 'pigplan.io',
        REACT_APP_REMOTE_BACKEND_HTTP_PORT: '80',
        REACT_APP_REMOTE_BACKEND_HTTPS_PORT: '443',
        REACT_APP_DEV_STAT_ADDR: 'statis.pigplanxe.co.kr',
        REACT_APP_DEV_STAT_HTTP_PORT: '80',
        REACT_APP_DEV_STAT_HTTPS_PORT: '443',
        REACT_APP_PUB_STAT_ADDR: 'm.pigplan.io',
        REACT_APP_PUB_STAT_HTTP_PORT: '80',
        REACT_APP_PUB_STAT_HTTPS_PORT: '443'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {}
  },

  dev: {}
};
