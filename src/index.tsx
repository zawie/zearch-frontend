import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#722ed1",
          colorLink: "#722ed1"
        }
        }}>
        <BrowserRouter>
            <Routes>
              <Route index element={<App />}/>
              <Route path="about" element={<AboutPage />}/>
            </Routes>
        </BrowserRouter>
      </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
