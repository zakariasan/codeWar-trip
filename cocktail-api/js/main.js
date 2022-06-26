//Example fetch using pokemonapi.co
let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;

document.querySelector('button').addEventListener('click', getFetch)
//document.querySelector('input').addEventListener('keydown', getFetch)
function getFetch( ){
  innerSlider.innerText = "";
  const choice = document.querySelector('input').value;

  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`
    console.log(url);
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks)
        if(data === 'null'){
        
          let h22 = document.createElement('h2');
          h2.innerText = "sorry No cocktails with name of" +choice;
        }else{ 
        data.drinks.forEach(a=>{

          let div = document.createElement('div');
          div.classList.add('card');
          innerSlider.append(div);
          let h2 = document.createElement('h2');
          h2.innerText = a.strDrink;
          div.append(h2)
          let img = document.createElement('img');
          img.src = `${a.strDrinkThumb}`
          div.append(img)

          let par = document.createElement('p');
          par.innerText = `${a.strInstructions}`
          div.append(par)
  
} ) }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;
  checkBoundary();
});
const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }
      if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
}
