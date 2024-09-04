module.exports = {
    apps: [{
      name: 'ruizarch-nextjs',
      script: 'npx',
      args: 'next start',
      cwd: './', // Path to your project directory
      env: {
        NODE_ENV: 'production'
      }
    }]
  }
  