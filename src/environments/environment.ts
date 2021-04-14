import { commonEnv } from './environment.common';

export const environment = {
  ...commonEnv,
  production: false,
  apiURL: 'http://localhost:1337',
};
