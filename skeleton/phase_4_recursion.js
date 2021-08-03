function range(start, end) {
    if (start===end) {
        return [start];
    };
    const arr = range(start+1, end);
    arr.unshift(start);
    return arr; // WHAT? WHY? HOW?
    // return (arr.unshift(start));
};

// console.log(range(1,5));

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    let num = arr.pop();
    return sumRec(arr) + num;

};

// console.log(sumRec([1,2,3,4,5]));

// function exponent(base, exp) {
//     if (exp === 0) {
//         return 1;
//     }
//     return base * exponent(base, exp - 1);
// };

// console.log(exponent(2,3))

function exponent(base, exp) {

    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }
    if (exp % 2 === 0 ) {
        return exponent(base, exp / 2) ** 2;
    }else {
        return base * (exponent(base, (exp - 1) / 2) ** 2);
    }
};

// console.log(exponent(2,3))

function fibbonacci(n) {
    if (n === 0) {
        return [1];
    }

    if (n === 1) {
        return [1, 1];
    }
    debugger
    let arr = fibbonacci(n-1);
    arr.push(arr.slice(-1)[0] + fibbonacci(n-2).slice(-1)[0]);
    return arr;
}

// console.log(fibbonacci(10));

function deepDup(arr) {
    let dup = [];
    arr.forEach(ele => {
        if (ele instanceof Array) {
            dup.push(deepDup(ele));
            // return dup;
        } else {
            dup.push(ele);
            // return dup;
        }
    });
    return dup;
};

// console.log(deepDup([[1,2],[1,5]]));

function bsearch(arr, target) {
    if (arr.length === 1 && arr[0] === target) {
        return 0;
    }

    if (arr.length === 0) {
        return;
    }
    let mid = Math.ceil(arr.length/2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return bsearch(arr.slice(0, mid));
    } else {
        return mid + bsearch(arr.slice(mid + 1, arr.length));
    }
} 

console.log(bsearch([1,2,3,4,5], 5));
console.log(bsearch([1,2,3,4,5], 4));
console.log(bsearch([1,2,3,4,5], 3));
console.log(bsearch([1,2,3,4,5], 2));
console.log(bsearch([1,2,3,4,5], 1));



