export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  
  // REPLACE 'strapi::cors' WITH THIS BLOCK:
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // This allows ALL domains (including localhost)
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];