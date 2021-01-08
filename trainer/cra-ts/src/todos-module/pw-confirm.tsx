import { useState } from "react"

export default function PasswordConfirm() {
    // zwei input-Felder für Passworteingabe
    // ein Button, inaktiv
    // wenn die Eingaben in beiden Inputs übereinstimmen
    // und wenn in beiden kein leeres String steht
    // wird der Button aktiv, darf geclickt werden
    const [inputPWFirst, setPWFirst] = useState('')

    const [inputPWSendon, setPWSecond] = useState('')
    const getButtonActive = (pwFirst: string, pwSecond: string) => {

        if (pwFirst === pwSecond && pwFirst !== '') {
            return false
        }
        else {
            return true
        }
    }



    return (
        <div>
            <h2>PasswordConfirm works</h2>
            <input
                type="password"
                value={inputPWFirst}
                onChange={(event) => { setPWFirst(event?.target.value) }}
            />
            <input type="password" value={inputPWSendon} onChange={(event) => {
                setPWSecond(event?.target.value)
            }} />
            <button disabled={getButtonActive(inputPWFirst, inputPWSendon)}>Login</button>
        </div>


    )

}





