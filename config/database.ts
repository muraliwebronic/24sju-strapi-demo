import path from 'path';
// FIX: Use { parse } to import the named export
import { parse } from 'pg-connection-string';

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  // Production (Render/Neon)
  if (databaseUrl) {
    const config = parse(databaseUrl);
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
          },
        },
        debug: false,
      },
    };
  }

  // Local Development (SQLite)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};