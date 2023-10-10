/**
 * @fileoverview Logger Configuration
 * @description Configures the server logger
 * @author @moobi-kabelo
 * @version 1.0.0
 * @since 2023-10-10
 */

import dotenv from 'dotenv';
import winston from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

dotenv.config();

/**
 * Configuration object for logger.
 * @type {Object}
 * @property {Object} transports - Transports for different environments.
 * @property {winston.transports.Console} transports.development - Console transport for development environment.
 * @property {LogtailTransport} transports.production - Logtail transport for production environment.
 */
export const loggerConfig = {
  transports: {
    development: new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint()
      ),
    }),
    production: new LogtailTransport(
      new Logtail(process.env.LOGTAIL_ACCESS_TOKEN)
    ),
  },
};
