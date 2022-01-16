class Node {
    private _data: any;

    constructor(data: any) {
        this._data = data;
    }

    update(data: any) {
        this._data = data;
    }

    print() {
        console.log(this.data);
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }
}

export default Node;