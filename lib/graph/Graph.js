"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UndirectedEdge_1 = require("./UndirectedEdge");
var Vertex_1 = require("./Vertex");
var Graph = (function () {
    function Graph() {
        this._mapper = {};
    }
    Graph.prototype.insert = function (key, data) {
        if (!this.mapper.hasOwnProperty(key)) {
            this.mapper[key] = new Vertex_1.default(data);
            return true;
        }
        else
            return false;
    };
    Graph.prototype.delete = function (key) {
        if (!this.mapper.hasOwnProperty(key))
            return false;
        var edges = this.mapper[key].edges;
        console.log(edges);
        return true;
    };
    Graph.prototype.constructEdge = function (k1, k2) {
        if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2))
            return false;
        var edge = new UndirectedEdge_1.default(this.mapper[k1], this.mapper[k2]);
        if (this.mapper[k1].hasEdge(edge) || this.mapper[k2].hasEdge(edge))
            return false;
        this.mapper[k1].addEdge(edge);
        this.mapper[k2].addEdge(edge);
        return true;
    };
    Object.defineProperty(Graph.prototype, "mapper", {
        get: function () {
            return this._mapper;
        },
        enumerable: false,
        configurable: true
    });
    return Graph;
}());
exports.default = Graph;
