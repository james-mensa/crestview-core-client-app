import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoute from './app-route';
import { GoogleOAuthProvider } from "@react-oauth/google"
import {Provider} from  "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import { GOOGLE_AUTH_CLIENT_ID } from './config/protectedConstant';
import ReduxStore from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
<Provider store={ReduxStore}>
    <AppRoute/>
  

</Provider>
</GoogleOAuthProvider>

);

