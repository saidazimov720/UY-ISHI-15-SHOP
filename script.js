var sum = document.getElementById("sum");
var item = document.getElementById("item");
var totalSum = 0;
var itemCount = 0;

function solve(cashAmount) {
    totalSum += cashAmount;
    itemCount++;
    
    sum.innerHTML = `<span>Total cost: ${totalSum} so'm</span>`;
    item.innerHTML = `<span>Total items: ${itemCount}</span>`;
}
