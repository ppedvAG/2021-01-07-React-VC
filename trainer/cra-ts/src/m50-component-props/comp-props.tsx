import './comp-props.css'

// export default function Rating(myPropsObject: any){
export default function Rating(myPropsObject: { stars: number }) {
    console.log('myPropsObject', myPropsObject)
    return (
        <>
            <pre>
                Inhalte von Props-Object kann man überall in der Komponente verwenden:
                <br/>
                1. Als Inhalt im Text
                <br/>
                2. zum Berechnen der Werte bei Attributen
                <br/>
                3. als Wert für lokale Variablen
            </pre>
            <div>myPropsObject {myPropsObject.toString()}</div>
            <div id={myPropsObject.stars.toString()}>myPropsObject.stars {myPropsObject.stars}</div>
            <span id="stars">{'*'.repeat(myPropsObject.stars)}</span>
        </>
    )
}