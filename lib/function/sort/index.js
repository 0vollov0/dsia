"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSort = exports.selectionSort = exports.bubbleSort = void 0;
function bubbleSort(array) {
    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
exports.bubbleSort = bubbleSort;
function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
exports.selectionSort = selectionSort;
function insertSort(array) {
    for (var i = 0, z = 0; i < array.length; i++) {
        z = i;
        for (var j = i - 1; j >= 0; j--) {
            if (array[z] > array[j])
                break;
            var temp = array[z];
            array[z] = array[j];
            array[j] = temp;
            z = j;
        }
    }
}
exports.insertSort = insertSort;
