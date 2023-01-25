import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import App from './App'
import 'antd/dist/reset.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider theme={{
            token: {}
        }}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
)
