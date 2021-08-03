Array.prototype.bubbleSort = function() { 
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                sorted = false;
                [this[i], this[i+1]] = [this[i+1], this[i]];
            }
        }
    }
    return this;
};

// console.log([4, 2, 6, 8, 1, 5, 2, 7].bubbleSort());

String.prototype.substrings = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            arr.push(this.slice(i, j));
        }
    }
    return arr;
};

// console.log("abcd".substrings());