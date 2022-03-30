// Question 1
function Student() {
    this.grades = [];
    this.average = average;
    this.addGrades = addGrades;
  }

  function addGrades(gradeArgs) {
    this.grades.push(gradeArgs);
  };
  function average() {
    var total = 0;
    for(var i = 0; i < this.grades.length; i += 1){
      total += this.grades[i]; 
    }
    return total/this.grades.length;
  };

  var cameron = new Student();
  cameron.addGrades(60);
  cameron.addGrades(40);
  cameron.addGrades(60);
  console.log(cameron.average())

// Question 2
function concat(accumulatedString, item) {
    return accumulatedString + item;
    }
    var words = ["the ", "quick ","brown ", "fox "];
    var sentence = words.reduce(concat);
    print(sentence);

function concat(accumulatedString, item) {
    return accumulatedString + item;
    }
    var words = ["the ", "quick ","brown ", "fox "];
    var sentence = words.reduceRight(concat);
    print(sentence);

// Question 3
function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
    }
    function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var week1 = new weekTemps();
var week2 = new weekTemps();
var week3 = new weekTemps();
var week4 = new weekTemps();

undefined
for(var i = 0; i < 7; i++){
    myRandom = Math.floor(Math.random() * 36);
    week1.add(myRandom);
}

for(var i = 0; i < 7; i++){
    myRandom = Math.floor(Math.random() * 36);
    week2.add(myRandom);
}

for(var i = 0; i < 7; i++){
    myRandom = Math.floor(Math.random() * 36);
    week3.add(myRandom);
}

for(var i = 0; i < 7; i++){
    myRandom = Math.floor(Math.random() * 36);
    week4.add(myRandom);
}

var monthTemp = [week1.dataStore, week2.dataStore, week3.dataStore, week4.dataStore];

monthTemp;

week1.average();

week2.average();

week3.average();

week4.average();

var week1Average = week1.average();

var week2Average = week1.average();

var week3Average = week1.average();

var week4Average = week1.average();

var monthlyAverage =((week1Average  + week2Average  + week3Average  + week4Average) / 4);

monthlyAverage;

// Question 4
function Letters() {
    this.letterStore = ['a','l','g','o','r','i','t','h','m','s'];
    this.makeWord = function() {
        return this.letterStore.join('');
    }
}

var letters = new Letters();
print(letters.makeWord());