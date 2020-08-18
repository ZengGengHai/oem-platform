import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Button,Tooltip} from '@material-ui/core';
//import SignIn from './pages/login'
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import {theme} from './themes/default-theme';
import BasicLayout from './layouts/basic';

const defaultTheme = createMuiTheme(theme);

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={defaultTheme}>
          <BasicLayout />
        </MuiThemeProvider>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }
export default App;





