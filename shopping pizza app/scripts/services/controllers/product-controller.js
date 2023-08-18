//glue b/w view and model
// controller ui i/o

import { productopertation } from "../product-operation.js";


// data exchange between view and model
 async function loadpizzas()
{
  const pizzas= await productopertation.loadproducts();
  console.log('pizza are ',pizzas);
  for(let pizza of pizzas){
    preparepizzacard(pizza);
  }
  
  }

loadpizzas();

function addTOCard(product){
// this -keyword (current calling object reference)

  console.log('add to card called....',this);
  const currentbutton=this;
  const pizzaId= currentbutton.getAttribute('product-id');
  console.log('pizza id is ',pizzaId);
  productopertation.search(pizzaId);
}

function preparepizzacard(pizza){
  const outputDiv=document.querySelector('#output');
  const colDiv =document.createElement('div');
  colDiv.className ='col-4';
  const cardDiv =document.createElement('div');
  cardDiv.className ='card';
  cardDiv.style="width: 18rem";
  colDiv.appendChild(cardDiv);
  const img=document.createElement('img');
  img.src=pizza.url;
  img.className='card-img-top';
  cardDiv.appendChild(img);
  const cardBody=document.createElement('div');
  cardBody.className='card-body';
  cardDiv.appendChild(cardBody);
  const h5=document.createElement('h5');
  h5.className = 'card-title';
  h5.innerText = pizza.name;
   const pTag = document.createElement('p');
   pTag.className ='card-text';
   pTag.innerText =pizza.desc;
   const button = document.createElement('button');
   button.setAttribute('product-id',pizza.id);
   button.addEventListener('click',addTOCard);//event bind
   button.innerText ='add to card';
   button.className='btn btn-primary';
   cardBody.appendChild(h5);
   cardBody.appendChild(pTag);
   cardBody.appendChild(button);
   outputDiv.appendChild(colDiv);
}
