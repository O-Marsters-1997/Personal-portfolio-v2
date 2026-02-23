export const logger = {
  log: (message: string, extras: Record<string, string>) => {
    console.log(message, extras);
  },
  info: (message: string, extras: Record<string, string>) => {
    console.info(message, extras);
  },
  error: (message: string, extras: Record<string, string>) => {
    console.error(message, extras);
  },
};
