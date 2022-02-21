export class Todo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string, complete: boolean = false) {
        this.text = text;
        this.id = Math.floor((Math.random() * 1000000) + 1) + new Date().getTime();
        this.completed = complete;
    }
}