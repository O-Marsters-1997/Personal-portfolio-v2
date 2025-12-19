export const logger = {
  log: (message: string, extras: Record<string, any>) => {
    console.log(message, extras);
  },
  info: (message: string, extras: Record<string, any>) => {
    console.info(message, extras);
  },
  error: (message: string, extras: Record<string, any>) => {
    console.error(message, extras);
  },
};
