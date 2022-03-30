/*
A stack can be used to ensure that an arithmetic expression has balanced paren‐
theses. Write a function that takes an arithmetic expression as an argument and
returns the postion in the expression where a parenthesis is missing. An example
of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
* .24.
*/
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.clear = clear;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

var ns = new Stack();
var expression = "2.3 + 23 / 12 + 3.14159) * .24";

function missingParen(expression) {
    var ns = new Stack();

    for (var i = 0; i < expression.length; i++) {
        if (expression[i] === "(") {
            ns.push(i);
        }

        if (expression[i] === ")") {
            if (ns.pop() === undefined) {
                console.log("Mismatched ) at " + i);
            }
        }
    }

    if (ns.length() === 0) {
        console.log("no mismatching parens!");
    } else if (ns.length() === 1) {
        console.log("Mismatching ( at position " + ns.peek());
    }
}

missingParen(expression);

/*
A postfix expression evaluator works on arithmetic expressions taking the following
form:
op1 op2 operator
Using two stacks—one for the operands and one for the operators—design and
implement a JavaScript function that converts infix expressions to postfix expres‐
sions, and then use the stacks to evaluate the expression.
*/
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.clear = clear;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

function prec(c) {
    if (c == '^')
        return 3;
    else if (c == '/' || c == '*')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}

function infixToPostfix(s) {
    var st = [];
    var result = "";
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            result += c;
        else if (c == '(')
            st.push('(');
        else if (c == ')') {
            while (st[st.length - 1] != '(') {
                result += st[st.length - 1];
                st.pop();
            }
            st.pop();
        }
        else {
            while (st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                result += st[st.length - 1];
                st.pop();
            }
            st.push(c);
        }
    }
    while (st.length != 0) {
        result += st[st.length - 1];
        st.pop();
    }

    console.log(result);
}

var exp = "a+b*(c^d-e)^(f+g*h)-i";
infixToPostfix(exp);

/*
An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow
ones. Write a program that uses a stack (and maybe more than one) to remove the
yellow ones without changing the order of the other candies in the dispenser.
*/
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.clear = clear;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

Stack.prototype.temporaryArray = [];
Stack.prototype.temporaryTop = 0;
Stack.prototype.pushInTemporaryArray = function (element) {
    this.temporaryArray[this.temporaryTop++] = element;
};

var s = new Stack();

function fullArray(element) {

    element.forEach(function (item, i, arr) {
        s.push(item);
    });
}

function removeAllYellow(oldColor, newColor) {
    s.dataStore.forEach(function (item, i, arr) {
        if (item == oldColor) {
            s.pushInTemporaryArray(newColor);
        } else {
            s.pushInTemporaryArray(item);
        }
    });
    s.dataStore = s.temporaryArray;
}


fullArray(["white", "yellow", "green", "white", "yellow", "green", "white", "yellow", "green"]);

removeAllYellow("yellow", "red");
console.log(s.dataStore);