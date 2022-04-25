// 1. in the beginning, populate the stock array with 10 items

// 2. display the stock array to the user

// 3. let the user select the item and quantity

// 4. do an insert into the cart array representing the selection

// 5. display the cart contents

// 6. is the user finished?

// 7. if yes, sheck out and store the cart selection in an order array and clear the cart

// 8. display all orders

// 9. display all the orders

function stockItems(item_id, item_name, price, quantity = 0, total = 0) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
}

var stock = [];
var cart = [];
var orders = [];
var totalOrderAmt = 0;

var item1 = new stockItems(1, "Beer", 19);
var item2 = new stockItems(2, "Coke", 12);
var item3 = new stockItems(3, "Bread", 14);
var item4 = new stockItems(4, "Cheese", 120);
var item5 = new stockItems(5, "Jam", 40);
var item6 = new stockItems(6, "Juice", 32);
var item7 = new stockItems(7, "Coffee", 65);
var item8 = new stockItems(8, "Milk", 28);
var item9 = new stockItems(9, "Tomatos", 30);
var item10 = new stockItems(10, "Potatos", 34);

stock.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10);

function add_selection(x) {
    document.getElementById("total").innerHTML = "";
    stock[x].quantity = stock[x].quantity + 1;
    stock[x].total = stock[x].price * stock[x].quantity;
    totalOrderAmt += stock[x].price;
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart.push(stock[i])
        }
    }
    display_all();
}

function subtract_selection(x) {
    if (stock[x].quantity > 0) {
        stock[x].quantity = stock[x].quantity - 1;
        stock[x].total = stock[x].price * stock[x].quantity;
        totalOrderAmt -= stock[x].price;
    }
    cart = [];
    for (var i in stock) {
        if (stock[i].quantity > 0) {
            cart.push(stock[i])
        }
    }
    display_all();

}

var order_number = 1;       
var orders = [];            
var checkout_list = [];     

function displayTotal() {
    if (totalOrderAmt != 0) {
    for (i in cart) {
        checkout_list.push("<br>" + cart[i].quantity + "x " + cart[i].item_name + "\t")
    }
    document.getElementById("total").innerHTML = "Order ID: " + order_number +
        "<br>Items:" + checkout_list + "<br/>Total order amount is R" + totalOrderAmt.toFixed(2);
    orders.push("Order ID: " + order_number + " " + checkout_list + "<br> Total: " + totalOrderAmt + "<br><br>");
    checkout_list = [];
    order_number += 1;
    cart = [];
    for (i in stock) {
        stock[i].quantity = 0;
        stock[i].total = 0;
        totalOrderAmt = 0;
    }
    display_all();
    }
}

function order_history() {
    document.getElementById("total").innerHTML = orders;
}

function display_all() {

    var myTable = "<table><th style='width: 100px; color: black; text-align: right;'>Item ID</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: black; text-align: right;'>Total</th>";

    for (i = 0; i < stock.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].item_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].item_name + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].price.toFixed(2) + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].quantity + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].total.toFixed(2) + "</td>";
        myTable += "<td style='text-align: center'><button onclick='add_selection(" + i + ")'>+</button></td>";
        myTable += "<td style='text-align: center'><button onclick='subtract_selection(" + i + ")'>-</button></td>";
    }
    myTable += "</table>";

    var myCart = "<cart style='color: black; text-align: left;'>"
    var myCart = "<br/>  Shopping Cart  <br/>";
    var emptyCart = "<br>Cart is Empty!<br>"
    if (cart.length == 0) {
        myCart += emptyCart;
    }
    for (var i in cart) {
        myCart += "    " + cart[i].quantity + " x " + cart[i].item_name + "<br>";
    }
    myCart += "<br>Total: " + totalOrderAmt.toFixed(2);
    document.getElementById("total").innerHTML = myCart;
    myCart += "</cart>";
    myTable += "<br/><br/><button onclick='displayTotal()'> Checkout </button>";
    myTable += "<br><br><button onclick='order_history()'>Order History</button>";

    document.getElementById("demo").innerHTML = myTable;


}