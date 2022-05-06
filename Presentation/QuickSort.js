function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        document.write("<br> pivot: " + pivot + " current element: " + arr[i]);
        if (arr[i] < pivot) {
            document.write(" moving " + arr[i] + " to the left.");
            left.push(arr[i]);
        } else {
            document.write(" moving " + arr[i] + " to the right. ");
            right.push(arr[i]);
        }
        document.write("<br> Left Array: " + left, "<br> Right Array: " + right + "<br>");
    }
    return qSort(left).concat(pivot, qSort(right));
}

function run() {
    var a = [];
    for (var i = 0; i < 5; ++i) {
        a[i] = Math.floor((Math.random() * 100) + 1);
    }
    document.write("Unsorted List: " + a);
    document.write();
    document.write("<br> Sorted List: " + qSort(a));
}