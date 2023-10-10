/**
 * @fileoverview Database Configuration
 * @description Configures the server database
 * @author @moobi-kabelo
 * @version 1.0.0
 * @since 2023-10-10
 */

import dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
  mariadb: {
    username:
      process.env.NODE_ENV === 'development'
        ? ''
        : process.env.MARIADB_USERNAME,
    password:
      process.env.NODE_ENV === 'development'
        ? ''
        : process.env.MARIADB_PASSWORD,
    host:
      process.env.NODE_ENV === 'development' ? '' : process.env.MARIADB_HOST,
    port:
      process.env.NODE_ENV === 'development' ? 3360 : process.env.MARIADB_PORT,
    database:
      process.env.NODE_ENV === 'development'
        ? ''
        : process.env.MARIADB_DATABASE,
  },
};
