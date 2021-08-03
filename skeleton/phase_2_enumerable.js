

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

const abc = function (ele) {
    console.log(ele);
};

// [1,2,3].myEach(abc);


Array.prototype.myMap = function(callback) {
    let arr = [];
    this.myEach((ele) => {
        arr.push(callback(ele));
    });
    // for (let i = 0; i < this.length; i++) {
    //     arr.push(callback(this[i]));
    // }
    return arr;
};

const map_callback = function(ele) {
    return ele * 2;
};

// console.log([1,2,3].myMap(map_callback));

Array.prototype.myReduce = function(callback, initialValue=this.shift()) {
    // initialValue = callback(initialValue, ele);
    this.myEach((ele) => {
        initialValue = callback(initialValue, ele);
    });
    return initialValue;
};


// // without initialValue
// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// })); // => 6

// // with initialValue
// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25)); // => 31
