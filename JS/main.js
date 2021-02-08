//   Slick Sliders

$('.favourite-slider').slick({
   infinite: true,
   slidesToShow: 2.09,
   slidesToScroll: 2,
   rows: 2,
   centerMode: true,
   arrows: true,
   nextArrow: '.slider-arrow__next'
});

// Coffee Slider
$('.coffee-slider').slick({
   infinite: true,
   slidesToShow: 3.1,
   slidesToScroll: 3,
   centerMode: true,
   nextArrow: '.coffee-next-btn',
   prevArrow: '.coffee-prev-btn'
});






// Card Logic
let cards = document.querySelectorAll(".card-item__left");
let cardsArray = Array.from(cards);
let cardsBtns = document.querySelectorAll(".card-item__btn-btn");
let cardsBtnsArray = Array.from(cardsBtns);

// Add event listener
let cardsBtn = cardsBtns.forEach(item => {
   item.addEventListener("click", changeCards)
})

// Get the current btn && card, activate resetActive Func

function changeCards() {

   let currentBtn = this.getAttribute("data-btn") - 1;
   let currentCard = cardsArray[currentBtn];

   cardsBtns.forEach(btn => {
      btn.parentElement.classList.remove("active")
   });
   cards.forEach(card => {
      card.classList.remove("active")
   })

   currentCard.classList.add("active");
   cardsBtnsArray[currentBtn].parentElement.classList.add("active");
}