import React, {Fragment} from 'react';
import Landing from './Landing/Index';
import Router from './Route/Router';
import { BrowserRouter } from 'react-router-dom';
import './Scss/Index.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          {/* <Landing /> */}
          <div>
            <Router />
          </div>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
