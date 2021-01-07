module.exports = {
  apps : [    {
      name: 'armonianutritiva',
      cwd: '/home/ec2-user/armonianutritiva',
      script: 'npm',
      args: 'deploy',
      env: {
        NODE_ENV: 'production',
      },
    }
]};
