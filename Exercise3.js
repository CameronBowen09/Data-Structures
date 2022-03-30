/*
Write a function that inserts an element into a list only if the element to be insertedis larger than any of the elements currently in the list. 
Larger can mean either greaterthan when working with numeric values, or further down in the alphabet, whenworking with textual 
values.
*/

function List() {
    this.array = [1, 37, 8, 50];
    this.add = add;
    this.check = check;
    this.display = display;
}

function display(data, description) {
    console.log(data, "---" + description + "---");
}

function add(data) {
    if (this.check(data)) {
        this.array.push(data);
        this.display(this.array, "succses")
    }
    else {
        this.display(this.array, "error")
    }
}

function check(data) {
    var arrayType = this.array.filter(function (number) {
        return typeof number == typeof data;
    });
    function bigger(number) {
        return data > number;
    }
    return arrayType.every(bigger);
}

var list = new List();
list.add(100); // Will add to the list and show succses
list.add(30) // Will not add to the list and show error

/*
Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list. 
*/

function List() {
    this.array = [1, 37, 8, 50];
    this.add = add;
    this.check = check;
    this.display = display;
}

function display(data, description) {
    console.log(data, "---" + description + "---");
}

function add(data) {
    if (this.check(data)) {
        this.array.push(data);
        this.display(this.array, "succses")
    }
    else {
        this.display(this.array, "error")
    }
}

function check(data) {
    var arrayType = this.array.filter(function (number) {
        return typeof number == typeof data;
    });
    function smaller(number) {
        return data < number;
    }
    return arrayType.every(smaller);
}

var list = new List();
list.add(0); // Will add to the list and show succses
list.add(30) // Will not add to the list and show error

/*
Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.
*/
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.displayPeople = displayPeople;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function displayPeople() {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "F") {
            female.append(this.dataStore[i]);
        }
    }
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "M") {
            male.append(this.dataStore[i]);
        }
    }
    console.log("\nFemales: ");
    for (var f = 0; f < female.dataStore.length; f++) {
        console.log("\t" + female.dataStore[f].name);
    }
    console.log("\nMales: ");
    for (var m = 0; m < male.dataStore.length; m++) {
        console.log("\t" + male.dataStore[m].name);
    }
}

var male = new List();
var female = new List();
var people = new List();

function run() {
    var person1 = new Person("Sipho", "M");
    var person2 = new Person("Neo", "F");
    var person3 = new Person("Dyllan", "M");
    var person4 = new Person("Fiona", "F");
    var person5 = new Person("Mike", "M");

    people.append(person1);
    people.append(person2);
    people.append(person3);
    people.append(person4);
    people.append(person5);
    people.displayPeople();
}

run();

/*
Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.
*/
var movies = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II',
    'Pulp Fiction', 'The Good, the Bad and the Ugly', '12 Angry Men', 'Schindler’s List',
    'The Dark Knight', 'The Lord of the Rings: The Return of the King',
    'Fight Club', 'Star Wars: Episode V - The Empire Strikes Back',
    'One Flew Over the Cuckoo’s Nest', 'The Lord of the Rings: The Fellowship of the Ring',
    'Inception', 'Goodfellas', 'Star Wars', 'Seven Samurai', 'The Matrix', 'Forrest Gump',
    'City of God'];

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function checkOut(movieName) {
    for (var i = 0; i < movieList.dataStore.length; i++) {
        if (movieList.contains(movieName)) {
            checkedOutMovies.append(movieName);
            movieList.remove(movieName);
            console.log(movieName + " is rentd out.")
        }else{
            console.log(movieName + " is not available.")
        }
    }
}

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

var checkedOutMovies = new List();

function run() {
    checkOut("12 Angry Men");
}

/*
Create a check-in function for the video-rental kiosk program so that a returned
movies is deleted from the rented movies list and is added back to the available
movies list.
*/
var movies = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II',
    'Pulp Fiction', 'The Good, the Bad and the Ugly', '12 Angry Men', 'Schindler’s List',
    'The Dark Knight', 'The Lord of the Rings: The Return of the King',
    'Fight Club', 'Star Wars: Episode V - The Empire Strikes Back',
    'One Flew Over the Cuckoo’s Nest', 'The Lord of the Rings: The Fellowship of the Ring',
    'Inception', 'Goodfellas', 'Star Wars', 'Seven Samurai', 'The Matrix', 'Forrest Gump',
    'City of God'];

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function checkOut(movieName) {
    for (var i = 0; i < movieList.dataStore.length; i++) {
        if (movieList.contains(movieName)) {
            checkedOutMovies.append(movieName);
            movieList.remove(movieName);
            console.log(movieName + " is rentd out.")
        }else{
            console.log(movieName + " is not available.")
        }
    }
}

function returnMovie(movieName) {
    for (var i = 0; i < movieList.dataStore.length; i++) {
        if (checkedOutMovies.contains(movieName)) {
            movieList.append(movieName);
            checkedOutMovies.remove(movieName);
            console.log(movieName + " was returned");
        }else {
            console.log("Sorry " + movieName + " is not ours.");
        }
    }
}

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

var checkedOutMovies = new List();

function run() {
    checkOut("12 Angry Men");
    returnMovie("The Lord of the Rings: The Fellowship of the Ring");
}

run();