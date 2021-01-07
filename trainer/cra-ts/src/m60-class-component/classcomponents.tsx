import { Component } from "react";

export class MyClassComponent extends Component {
    render() {
        return (
            <div>class component works</div>
        )
    }
}

export class MyClassComponentWithProps extends Component<any, any> {
    render() {
        return (
            <>
                <div>{this.props.propsKey}</div>
                <pre>
                    sobald Props oder State verwendet werden, muss die generische Variante der Klasse Component genutzt werden.
                <br />
                Component &lt;any, any&gt;
            </pre>
            </>
        )
    }
}

export class MyClassComponentWithState extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            keyInState: 'ValueInState'
        }
    }
    render() {
        return (
            <>
                <div>class component with state works</div>
                <div>statevalue: {this.state.keyInState}</div>
            </>
        )
    }
}