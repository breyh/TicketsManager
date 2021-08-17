import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Base/index.scss';
import AppRouter from './routes/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <div className="row m-0">
      <AppRouter />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

