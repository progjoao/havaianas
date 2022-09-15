products.map((item, index) => {

   let productList = document.querySelector('.product').cloneNode(true)
   document.querySelector('.deposit-product-cloned').append(productList)

   let key = productList.setAttribute("key", index)
   let img = productList.querySelector('.product-image').src = item.img
   let description = productList.querySelector('.product-description').innerHTML = `<small>Descrição</small>\n<h5>${item.description}</h5>`
   let price = productList.querySelector('.product-price').innerHTML = `<small>A partir de</small>\n<h4>R$${item.price} à vista</h4>`


   // Vai p/ page de detalhes do produto, envia dados para localStorage
   productList.addEventListener('click', (el) => {
      el.preventDefault()
      window.location.href = '../pages/details-product.html'

      localStorage.setItem("key", index)
      localStorage.setItem("img", img)
      localStorage.setItem("description", description)
      localStorage.setItem("price", price)
   })

   let btnCart = document.querySelector('.btn-cart')
   btnCart.addEventListener("click", (el) => {
      el.preventDefault()
      window.location.href = '../pages/shopping-cart.html'
   })















   /* Cart */
   // productList.addEventListener("click", (e) => {
   //     e.preventDefault()
   //     openCart(e)

   //     let key = productList.getAttribute('key')
   //     console.log(key)

   //     let contentCart = document.querySelector('.cart-body')

   //     select('.cart-product-img').src = products[key].img
   //     select('.cart-product-description').innerHTML = products[key].description
   //     select('.cart-product-price').innerHTML = `À vista R$${products[key].price}`
   // })

   // let btnCart = document.querySelector('.btn-cart').addEventListener("click", openCart)
   // let btnCloseCart = document.querySelector('.close-cart').addEventListener("click", closeCart)
   // let continueBuy = document.querySelector('.continue-buy').addEventListener("click", closeCart)

   // function openCart(e) {
   //    e.preventDefault()
   //    let cart = select('.cart')

   //    if (cart.classList.contains('hide-cart')) {
   //       cart.classList.remove('hide-cart')
   //       cart.classList.add('show-cart')
   //    }
   // }

   // function closeCart(e) {
   //    e.preventDefault()
   //    let cart = select('.cart')

   //    if (cart.classList.contains('show-cart')) {
   //       cart.classList.remove('show-cart')
   //       cart.classList.add('hide-cart')
   //    }
   // }
})