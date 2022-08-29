products.map( (item, index) => { 
   let key = localStorage.getItem("key")
   let img = localStorage.getItem("img")
   let price = localStorage.getItem("price")
   let description = localStorage.getItem("description")

   document.querySelector('.page-product-img').src = img
   document.querySelector('.page-product-description').innerHTML = description
   document.querySelector('.page-product-price').innerHTML = price
   
})