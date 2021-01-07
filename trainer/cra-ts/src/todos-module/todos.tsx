import { Component } from "react";
import Todo from "./todo"

export function TodosComponentAsFunction() {

    let todo: Todo = fetchTodo();

    function fetchTodo(): any {
        let todoPromise: Promise<Todo> =
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    return json
                })
                .then(todoObject => todoPromise = todoObject)
        // return Promise.resolve(todoPromise)
    }

    return (
        <>
            <pre>
                Wenn asynchrone Methoden ausgeführt werden, dann lieber mit den LebenszyklusHandlern arbeiten
        </pre>
            <div>Platzhalter</div>
        </>
    )
}

export class TodosAsClass extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            todo: {
                userId: 1,
                id: 1,
                title: 't',
                completed: false
            }
        }
    }
    getData = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(jsonObject => this.setState({ todo: jsonObject }))
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <>
                <div>todos as class works</div>
                <div>
                    {this.state.todo.title}
                </div>
            </>
        )
    }
}

export class TodosTable extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            todos: new Array<Todo>()
        }
    }

    getData = () => {
        console.log('bin in getData');
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(jsonObject => {
                this.setState({ todos: jsonObject.slice(0, 9) })
                console.log('this.state.todos', this.state.todos)
            }
            )
    }
    componentDidMount() {
        console.log('bin in componentDidMount');

        // this.getData();
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(jsonObject => {
                this.setState({ todos: jsonObject.slice(0, 9) })
                console.log('this.state.todos', this.state.todos)
            }
            )
    }
    render() {
        return (
            <>
                <h2>todos table</h2>
                <div>todos as class works</div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                UserId
        </th>
                            <th>
                                Id
        </th>
                            <th>
                                Title
        </th>
                            <th>
                                Completed
        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((item: Todo) =>
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed.toString()}</td>
                            </tr>
                        )}
                        <tr><td>{/* {this.state.todos[1].toString()} */}
                        </td>
                            <td>
                                {/* {this.state.todos[0].id} */}
                            </td>
                            <td>
                                {/* {this.state.todos[0].title} */}
                            </td>
                            <td>
                                {/* {this.state.todos[0].completed} */}
                            </td>
                        </tr>
                    </tbody>

                </table>

                <pre>
                    auf einzelne Elemente aus dem Array darf man über Index-Notation nicht zugreifen!
                </pre>

            </>
        )
    }
}