function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.qSort = qSort;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() *
            (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// Bubble Sort
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}

// Selecting Sort
function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1;
            inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
    }
}

// Insertion Sort
function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

// Quick Sort
function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        console.log("pivot: " + pivot + " current element: " + arr[i]);
        if (arr[i] < pivot) {
            console.log("moving " + arr[i] + " to the left");
            left.push(arr[i]);
        } else {
            console.log("moving " + arr[i] + " to the right");
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

function run() {
    var numElements = 10;
    var nums = new CArray(numElements);
    nums.setData();
    /*var start = new Date().getTime();
    nums.bubbleSort();
    var stop = new Date().getTime();
    var elapsed = stop - start;
    console.log("Elapsed time for the bubble sort on " +
        numElements + " elements is: " + elapsed + " milliseconds.");
    start = new Date().getTime();
    nums.selectionSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log("Elapsed time for the selection sort on " +
        numElements + " elements is: " + elapsed + " milliseconds.");
    start = new Date().getTime();
    nums.insertionSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log("Elapsed time for the insertion sort on " +
        numElements + " elements is: " + elapsed + " milliseconds.");*/

    var a = [];
    for (var i = 0; i < 10; ++i) {
        a[i] = Math.floor((Math.random() * 100) + 1);
    }
    start = new Date().getTime();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log("Elapsed time for the Quick sort on " +
        numElements + " elements is: " + elapsed + " milliseconds. \n");
        console.log("Original Array: " + "\n" + a + "\n");
    nums.qSort(a);
    console.log("\nSorted Array: " + "\n" + qSort(a));   
}