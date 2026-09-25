const menue=[
    { id: 1, name: "Classic Burger", price: 120, category: "burgers", img: "image/Burger (2).jpg" },
    { id: 10, name: "Classic Burger", price: 150, category: "burgers", img: "image/Burger.jpg" },
    { id: 100, name: "Classic Burger", price: 100, category: "burgers", img: "image/burger (3).jpg" },
    { id: 200, name: "Classic Burger", price: 200, category: "burgers", img: "image/purger.jpg" },
    { id: 15, name: "Classic Burger", price: 170, category: "burgers", img: "image/همبرغر.jpg" },
    { id: 13, name: "Classic Burger", price: 250, category: "burgers", img: "image/Barger.jpg" },


    { id: 2, name: "Pizza", price: 150, category: "pizza", img: "image/pizza2.jpg" },
    { id: 20, name: "Pizza", price: 190, category: "pizza", img: "image/عشق لا ينتهي___.jpg" },
    { id: 25, name: "Pizza", price: 200, category: "pizza", img: "image/pizza3.jpg" },
    { id: 29, name: "Pizza", price: 170, category: "pizza", img: "image/pizza5.jpg" },
    { id: 23, name: "Pizza", price: 270, category: "pizza", img: "image/🍕 Delicious Food Collection _ Foodie Aesthetic & Yummy Food.jpg" },
    { id: 26, name: "Pizza", price: 140, category: "pizza", img: "image/Fresh Margherita Pizza _ Authentic Italian Pizza with Basil & Mozzarella.jpg" },


    { id: 3, name: "Fresh Juice", price: 40, category: "drinks", img: "image/Cantaloupe Agua Fresca.jpg" },
    { id: 30, name: "Fresh Juice", price: 30, category: "drinks", img: "image/drink (2).jpg" },
    { id: 35, name: "Fresh Juice", price: 45, category: "drinks", img: "image/drink.jpg" },
    { id: 33, name: "Fresh Juice", price: 60, category: "drinks", img: "image/download (9).jpg" },  
    { id: 32, name: "Fresh Juice", price: 50, category: "drinks", img: "image/shoklet.jpg" },   
    { id: 34, name: "Fresh Juice", price: 20, category: "drinks", img: "image/meal ideas.jpg" },   


];
let cart=[];


const menueContainer = document.querySelector(".menue-continar");
const home=document.querySelector(".home");
const about=document.querySelector(".about");
const menueLink = document.querySelector(".menue-link");
const viewMenue=document.querySelector(".view");
const cartItem = document.querySelector(".cart-item");
const totalPrice = document.querySelector(".totalPrice");
const cartCount = document.querySelector(".cartCount");
const cartlink = document.querySelector(".cart-link");
const cartSection = document.querySelector(".cart");
const checkoutBtn=document.querySelector(".checkout-btn");

const menuBtn = document.querySelector(".menu");
const navLink = document.querySelector(".nav-link");

menuBtn.addEventListener("click", () => {
    navLink.classList.toggle("active");
});

cartlink.addEventListener("click",(e)=>{
    e.preventDefault();

    cartSection.scrollIntoView({ behavior: "smooth" });
});
checkoutBtn.addEventListener("click",()=>{
    if(cart.length===0){
        alert("Your cart is empty!");
    }
    else{
        alert("Thank you for your order! Your food is on the way 🚀");
        cart = [];
        UpdateCart();
    }
});


function addCart(id){
    const select=menue.find(item=>item.id===id);
    if(select){
        cart.push(select);
        UpdateCart();
    }
}

function removeCart(index){
    cart.splice(index,1);
    UpdateCart();

}

function UpdateCart(){
    cartCount.textContent= cart.length;
    if(cart.length===0){
        cartCount.innerHTML =`<p>Your cart is currently empty</p>`;
        totalPrice.textContent="0";
        return;
    }
    cartItem.innerHTML=cart.map((item,index)=>`
    <div class="cart-item-row">
            <p>${item.name} - $${item.price}</p>
            <button class="remove-btn" onclick="removeCart(${index})">Delete</button>
        </div>
    `
).join('');
const total=cart.reduce((sum , item)=>sum+item.price,0);
if(totalPrice) totalPrice.textContent=total;

}


viewMenue.addEventListener("click", (e) => {
    e.preventDefault();

    displayMenue(menue);

    about.scrollIntoView({ behavior: "smooth" });

})

menueLink.addEventListener("click",(e)=>{
    e.preventDefault();

    displayMenue(menue);

    about.scrollIntoView({ behavior: "smooth" });

})


home.addEventListener("click",(e)=>{
    e.preventDefault();

    about.style.display="block";

    about.scrollIntoView({behavior:"smooth"});
})

function displayMenue(item){
    menueContainer.innerHTML=item.map(item=>`
        <div class="card">
            <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>السعر: $${item.price}</p>
                <button class="btn" onclick="addCart(${item.id})"> Add to Cart</button>
        </div>
  `).join('');
    
}
document.querySelectorAll(".menue-btn").forEach(btn=>{
    btn.addEventListener("click" , (e)=>{
        const filter=(e.target.dataset.filter|| e.target.textContent).toLowerCase().trim();
        if(filter=="all"){
            displayMenue(menue)
        }
        else{
            const filtered=menue.filter(item=>item.category.toLowerCase()==filter)
            displayMenue(filtered)
        }
    })
})
 
UpdateCart();