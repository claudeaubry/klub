module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '46.226.107.168',
      username: 'ubuntu',
      pem: '~/.ssh/id_rsa'
      // password: ''
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'klub',
    path: '../.',
    type: 'meteor',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      PORT: 3000,
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://127.0.0.1',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
      // MONGO_URL: 'mongodb://127.0.0.1:27017/meteor',
      // MONGO_OPLOG_URL: 'mongodb://127.0.0.1:27017/local',
    },

    docker: {
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: 'abernix/meteord:node-12-base',
      bind: '127.0.0.1'
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,
    deployCheckWaitTime: 60,
    deployCheckPort: 3000
  },

   mongo: {
    version: '4.4.0',
    servers: {
      one: {}
    }
   },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

//  proxy: {
//    servers: {
//      one: {}
//    },
//     domains: 'klubat.agileradical.org,www.klubat.agileradical.org'

     //nginxServerConfig: './config4nginx'

//     loadBalancing: true,
     // Use sticky sessions when load balancing (optional, default is true)
//     stickySessions: true
  
//proxy: {
//  domains: 'klubat.agileradical.org,www.klubat.agileradical.org',

//  ssl: {
    // Enable Let's Encrypt
//    letsEncryptEmail: 'admin@agileradical.org',
//    forceSSL: true
//  }
// }
 
};
