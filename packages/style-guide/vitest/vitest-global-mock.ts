import { vi } from 'vitest';

const portfolio = vi.fn(() => ({
  apiUrl: 'http://my-url.com',
  adminController: false,
  showLogs: false,
  showErrorCode: false,
  showErrorDescription: false,
  enviroment: 'LOCAL' // DEV, PRE, PROD
}));

vi.stubGlobal('$portfolio', portfolio);
