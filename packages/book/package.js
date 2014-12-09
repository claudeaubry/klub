Package.describe({
  summary: "A book"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');
  api.add_files([
    'lib/client/book_create.html',
    'lib/client/book_create.js',
    'lib/client/books_proposed.html',
    'lib/client/books_proposed.js',
    'lib/client/book_view.html',
    'lib/client/book_view.css',
    'lib/client/book_view.js'
  ],
    'client');
  api.add_files(['lib/collections/books.js'], ['client', 'server']);

  if (api.export) {
    api.export(['Books']);
  }
});

Package.on_test(function (api) {
  api.use(['book', 'tinytest', 'test-helpers'], 'client');
  api.add_files('book_test.js', 'client');
});
