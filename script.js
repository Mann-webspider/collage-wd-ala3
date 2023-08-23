let plus = document.getElementById("plus")
let minus = document.getElementById("minusbtn")
let quantity = document.getElementById("product-range")
let bigImg = document.getElementById("bigImg")
let bigImgModel = document.getElementById("bigImgModel")
let thumbnail = document.querySelectorAll(".product-thumb button img")
let thumbnailModel = document.querySelectorAll(".product-thumb-model button img")
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
for(btn of thumbnailModel){
    btn.addEventListener("click",function (){
        let img = this.src
        
        let modify = img.replace("-thumbnail","")
        
        bigImgModel.src = modify

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


// code for opening model
// Get the modal
var modal = document.getElementById("myModel");

// Get the button that opens the modal
var btn = document.getElementById("openModel");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}