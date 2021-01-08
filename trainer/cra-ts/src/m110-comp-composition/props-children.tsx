export default function WrapComponent() {
    return (
        <>
            <h2>WrapComponent works</h2>
            <ChildComponent1>
                <div>Inhalte von ChildComponent1</div>
            </ChildComponent1>
            <ChildComponent2>
                <div>Inhalte von ChildComponent2</div>
            </ChildComponent2>
        </>
    )
}

export function ChildComponent1(props: any) {
    return (
        <>
            <h2>ChildComponent1 works</h2>
            <div>
                {props.children}
            </div>
        </>
    )
}

export function ChildComponent2(props: any) {
    return (
        <>
            <h2>ChildComponent2 works</h2>
            {props.children}
        </>
    )
}

