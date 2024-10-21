export const getConnectionString = () => {
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

  return `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${process.env.DB_NAME}`;
};
