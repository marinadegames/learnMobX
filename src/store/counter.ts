import {makeAutoObservable} from "mobx";

class Counter {

    public count = 0

    constructor() {
        makeAutoObservable(this)
        // делает класс отслеживаемым.
        // принимает параметром контекст текущего класса, и она автоматиченские уже все настривает
    }

    public increment() {
        this.count = this.count + 1
    }

    public decrement() {
        this.count = this.count - 1
    }

}


export default new Counter()