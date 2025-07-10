import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  getRemoteConfig,
  fetchAndActivate as firebaseFetchAndActivate,
  getBoolean as firebaseGetBoolean,
  getString as firebaseGetString,
  getNumber as firebaseGetNumber,
} from 'firebase/remote-config';

// ✅ Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: 'AIzaSyA_Wc9zKgjxrK4v13i3DScrrGGEEz8mGVg',
  authDomain: 'push-notification-5d56d.firebaseapp.com',
  projectId: 'push-notification-5d56d',
  storageBucket: 'push-notification-5d56d.appspot.com',
  messagingSenderId: '925683676829',
  appId: '1:925683676829:web:90cf3b8d75af67af32c674',
  measurementId: 'G-649D583TH2',
};

// ✅ Initialize Firebase App (safe for SSR/multiple imports)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Initialize Remote Config
const remoteConfig = getRemoteConfig(app);

// ✅ Remote Config settings
remoteConfig.settings = {
  minimumFetchIntervalMillis: process.env.NODE_ENV === 'development' ? 0 : 0, // 0ms in dev, 1h in prod
  fetchTimeoutMillis: 60000, // Timeout after 60s
};

// ✅ Default fallback values for config keys
remoteConfig.defaultConfig = {
  is_app_leavingz: false,
  leave_dialog_title: 'Sorry for inconvenience',
  leave_dialog_message: 'We are currently closed.',
};

// ✅ Export utilities with clean names
export {
  remoteConfig,
  firebaseFetchAndActivate as fetchAndActivate,
  firebaseGetBoolean as getBoolean,
  firebaseGetString as getString,
  firebaseGetNumber as getNumber, // Optional: add if needed
};
