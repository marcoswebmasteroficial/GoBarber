export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: process.env.TOKEN_EXPIRATION_TIME || '1d',
  },
};
