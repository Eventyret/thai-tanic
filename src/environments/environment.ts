import { commonEnv } from './environment.common';

export const environment = {
  ...commonEnv,
  production: false,
  apiDomain: 'localhost:1337',
  apiURL: 'http://localhost:1337',
};
