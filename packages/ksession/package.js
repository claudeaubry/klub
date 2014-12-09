Package.describe({
  summary: "A panel to expose a Klub session"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');
  api.add_files([
    'lib/client/main.js',
    'lib/client/kSession.html',
    'lib/client/kSession.css',
    'lib/client/kSession.js',
    'lib/client/formKM.html',
    'lib/client/formKM.js'
  ],
    'client');

  if (api.export) {
    api.export(['KSessions']);
  }
});

Package.on_test(function(api) {
  api.use(['ksession', 'tinytest', 'test-helpers'], 'client');
  api.add_files('ksession_test.js', 'client');
});
