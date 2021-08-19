

function getProductInput(product, price, isIncrease) {
    const productInput = document.getElementById(product + "-number");
    let productValue = productInput.value;
    if (isIncrease == true) {
        productValue = parseInt(productValue) + 1;
    }
    else if (productValue > 0) {
        productValue = parseInt(productValue) - 1;
    }
    productInput.value = productValue;

    // phone tatal 
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productValue * price;
    netTotalBill();
};

function countProduct(product) {
    const productInput = document.getElementById(product + "-number");
    const productValue = parseInt(productInput.value);
    return productValue;
}

function netTotalBill() {
    const phoneTotal = countProduct("phone") * 1219;
    const caseTotal = countProduct("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-total").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}


document.getElementById("phone-plus").addEventListener("click", function () {
    getProductInput("phone", 1219, true)
});
document.getElementById("phone-minus").addEventListener("click", function () {
    getProductInput("phone", 1219, false)
});
document.getElementById("case-plus").addEventListener("click", function () {
    getProductInput("case", 59, true)
});
document.getElementById("case-minus").addEventListener("click", function () {
    getProductInput("case", 59, false)
});