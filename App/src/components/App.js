import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import NavBar from './NavBar';
import Theme from './Theme';
import Content from './Content';

class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider theme={Theme}>
      <React.Fragment>
        <NavBar />
        <Content />
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;