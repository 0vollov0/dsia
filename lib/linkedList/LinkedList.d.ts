declare class LinkedList {
    private _head;
    private _tail;
    private _current;
    constructor();
    add(data: any): void;
    pop(): void;
    previous(): this;
    next(): this;
    clear(): void;
    findFirst(data: any): any;
    findLast(data: any): any;
    isEmpty(): boolean;
    get head(): any;
    set head(node: any);
    get tail(): any;
    set tail(node: any);
    get current(): any;
    set current(node: any);
}
export default LinkedList;
