Package.describe({
  summary: "A book"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');
  api.add_files([
    'lib/client/main.js',
    'lib/client/book_create.html',
    'lib/client/book_create.js',
    'lib/client/books_proposed.html',
    'lib/client/books_proposed.js',
    'lib/client/books_frozen.html',
    'lib/client/books_frozen.js',
    'lib/client/book_view.html',
    'lib/client/book_view.css',
    'lib/client/book_view.js',
    'lib/client/book_list.html',
    'lib/client/book_list.js',
    'lib/client/book_edit.html',
    'lib/client/book_edit.js'
  ],
    'client');
  api.add_files(['lib/server/server.js'], ['server']);
  api.add_files(['lib/collections/books.js'], ['client', 'server']);

  if (api.export) {
    api.export(['getAllBooks', 'getBookTitleById']);
  }
});

Package.on_test(function (api) {
  api.use(['tinytest', 'test-helpers'], 'client');
  api.add_files('book_test.js', 'client');
});
