import {makeAutoObservable} from "mobx";
import {v1} from "uuid";

class Todo {

    public todos: Array<TypeTodo> = [
        {
            id: '1w',
            title: "What's learn",
            isDone: false
        },
        {
            id: '1ww2e',
            title: "What's drink",
            isDone: true
        },

    ]

    constructor() {
        makeAutoObservable(this)
    }

    public addTodo () {
        this.todos.push(
            {
            id: v1(),
                title: 'new name',
                isDone: false})
    }

    public deleteTodo (id: string) {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    public completeTodo (id: string) {
        this.todos = this.todos.map(t => t.id === id ? {...t, isDone: !t.isDone} : t)
    }
}

export default new Todo()




type TypeTodo = {
    id: string
    title: string
    isDone: boolean
}