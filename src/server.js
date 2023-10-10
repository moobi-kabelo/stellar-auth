/**
 * @fileoverview Main Server File
 * @description Entry point for starting the server
 * @author @moobi-kabelo
 * @version 1.0.0
 * @since 2023-10-10
 */

import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';
import ip from 'ip';
import path from 'path';
import os from 'os';
import url from 'url';

import { app } from './config/app.js';
import { Database, Logger } from './api/libs/index.js';

dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5500;
const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, './config/stellar-auth.key')),
    cert: fs.readFileSync(path.join(__dirname, './config/stellar-auth.crt')),
  },
  app
);

Database.sequelizeConnect()
  .authenticate()
  .then(() => {
    server.listen(PORT, () => {
      Logger.info('Server Started.', {
        server: {
          name: 'Stellar Auth ',
          ip: ip.address(),
          port: PORT,
          platform: os.platform(),
          path: path.resolve('.'),
        },
      });
    });
  })
  .catch((error) => {
    Logger.error('Failed To Establish Connection To Database.', {
      database: {
        name: error.constructor.name,
        error_message: `${error}`,
        error_stack: error.stack,
      },
    });
    process.exit(1);
  });
