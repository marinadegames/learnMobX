import {makeAutoObservable} from "mobx";

class Todo {

    constructor() {
        makeAutoObservable(this)
    }

}



export default new Todo()