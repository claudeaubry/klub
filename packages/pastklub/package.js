Package.describe({
  summary: 'A panel to expose a Klub session'
})

Package.on_use(function(api) {
  api.use('ecmascript')
  api.use(['templating'], 'client')

  api.add_files([
    'lib/collections/past_klub_collections.js'],
    ['client', 'server'])
  api.add_files(['lib/server/server.js'], ['server'])

  api.add_files([
    'lib/client/detailed_past_klub.html',
    'lib/client/detailed_past_klub.js',
    'lib/client/detailed_past_klub.css',
    'lib/client/main.js',
    'lib/client/past_klub.html',
    'lib/client/past_klub.css',
    'lib/client/past_klub.js',
    'lib/client/adm_past_klub_list.html',
    'lib/client/adm_past_klub_list.css',
    'lib/client/adm_past_klub_list.js',
    'lib/client/adm_past_klub_edit.html',
    'lib/client/adm_past_klub_edit.css',
    'lib/client/adm_past_klub_edit.js',
    'lib/client/past_klub_display.html',
    'lib/client/past_klub_display.js',
    'lib/client/past_klub_modal.html',
    'lib/client/past_klub_modal.js'
  ], 'client')
  api.export(['PastKlub', 'createPastKlub'])
})

Package.on_test(function(api) {
  api.use(['pastklub', 'tinytest', 'test-helpers'], 'client')
  // api.use('templating', 'client')
  api.add_files('lib/client/main.js', 'client')

  api.add_files('past_klub_test.js', 'client')
})
