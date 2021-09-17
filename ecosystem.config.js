module.exports = {
  apps : [{
    name: 'saltybetter_1',
    cmd: 'serve.py',
    args: 'username oauthpassword',
    autorestart: true,
    watch: false,
    instances: 1,
    interpreter: 'python3'
  }, {
    name: 'saltybetter_2',
    cmd: 'serve.py',
    args: 'username oauthpassword',
    autorestart: true,
    watch: false,
    instances: 1,
    interpreter: 'python3'
  }]
};
