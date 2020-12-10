import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import './assets/css/buttoncolor.scss'
// import Routes from "./routes";
import { Provider } from "react-redux";
import Layout from "./Layout"
import Login from "./screens/signIn"
import { theme } from './muiTheme'
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (

    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <Switch>
            <Route exact path={'/signin'} component={Login} />
            <Route path={'/'} component={Layout} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
