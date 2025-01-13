export const getConnectionString = () => {
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, NODE_ENV } = process.env

  return `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}${NODE_ENV === 'production' ? 'ssl' : ''}`
}

// testing this
