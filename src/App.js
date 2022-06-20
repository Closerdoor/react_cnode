import React, { Component } from 'react';
import RouterIndex from './router/index'

import MainHeader from './view/main-header'
import MainFooter from './view/main-footer'
import "./view/index.css"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
        <div className="pageWrap">
          <MainHeader />
          <main className="main">
            <RouterIndex />
          </main>
          <MainFooter />
        </div>
    )
  }
}
export default App;
