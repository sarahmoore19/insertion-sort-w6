// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  let sorted = [arr.pop()];

  while (arr.length) {
    let val = arr.pop();

    if (val <= sorted[0]) sorted.unshift(val);

    else {
    sorted.push(null);
    for (let i = sorted.length - 1; i >= 0; i--) {

      if (val >= sorted[i - 1]) {
      sorted[i] = val;
      break;
      }

      sorted[i] = sorted[i - 1];
      }
    }
  }
 return sorted;
}


function insertionSortInPlace(arr) {

  let count = 0;
  while (count < arr.length) {
    for (let i = count; i > 0; i--) {
      if (arr[i - 1] > arr[i]) [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      else break;
    }
    count++;
  }
  return arr;
}

function recursiveSort1(arr, sortArr = [arr.pop()]){
  if (sortArr[0] === undefined) return "Array cannot be empty";
  if (arr.length === 0) return sortArr;
  let val = arr.pop();
  sortArr[sortArr.length] = null;
  let i = sortArr.length - 1;
  while (val < sortArr[i - 1]) {
  sortArr[i] = sortArr[i - 1];
  i--;
  }
  sortArr[i] = val;
  return recursiveSort1(arr, sortArr);
}

function recursiveSort2(arr, count = 0) {
if (count === arr.length) return arr;
for (let i = count; i > 0; i--) {
  if (arr[i - 1] > arr[i]) [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
  else break;
}
return recursiveSort2(arr, count + 1);
}

arr1 = [2,4,6,8,1,3,5,7,9];
arr2 = [2,4,6,8,1,3,5,7,9];
arr3 = [2,4,6,8,1,3,5,7,9,2,7,0,3,1,1,1,2,3,6,1,0,0,6,-3];
arr4 = [2,4,6,8,1,3,5,7,9,2,7,0,3,1,1,1,2,3,6,1,0,0,6,-3];


console.log(insertionSort(arr1))
console.log(insertionSortInPlace(arr2))
console.log(recursiveSort1(arr3))
console.log(recursiveSort2(arr4))



module.exports = [insertionSort, insertionSortInPlace];
