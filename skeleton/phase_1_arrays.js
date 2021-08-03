// Array.prototype.uniq = function() {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (!arr.includes(this[i])) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// };

Array.prototype.uniq = function() {
    let arr = [];
    let hash = {};
    for (let i = 0; i < this.length; i++) {
        if (!hash[this[i]]) {
            hash[this[i]] = true;
            arr.push(this[i]);
        }
    }
    return arr;
};

// console.log([1,2,2,3,3,3].uniq()) // => [1,2,3])

Array.prototype.twoSum = function() {
    let pairs = [];
    let nums = {};

    for (let i = 0; i < this.length; i++) {
        if (nums[0 - this[i]] !== undefined) {
            console.log(this[i])
            pairs.push([i, nums[0-this[i]]]);
        }
        nums[this[i]] = i;
    }
    return pairs;
}

// console.log([1, -1, 2, 0, -2, 3, 4].twoSum())

// [1,2,3]
// [4,5,6]

// [[1, 4]
//  [2, 5]
//  [3, 6]]

Array.prototype.transpose = function() {
    let arr = [];

    for (let i = 0; i < this[0].length; i++) {
        arr.push([]);
    } // create array
    
    for (let i  = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
            arr[j].push(this[i][j]);
        }
    }
    return arr;
}

// console.log([[1,2,3], [4, 5, 6]].transpose());




