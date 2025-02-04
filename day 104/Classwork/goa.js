function sumTwoLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let max1 = Math.max(...arr);       
    arr.splice(arr.indexOf(max1), 1);  
    let max2 = Math.max(...arr);       
    return max1 + max2;
}

console.log(sumTwoLargest([3, 7, 2, 9, 5]));  
console.log(sumTwoLargest([10, 10, 5, 3]));   
