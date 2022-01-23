function bubbleSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length-i; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

function insertSort(array: number[]) {
  for (let i = 0, z = 0; i < array.length; i++) {
    z = i;
    for (let j = i-1; j >= 0; j--) {
      if (array[z] > array[j]) break;
      const temp = array[z];
      array[z] = array[j];
      array[j] = temp;
      z = j;
    }
  }
}

export {
  bubbleSort,
  selectionSort,
  insertSort
}