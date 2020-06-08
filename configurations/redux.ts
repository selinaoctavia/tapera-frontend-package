export const persistSecretKey = 'abang-baso-jangan-kasih-tau-sipa-siapa-ya';

export const persistBlackList = [
  'auth',
  [
    // 'data',
    // 'res',
    'action'
  ],
];

export const defaultState = {
  fetch: false,
  error: null,
  response: null,
  action: null,
}

export const defaultAction = {
  type: null,
  data: null,
}