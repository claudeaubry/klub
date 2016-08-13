Package.describe({
  summary: 'The next Klub'
})

Package.on_use(function (api) {
  api.use('ecmascript')
  api.use(['templating'], 'client')

  api.add_files(['lib/collections/next_klub_collections.js'],
    ['client', 'server'])
  api.add_files(['lib/server/server.js'], ['server'])

  api.add_files([
    'lib/client/config.html',
    'lib/client/config.js',
    'lib/client/next_klub_edit.html',
    'lib/client/next_klub_edit.js',
    'lib/client/next_klub_edit.css',
    'lib/client/next_klub_view.html',
    'lib/client/next_klub_view.js',
    'lib/client/detailed_next_klub.html',
    'lib/client/detailed_next_klub.js',
    'lib/client/modal_next.html',
    'lib/client/modal_next.js'
  ],
    'client')
})

Package.on_test(function (api) {
  api.use(['tinytest', 'test-helpers'], 'client')
  api.add_files('next_klub_test.js', 'client')
})
