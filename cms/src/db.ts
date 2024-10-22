export const getConnectionString = () => {
  const { NODE_ENV, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

  const hostName =
    NODE_ENV === "production" ? DB_HOST : `${DB_HOST}:${DB_PORT}`;

  const connString = `postgresql://${DB_USER}:${DB_PASSWORD}@${hostName}/${process.env.DB_NAME}`;
  //
  if (NODE_ENV === "production") {
    return `${connString}?sslmode=require`;
  }

  return connString;
};
