import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import { persistSecretKey, persistBlackList } from 'configurations/redux';

const encryptor = createEncryptor({
  secretKey: persistSecretKey,
  onError(error) {
    console.log('createEncryptor error ', error); // eslint-disable-line
  },
});
 
const saveAuthSubsetBlacklistFilter = createBlacklistFilter(persistBlackList);

const persistConfig = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage,
    // whitelist: ['auth', 'notification'],
    transforms: [saveAuthSubsetBlacklistFilter, encryptor],
    // transform: [encryptor],
  },
};

export default persistConfig;