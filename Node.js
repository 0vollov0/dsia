class Node {
    constructor(data) {
        this._data = data;
    }

    update(data) {
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

module.exports = Node;