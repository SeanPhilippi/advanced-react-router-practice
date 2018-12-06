import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from './components/Dashboard';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{ backgroundColor: "white" }}>
            <Switch>
              <Route path="/putwhateveryouwanthere" component={Dashboard} />
              <Route path="/comments" component="" />
              <Route path="/users:userId" component="" />
            </Switch>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
