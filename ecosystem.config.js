module.exports = {
  apps: [{
    name: "discord-bot",
    script: "main.js",
    watch: false,
    env: {
      NODE_ENV: "production",
    },
    // Restart if app uses more than 100MB
    max_memory_restart: "100M",
    // Restart on errors
    autorestart: true
  }]
}; 