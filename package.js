Package.describe({
  name: '3stack:qs',
  version: '3.1.0',
  summary: 'https://github.com/hapijs/qs/graphs/contributors',
  git: 'https://github.com/3stack-software/meteor-qs',
  documentation: 'README.md'
});

Npm.depends({
  'qs': '3.1.0'
});

Package.onUse(function (api) {
  // todo, export for client
  api.export('Qs');
  api.addFiles('qs.js', 'server');
});
