import React, { DetailedReactHTMLElement } from 'react'

export default function ReactVsJSXEl() {
    // react el
    let reactEl = React.createElement('div', { id: 'divId' }, 'text in div')
    let reactElProps = Object.entries(reactEl)
    console.log('reactElProps', reactElProps)
    console.log('reactEl', reactEl)

    // jsx el
    let jsxEl = <p>text in p</p>
    console.log('jsxEl', jsxEl)

    // ts

    // reactEl = jsxEl; // ohne Typenanpassung (Type Assertion) gibt es einen Fehler
    /* 
    Fehler: 
    in der Konsole hat auch jsxEl die Prop ref, in der Typendefinition fehlt sie aber: Siehe Fehlermeldung

    let reactEl: React.DetailedReactHTMLElement<{
    id: string;}, HTMLElement>
    Property 'ref' is missing in type 'Element' but required in type 'DetailedReactHTMLElement<{ id: string; }, HTMLElement>'.ts(2741)
    */
    reactEl = jsxEl as DetailedReactHTMLElement<any, any>;

    // jsxEl = reactEl; // kein Fehler, weil reactEl mehr Props hat, als jsxEl braucht. 

    return (
        <>
            <div>React Element: {reactEl}</div>
            <div>JSX Element: {jsxEl}</div>
            <pre>
                Für React sind beide Element-Typen das Gleiche
            </pre>
            <div>Ist reactEl ein valides React Element? - {React.isValidElement(reactEl).toString()}</div>
            <div>Ist jsxEl ein valides React Element? - {React.isValidElement(jsxEl).toString()}</div>
        </>
    )

}