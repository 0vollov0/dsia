"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(array) {
    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < array.length - i; j++) {
            console.log(j);
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
exports.default = default_1;
