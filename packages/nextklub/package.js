Package.describe({
  summary: "The next Klub"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');
  api.add_files([
    'lib/client/main.js'
    ],
    'client');
    api.add_files(['lib/server/server.js'], ['server']);
    api.add_files(['lib/collections/next_klub.js'], ['client', 'server']);

    if (api.export) {
      //api.export(['NextKlub']);
    }
  });

  Package.on_test(function (api) {
    api.use(['nextklub', 'tinytest', 'test-helpers'], 'client');
    api.add_files('next_klub_test.js', 'client');
  });
