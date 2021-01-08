import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppWithRouting from './m100-routing/app-with-routing';





ReactDOM.render(
  <React.StrictMode>
    <h1>CRA TS APP</h1>


    {/* m100-routing */}
    <AppWithRouting />



  </React.StrictMode>,
  document.getElementById('root')
);

// m80-hooks
// let useEffectDiv = document.getElementById('useEffectDiv')
// ReactDOM.render(<React.StrictMode>
//       <UseEffectDemo />
// </React.StrictMode>, useEffectDiv)

// function unmount() {

//   ReactDOM.unmountComponentAtNode(useEffectDiv as Element)
// }

// setTimeout(unmount, 2000)
// todo #2

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
