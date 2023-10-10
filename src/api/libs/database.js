/**
 * @fileoverview Database Library
 * @description Configures the database connection
 * @author @moobi-kabelo
 * @version 1.0.0
 * @since 2023-10-10
 */

import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

import { databaseConfig } from '../../config/database.js';
import { Logger } from './logger.js';

dotenv.config();

export class Database {
  static sequelizeConnect = () => {
    return new Sequelize(
      databaseConfig.mariadb.database,
      databaseConfig.mariadb.username,
      databaseConfig.mariadb.password,
      {
        host: databaseConfig.mariadb.host,
        dialect: 'mariadb',
        protocol: 'mariadb',
        pool: {
          max: 10,
          acquire: 30000,
          idle: 10000,
        },
        logging: (...debug) => {
          Logger.debug('Sequelize', debug);
        },
      }
    );
  };
}
