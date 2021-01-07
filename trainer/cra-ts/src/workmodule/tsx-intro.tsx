export default function Tsx() {
    let datum = new Date()
    return (
        <span>{datum.toDateString()}</span>
    );
}
// export default Tsx

export function TsxManyElements() {
    const istKalt = true
    return (
        <>
            <p>Heute ist Tag??</p>
            <p>Ist heute kalt? - {istKalt.toString()}</p>
        </>
    );
}