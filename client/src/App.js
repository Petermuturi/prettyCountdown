import React, { Component } from 'react'
// import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CountDown from './countdown/CountDown'

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: '#FBC02D',
        primary1Color: '#424242',
        primary2Color: '#424242'
      },
      appBar: {
        height: 50,
      },
    })
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <CountDown/>
    </MuiThemeProvider>
    );
  }
}

export default App;
