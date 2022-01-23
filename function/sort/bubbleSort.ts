export default function(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length-i; j++) {
    console.log(j);

      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}