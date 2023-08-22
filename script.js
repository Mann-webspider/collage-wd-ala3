let plus = document.getElementById("plus")
let minus = document.getElementById("minusbtn")
let quantity = document.getElementById("product-range")
let bigImg = document.getElementById("bigImg")
let thumbnail = document.querySelectorAll(".product-thumb button img")
let addCart = document.getElementById("add-cart")
let productPrice = document.querySelector(".item-price div h2") 
let checkoutBill = document.getElementById("checkout-bill")
let deleteCart = document.getElementById("delete-cart")
let emptyCart = document.getElementById("checkout-items-empty")
let nonEmptyCart = document.getElementById("checkout-items")
let checkbox = document.getElementById("check")
// code for quantity of product buy 
minus.addEventListener("click",minusf)
plus.addEventListener("click",plusf)
function minusf(){
    let value = quantity.innerText 
    let num = parseInt(value)
    if(num <=1){
        return;
    }
    quantity.innerText = num - 1
}   

function plusf() {
    let value = quantity.innerText 
    let num = parseInt(value)
    quantity.innerText = num + 1
}


//code for change the big image
for(btn of thumbnail){
    btn.addEventListener("click",function (){
        let img = this.src
        
        let modify = img.replace("-thumbnail","")
        bigImg.src = modify
    })
}

//code for checkout

addCart.addEventListener("click",()=>{
    checkbox.checked = true
    emptyCart.classList.add("hidden")
    nonEmptyCart.classList.remove("hidden")
    let productValue = productPrice.innerText;
    let ProductValueModify =parseInt(productValue.replace("$",""))
    let quantityValue = quantity.innerText 
    let quantityNum = parseInt(quantityValue)
    checkoutBill.innerHTML = `<p id="checkout-bill">${productValue} x ${quantityNum} <span> $${ProductValueModify*quantityNum} </span> </p>`
})

//code for checout toggle
deleteCart.addEventListener("click",()=>{
    emptyCart.classList.remove("hidden")
    nonEmptyCart.classList.add("hidden")

})