import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rating from './m50-component-props/comp-props';
// mm20-app-default
// import App from './m20-app-default/App';

// m30-tsx-intro
// import Tsx from './m30-tsx-intro/tsx-intro';
// import { TsxManyElements } from './m30-tsx-intro/tsx-intro';
// import * as ComponentsObject from './m30-tsx-intro/many-components';

// m40-react-jsx-el
// import ReactVsJSXEl from './m40-react-jsx-el/react-vs-jsx-el';

// m50-component-props
import reportWebVitals from './reportWebVitals';

// m60-class-component
import { MyClassComponent, MyClassComponentWithProps, MyClassComponentWithState } from './m60-class-component/classcomponents';

// LABS
import { TodosComponentAsFunction, TodosAsClass, TodosTable } from './todos-module/todos';

// m80-hooks
import { UseEffectDemo, UseStateDemo } from './m80-hooks/hooks';

ReactDOM.render(
  <React.StrictMode>
    <h1>CRA TS APP</h1>
    <h2>DEMOS</h2>
    {/* m20-app-default */}
    {/* <App /> */}

    {/* m30-tsx-intro */}
    {/* <Tsx />
    <TsxManyElements />
    <pre>
      Bemerkung 0: mehrere Export können mit '* as _objektName_' importiert werden
      <br/>
      Bemerkung 1: in den Spitzen Klammern dürfen nicht nur Variablen stehen, sondern auch komplexere Ausdrücke
      <br/>
      Bemerkung 2: JSX-Elemente dürfen auch direkt hier angelegt werden, wie z.B. das aktuelle pre-Element
      <br/>
      Bemerkung 3: JSX-pre ignoriert eigene Leerzeichen im Unterschied zu HTML-pre
    </pre>
    <ComponentsObject.Component1 />
    <ComponentsObject.Component2 /> */}

    {/* m40-react-jsx-el */}
    {/* <ReactVsJSXEl /> */}
    
    {/* m50-component-props */}
    <pre>
      bei den Komponenten dürfen nur Attribute verwendet werden, die im Objekt 'IntrinsicAttributes' erwähnt sind
      und IntrinsicAttributes ist äquivalent zum Objekt props. Props wird gebaut anhand von diesen Attributes.
    </pre>
    {/* <Rating stars={5} prop='besonderes Rating'/> */}
    <Rating stars={5}/>

    {/* m60-class-component */}
    {/* <MyClassComponent />
    <MyClassComponentWithProps propsKey='propsKeyValue'/>
    <MyClassComponentWithState /> */}

    {/* m80-hooks */}
    <UseStateDemo />
    <UseEffectDemo />

    <h2>LABS</h2>
    <TodosComponentAsFunction />
    <TodosAsClass />
    <TodosTable />

  </React.StrictMode>,
  document.getElementById('root')
);

let useEffectDiv = document.getElementById('useEffectDiv')
ReactDOM.render(<React.StrictMode>
      <UseEffectDemo />
</React.StrictMode>, useEffectDiv)

function unmount() {

  ReactDOM.unmountComponentAtNode(useEffectDiv as Element)
}

setTimeout(unmount, 2000)
// todo #2

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
