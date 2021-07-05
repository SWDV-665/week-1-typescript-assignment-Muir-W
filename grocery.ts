//Week 1: Grocery List

interface Items {
    itemname: string;
    itemqty: string;
}

class GroceryItem implements Items{
    itemname: string;
    itemqty: string;
    unit: string;

    constructor(itemname: string, itemqty: string, unit: string) {
        this.itemname = itemname;
        this.itemqty = itemqty;
        this.unit = unit;
    }
}

var grocerylist : GroceryItem[] = [
    new GroceryItem("Apples", "3", "Bags"),
    new GroceryItem("Milk", "2", "Gallons"),
    new GroceryItem("Soda", "1", "Can"),
    new GroceryItem("Bread", "5", "Loaves")
]; 

for (var item of grocerylist) {
    var li = document.createElement("li");
    var row = document.createTextNode(item.itemqty+" "+item.unit+" of "+item.itemname);
    li.appendChild(row);
    document.getElementById("myGroceryList").appendChild(li);
}
