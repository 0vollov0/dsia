"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var EdgeLinkedList_1 = require("./EdgeLinkedList");
var __1 = require("..");
var DirectedGraph = (function () {
    function DirectedGraph() {
        this._mapper = {};
    }
    Object.defineProperty(DirectedGraph.prototype, "mapper", {
        get: function () {
            return this._mapper;
        },
        enumerable: false,
        configurable: true
    });
    DirectedGraph.prototype.insertVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key)) {
            this.mapper[key] = new EdgeLinkedList_1.default();
            this.mapper[key].add(key);
            return true;
        }
        else
            return false;
    };
    DirectedGraph.prototype.insertEdge = function (k1, k2, weight) {
        if (!this.mapper.hasOwnProperty(k1) || !this.mapper.hasOwnProperty(k2))
            return false;
        this.mapper[k1].add(k2, !weight ? 0 : weight);
        return true;
    };
    DirectedGraph.prototype.deleteVertex = function (key) {
        if (!this.mapper.hasOwnProperty(key))
            return false;
        delete this.mapper[key];
        return !this.mapper.hasOwnProperty(key);
    };
    DirectedGraph.prototype.deleteEdge = function (k1, k2) {
        if (this.mapper[k1])
            this.mapper[k1].remove(k2);
    };
    DirectedGraph.prototype.adjacent = function () {
        var _this = this;
        return Object.keys(this.mapper).map(function (key) { return _this.mapper[key]; });
    };
    DirectedGraph.prototype.reset = function () {
        this._mapper = {};
        return Object.keys(this.mapper).length === 0;
    };
    DirectedGraph.prototype.dfs = function (begin, end) {
        if (end === void 0) { end = null; }
        var begin_vertex = this.mapper[begin];
        if (!begin_vertex)
            return null;
        var visited = new Array();
        var stack = [begin_vertex.head.data];
        while (stack.length > 0) {
            var vertex_key = stack.pop();
            var new_vertex = this.mapper[vertex_key];
            if (new_vertex.head.data !== null && visited.indexOf(new_vertex.head.data) === -1) {
                var vertexes = new_vertex.getEdges()
                    .map(function (edge) { return edge.data; });
                stack.push.apply(stack, vertexes);
                visited.push(new_vertex.head.data);
                if (new_vertex.head.data === end)
                    break;
            }
        }
        return visited;
    };
    DirectedGraph.prototype.bfs = function (begin, end) {
        if (end === void 0) { end = null; }
        var begin_vertex = this.mapper[begin];
        if (!begin_vertex)
            return null;
        var visited = new Array();
        var queue = [begin_vertex.head.data];
        while (queue.length > 0) {
            var vertex_key = queue.shift();
            var new_vertex = this.mapper[vertex_key];
            if (new_vertex.head.data !== null && visited.indexOf(new_vertex.head.data) === -1) {
                var vertexes = new_vertex.getEdges()
                    .map(function (edge) { return edge.data; });
                queue.push.apply(queue, vertexes);
                visited.push(new_vertex.head.data);
                if (new_vertex.head.data === end)
                    break;
            }
        }
        return visited;
    };
    DirectedGraph.prototype.dijkstra = function (begin, end) {
        var _this = this;
        if (end === void 0) { end = null; }
        var begin_vertex = this.mapper[begin];
        if (!begin_vertex)
            return null;
        var heap = new __1.Heap();
        var path_info = {};
        Object.keys(this.mapper).forEach(function (key) {
            path_info[key] = key == begin ? { distance: 0 } : { distance: Number.MAX_VALUE };
            heap.insert(path_info[key].distance, { key: key, previous: null });
        });
        var _loop_1 = function () {
            var path = heap.pop();
            var vertex_key = path.node['key'];
            if (path_info[vertex_key].distance <= path.data) {
                var edges = this_1.mapper[vertex_key].getEdges();
                edges.forEach(function (edge) {
                    var vertex = _this.mapper[vertex_key].getEdge(edge.data);
                    var min_distance = Math.min(path_info[edge.data].distance, path.data + vertex.weight);
                    if (path_info[edge.data].distance > min_distance) {
                        if (path_info[edge.data].route === undefined)
                            path_info[edge.data].route = new Array();
                        path_info[edge.data].route.push(path.node['key']);
                        heap.insert(min_distance, { 'key': edge.data, previous: vertex_key });
                        path_info[edge.data].distance = min_distance;
                    }
                });
            }
        };
        var this_1 = this;
        while (heap.tree.length > 1) {
            _loop_1();
        }
        var result = {
            'distance': path_info[end].distance,
            'route': new Array(),
        };
        this.findRoute(path_info, begin, result.route, [end]);
        result.route = [begin].concat(result.route.reverse());
        return result;
    };
    DirectedGraph.prototype.findRoute = function (path_info, begin, array, route) {
        if (!route)
            return array;
        while (route.length > 0) {
            var t = route.pop();
            if (t !== begin)
                array.push(t);
            this.findRoute(path_info, begin, array, path_info[t].route !== undefined ? __spreadArray([], path_info[t].route, true) : null);
        }
    };
    return DirectedGraph;
}());
exports.default = DirectedGraph;
