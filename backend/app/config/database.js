module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'OYlw1p+BGKkwpJpZi39ed20O1k0UKD0lzAjeuEmZW5w='),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
