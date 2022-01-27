function bubbleSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length-i; j++) {
      if (array[j] > array[j+1]) swap(array,j,j+1);
    }
  }
}

function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) swap(array,i,j);
    }
  }
}

function insertSort(array: number[]) {
  for (let i = 0, z = 0; i < array.length; i++) {
    z = i;
    for (let j = i-1; j >= 0; j--) {
      if (array[z] > array[j]) break;
      swap(array,j,z);
      z = j;
    }
  }
}

function mergeSort(array:number[]) {
  let sorted_array = divide(array);
  array.length = 0;
  array.push(...sorted_array);
}

function divide(array:number[]) {
  if (array.length < 2) return array;
  const center = Math.round(array.length/2);
  let arr_1 = divide(array.slice(0,center));
  let arr_2 = divide(array.slice(center,array.length));
  return conquer(arr_1, arr_2);
}

function conquer(arr_1: number[], arr_2: number[]) {
  const array = new Array();
  while (arr_1.length > 0 && arr_2.length > 0) {
    if (arr_1[0] < arr_2[0]) array.push(arr_1.shift());
    else array.push(arr_2.shift());
  }
  array.push(...arr_1);
  array.push(...arr_2);
  return array;
}

function quickSort(...arg: (number | number[])[]) {
  if (!(arg[0] instanceof Array)) return;
  const array = arg[0];
  let pivot = (typeof arg[1] === 'number') ? arg[1] : array.length-1;
  if(pivot <= 0) return;
  let left = 0;
  for (let right = 0; right < pivot; right++) {
    if(array[left] < array[pivot]) left++;
    else if (array[right] < array[left]) {
      swap(array, left, right);
      left++;
    }
  }
  if (array[left] != array[pivot]) swap(array, left, pivot); 
  quickSort(array, pivot-1);
}

function swap(array: any[], ptr_1: number, ptr_2: number) {
  const temp = array[ptr_1];
  array[ptr_1] = array[ptr_2];
  array[ptr_2] = temp;
}

export {
  bubbleSort,
  selectionSort,
  insertSort,
  mergeSort,
  quickSort,
}