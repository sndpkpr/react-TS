/** True if the app is running on the server, false if running on the client */
export const IS_SERVER = typeof window === 'undefined';

/* SERVER CONFIG */
export const IS_PRODUCTION = process.env.IS_PRODUCTION || false;
export const IS_SECURE = process.env.IS_SECURE || false;
export const HOST_NAME = process.env.HOST_NAME || 'localhost';
export const APP_PORT = process.env.APP_PORT || 3000;