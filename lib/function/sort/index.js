"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.mergeSort = exports.insertSort = exports.selectionSort = exports.bubbleSort = void 0;
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
function mergeSort(array) {
    var sorted_array = divide(array);
    array.length = 0;
    array.push.apply(array, sorted_array);
}
exports.mergeSort = mergeSort;
function divide(array) {
    if (array.length < 2)
        return array;
    var center = Math.round(array.length / 2);
    var arr_1 = divide(array.slice(0, center));
    var arr_2 = divide(array.slice(center, array.length));
    return conquer(arr_1, arr_2);
}
function conquer(arr_1, arr_2) {
    var array = new Array();
    while (arr_1.length > 0 && arr_2.length > 0) {
        if (arr_1[0] < arr_2[0])
            array.push(arr_1.shift());
        else
            array.push(arr_2.shift());
    }
    array.push.apply(array, arr_1);
    array.push.apply(array, arr_2);
    return array;
}
function quickSort() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    if (!(arg[0] instanceof Array))
        return;
    var array = arg[0];
    var pivot = (typeof arg[1] === 'number') ? arg[1] : array.length - 1;
    if (pivot <= 0)
        return;
    var left = 0;
    for (var right = 0; right < pivot; right++) {
        if (array[left] < array[pivot])
            left++;
        else if (array[right] < array[left]) {
            swap(array, left, right);
            left++;
        }
    }
    if (array[left] != array[pivot])
        swap(array, left, pivot);
    quickSort(array, pivot - 1);
}
exports.quickSort = quickSort;
function swap(array, ptr_1, ptr_2) {
    var temp = array[ptr_1];
    array[ptr_1] = array[ptr_2];
    array[ptr_2] = temp;
}
