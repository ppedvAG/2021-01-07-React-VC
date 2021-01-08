import { useEffect, useState } from "react";

export function UseStateDemo() {
    // Destructuring by arrays
    const myArray = ['stringVariable', function (etwas: string) {
        return etwas
    }]
    const [varForString, varForFunction] = myArray
    console.log('varForString: ', varForString);
    console.log('varForFunction("einString"): ', (varForFunction as Function)('einString'))

    // const [state, setstate] = useState(initialState)
    const [myState, setMyState] = useState(4)

    // syntax: 
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    // input: If present, effect will only activate if the values in the list change 

    useEffect(() => {
        // setstate(newState)
        setMyState(6);
    }, [])
    // }, [myState]) // pre: verursacht ein zusätzliches Rerendering

    // setMyState(6);
    // pre: verwendet man die Methode hier, wird die Komponente zu oft rerendert.

    return (
        <>
            <h2>use state demo works</h2>
            <div>new State: {myState}</div>
        </>
    )

}

export function UseEffectDemo() {
    // idee: eine tickende Uhr

    // in state
    // date variable

    // after Mounting
    // setInterval: prozessId

    // before Unmounting
    // clearInterval(prozessId)

    const [currentTime, setTime] = useState(new Date());
    // const [currentInterval, setMyInterval] = useState(new NodeJS.Timeout)
    const [currentInterval, setMyInterval] = useState(0)

    const tick = () => {
        setTime(new Date())
    }

    useEffect(() => {
        setMyInterval(setInterval(tick, 1000) as any) // any um zu zwingen, Timeout ins number zu speichern
        return (() => {
            clearInterval(currentInterval)
            console.log('interval gecleart');
        }
        )
        // }, [currentTime]) // mit diesem Argument wird clearing jede Sekunde ausgeführt
    }, []) // React Hook useEffect has a missing dependency: 'currentInterval'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    // }, [currentInterval]) // Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.


    return (
        <>
            <h2>use effect demo works</h2>
            <div>Time: {currentTime.toTimeString()}</div>
        </>
    )

}