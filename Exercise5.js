/*
Modify the Queue class to create a Deque class. A deque is a queue-like structure
that allows elements to be added and removed from both the front and the back of
the list. Test your class in a program.
*/
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

var q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

/*
Use the Deque class you created in Example 5-1 to determine if a given word is a
palindrome.
*/
function Queue() {
    this.items = [];
    this.isEmpty = isEmpty;
    this.addFront = addFront;
    this.removeFront = removeFront;
    this.removeRear = removeRear;
    this.size = size;
}

function isEmpty() {
    return !Boolean(this.items.length);
}

function addFront(item) {
    this.items.unshift(item);
}

function addRear(item) {
    this.items.push(item);
}

function removeFront() {
    return this.items.shift();
}

function removeRear() {
    return this.items.pop();
}

function size() {
    return this.items.length;
}

var strings = ["Mom", "Dog"]
var q = new Queue();

q.addFront(strings);

function palChecker(q) {
    var charDeque = new Queue();

    for (var i = 0; i < q.size(); i++) {
        charDeque.addRear(q[i]);
    }

    var stillEqual = true;

    while (charDeque.size() > 1 && stillEqual) {
        var first = charDeque.removeFront();
        var last = charDeque.removeRear();

        if (first !== last) {
            stillEqual = false;
        }
    }

    return stillEqual;
}

console.log(palChecker(q[0]));
console.log(palChecker(q[1]));

/*
Modify the priority queue example from Example 5-5 so that the higher-priority
elements have higher numbers rather than lower numbers. Test your implementa‐
tion with the example in the chapter.
*/
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.toString = toString;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

/*
Modify the ED example (Example 5-5) so the user can control the activity in the
ED. Create a menu system that allows the user to choose from the following activ‐
ities:
a. Patient enters ED.
b. Patient is seen by doctor.
c. Display list of patients waiting to be seen.
*/
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.toString = toString;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var p = prompt(new Patient("Smith what is your ED? "));
var ed = new Queue();
ed.enqueue(p);
console.log(ed.toString());
p = prompt(new Patient("Jones what is your ED? "));
ed.enqueue(p);
console.log(ed.toString());
p = prompt(new Patient("Fehrenbach what is your ED? "));
ed.enqueue(p);
console.log(ed.toString());
p = prompt(new Patient("Brown what is your ED? "));
ed.enqueue(p);
console.log(ed.toString());
p = prompt(new Patient("Ingram what is your ED? "));
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());