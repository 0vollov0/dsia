"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var Vertex = (function () {
    function Vertex(data) {
        this.data = data;
        this._edges = new Array();
    }
    Object.defineProperty(Vertex.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vertex.prototype, "edges", {
        get: function () {
            return this._edges;
        },
        enumerable: false,
        configurable: true
    });
    Vertex.prototype.addEdge = function (edge) {
        this.edges.push(edge);
    };
    Vertex.prototype.hasEdge = function (edge) {
        var flag = false;
        for (var index = 0; index < this.edges.length; index++) {
            if (this.edges[index].isSame(edge.next, edge.previous)) {
                flag = true;
                break;
            }
        }
        return flag;
    };
    return Vertex;
}());
exports.default = Vertex;
