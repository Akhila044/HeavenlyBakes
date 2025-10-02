function  filterItems(category){
   let cards= document.querySelectorAll(".card")
   let buttons=document.querySelectorAll("#menu_btns>button")
   console.log(buttons)    //@accessing the buttons
   cards.forEach((card)=>{
     if(category=="all"){
        card.style.display="flex"
     }else{
        if(card.classList.contains(category)){
            card.style.display="flex"
        }else{
            card.style.display="none"
        }
     }
   })
   buttons.forEach((btns)=>{
      console.log(btns)   //@accessing the individual buttons
      btns.classList.remove("active")
   })
   console.log(event) 
//@there is inbulid event which perfrom different task which is pointer event where on pointing to it ,it will make some changes 
   event.target.classList.add("active")  
//@inside poniter event there is target inside target there is something called as classList for that classList we are adding active  
}

// !ADD TO CART FUNCTIONALITY
let cart=[];

let cards=document.querySelectorAll(".card")
// console.log(cards)
cards.forEach((card)=>{
   //  console.log(card)
    let name=card.querySelector(".cart_one>.cart_info>h2").innerText
    let price=Number(card.querySelector(".cart_one>.cart_info>p").innerText.replace(" ₹","").replace("/-" ,""))
    let quantity=card.querySelector(".cart_two>.quantity_cart>.quantity")
   //  console.log(name)    //@here we are accessing the food item name which item we want to eat
   //  console.log(price)     //@here we are accessing the price of food item
   // console.log(quantity)   //@accessing the price 

     let plusBtn= card.querySelector(".plus")   //@adding the item   
     plusBtn.addEventListener("click",()=>{
      quantity.innerText=Number(quantity.innerText) +1
     })

   
   let minusBtn=card.querySelector(".minus")   //@removing the item
     minusBtn.addEventListener("click",()=>{
     let current= Number(quantity.innerText)
     if(current>0)
      quantity.innerText=current-1
     })
  
// !
     let addBtn = card.querySelector(".addToCart>button")
 addBtn.addEventListener("click",()=>{
   let qty = Number(quantity.innerText)
   if(qty>0){
     let exisitingItem = cart.find(item=>item.name==name)
     if(exisitingItem){
      exisitingItem.qty+=qty
     }else{
      cart.push({name,qty,price})
      addBtn.style.background="chocolate"
     }
     quantity.innerText = 0 //@we are making again to inital quantity 0 
     updateCart()
   }else{
    alert("PLEASE ADD MIN OF 1 ITEM")
   }
 })
 

// !Updating cart    

   function updateCart(){     
      let totalQty=0
      let totalPrice=0
      cart.forEach((item)=>{
        totalQty+=item.qty
        totalPrice+=item.price*item.qty
      })
      let cart_qty=document.getElementById("cart_quantity")
      let cart_price=document.getElementById("cart_price")

      cart_qty.innerText=totalQty
      cart_price.innerText=`₹${totalPrice.toFixed(2)}`


   let sidebar_items=document.querySelector("#sidebar_items")
    console.log(sidebar_items)
    sidebar_items.innerHTML=""
    cart.forEach((item,index)=>{
      sidebar_items.innerHTML+=`
      <div class='items_info'>
      <h2>Product : ${item.name}</h2>
      <p id='qua'>Quantity : ${item.qty}</p>
      <p id='price'>Price: ₹${item.price} x ${item.qty} = <b>₹${(item.price * item.qty).toFixed(2)}</b></p>
      <button class='removeBtn' item_index="${index}">Remove</button>
      </div>
      <br><br>
      <hr>
      `
    })
  
    if (cart.length > 0) {
    sidebar_items.innerHTML += `
      <div class='cart_summary'>
        <h2>Total Quantity: ${totalQty}</h2>
        <h2 id='rate'>Total Price: ₹${totalPrice.toFixed(2)}</h2>

      </div>
     `
}
let removeButtons = document.querySelectorAll(".removeBtn")
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = e.target.getAttribute("item_index")
      cart.splice(index, 1)
      updateCart() 
    })
  })

}
})


// !BUY NOW 
let buybtn=document.getElementById("buyBtn")
buybtn.addEventListener("click",()=>{
       if(cart.length===0){
         alert("Your Cart is empty")
       }else{
         alert("Thanks For Purchasing")
         cart=[]
       }
})



  
   //   !SideBar Functionality
   let carticon=document.getElementById("cart")
      let sidebar= document.getElementById("sidebar")
   carticon.addEventListener("click",()=>{
      sidebar.style.right="0px"
   })
   let closesidebar=document.getElementById("close_sidebar")
    closesidebar.addEventListener("click",()=>{
      sidebar.style.right="-300px"
    })


   

   












