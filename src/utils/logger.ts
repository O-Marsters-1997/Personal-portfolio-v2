type LoggerFn = {
  (message?: any, ...optionalParams: any[]): void;
};

interface Logger {
  log: LoggerFn;
  warn: LoggerFn;
  error: LoggerFn;
  info: LoggerFn;
}

export const logger: Logger = {
  log: (message?: any, ...optionalParams: any[]) => {
    console.log(message, ...optionalParams);
  },

  warn: (message?: any, ...optionalParams: any[]) => {
    console.warn(message, ...optionalParams);
  },

  error: (message?: any, ...optionalParams: any[]) => {
    console.error(message, ...optionalParams);
  },

  info: (message?: any, ...optionalParams: any[]) => {
    console.warn(message, ...optionalParams);
  },
};
