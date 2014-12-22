Package.describe({
  summary: "A panel to expose a Klub session"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');

  api.add_files(['lib/collections/past_klub_collections.js'], ['client', 'server']);
  api.add_files(['lib/server/server.js'], ['server']);

  api.add_files([
    'lib/client/main.js',
    'lib/client/past_klub.html',
    'lib/client/past_klub.css',
    'lib/client/past_klub.js',
    'lib/client/past_klub_list.html',
    'lib/client/past_klub_list.css',
    'lib/client/past_klub_list.js',
    'lib/client/past_klub_edit.html',
    'lib/client/past_klub_edit.css',
    'lib/client/past_klub_edit.js',
    'lib/client/past_klub_display.html',
    'lib/client/past_klub_display.js',
    'lib/client/past_klub_modal.html',
    'lib/client/past_klub_modal.js'
  ],
    'client');
});

Package.on_test(function(api) {
  api.use(['pastklub', 'tinytest', 'test-helpers'], 'client');
  api.add_files('past_klub_test.js', 'client');
});
