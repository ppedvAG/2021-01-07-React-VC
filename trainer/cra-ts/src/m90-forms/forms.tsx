import { useState } from "react";

export function InputDemo() {
    const [inputValue, setinputValue] = useState('initialState')

    return (
        <>
            <h2>Input Demo works</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => {
                    setinputValue(event.target.value) /* pre: kein Rerendering bei StateÄnderung in Formularen */
                    console.log('inputValue', inputValue)
                }} />
        </>
    )
}