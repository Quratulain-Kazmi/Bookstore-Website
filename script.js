// ADD TO CART

let cartCount = 0;
let cartDisplay = document.querySelector(".cart-count");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        cartCount++;
        cartDisplay.textContent = cartCount;

        alert("Book added to cart");

    });

});


// SEARCH USING ICON

let searchIcon = document.getElementById("searchIcon");
let books = document.querySelectorAll(".book");

searchIcon.addEventListener("click", function(){

    let searchValue = prompt("Search your book or author:");

    if(searchValue === null) return;

    searchValue = searchValue.toLowerCase();

    books.forEach(function(book){

        let text = book.textContent.toLowerCase();

        if(text.includes(searchValue)){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});


