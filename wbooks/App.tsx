import React from 'react';

import App from './src/app';
import Reactotron from './src/config/ReactotronConfig';

if (__DEV__) {
  Reactotron.connect();
}

export default function index() {
  return <App />;
}
