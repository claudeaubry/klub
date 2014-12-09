Package.describe({
  summary: "A book"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');
  api.add_files([
    'lib/client/book.html',
    'lib/client/book.css',
    'lib/client/book.js'
  ],
    'client');
});

Package.on_test(function (api) {
  api.use(['book', 'tinytest', 'test-helpers'], 'client');
  api.add_files('book_test.js', 'client');
});
