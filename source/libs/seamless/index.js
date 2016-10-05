/**
 * @type {String} environment context.
 */
const environment = process.env.NODE_ENV;


/**
 * TODO: production to be set
 * @type {String} api of the api.
 */
export const api = environment === 'production' ? null : 'http://localhost:3000/api';


export * from './shipments';
export * from './user';
