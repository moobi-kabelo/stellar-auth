/**
 * @fileoverview Logger Library
 * @description Configures the logger fucntionalities
 * @author @moobi-kabelo
 * @version 1.0.0
 * @since 2023-10-10
 */

import winston from 'winston';
import { loggerConfig } from '../../config/logger.js';

const createLogger = () => {
  const environment = process.env.NODE_ENV;

  if (!environment) {
    throw new Error(`Invalid configuration for environment: ${environment}`);
  }

  const transports =
    environment === 'development'
      ? loggerConfig.transports.development
      : loggerConfig.transports.production;

  return winston.createLogger({ transports });
};

export const Logger = createLogger();
