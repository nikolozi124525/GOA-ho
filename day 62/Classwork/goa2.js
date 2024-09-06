function manualSlice(arr,start,end){
    let slicedArr = new Array();
    for(let i = start; i < end; i++){
        slicedArr.push(arr[i]);
    }

    console.log(slicedArr);
}