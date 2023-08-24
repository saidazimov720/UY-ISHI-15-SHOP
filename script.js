var sum = document.getElementById("sum");
var item = document.getElementById("item");
var items = [];

function solve(cashAmount) {
    items.push(cashAmount);

    var totalSum = items.reduce(function (acc, currentValue) {
        return acc + currentValue;
    }, 0);

    var itemCount = items.length;
    
    sum.innerHTML = `<span>Total cost: ${totalSum.toLocaleString("uz")} so'm</span>`;
    item.innerHTML = `<span>Total items: ${itemCount}</span>`;
}
