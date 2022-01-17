declare class Node {
    private _data;
    constructor(data: any);
    update(data: any): void;
    print(): void;
    get data(): any;
    set data(data: any);
}
export default Node;
