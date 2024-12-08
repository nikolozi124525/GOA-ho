function findOdd(A) {
    const count = (arr, val) => arr.filter((item) => item === val).length;
    let target = 0;
    A.forEach((arrnum) => {
      if (count(A, arrnum) % 2 !== 0) {
        target = arrnum;
      }
    });
    return target;
  }