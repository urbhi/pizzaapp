//product crud operation(logics) 
//c-create,r-read,u-update,d-del
//it talk to network layer to bring the json ,and conver
//json into object vice-versa
import makenetworkcall from "./api-client.js";
import Product from "./models/product.js";

 export const productopertation = {
    products:[],//key:value
    search(pizzaId){
    const product=this.products.
    find(currentProduct=>currentProduct.id=pizzaId);
     console.log('product found',product);
    },
    async loadproducts(){
         const pizza = await makenetworkcall();
         console.log("Pizza",pizza);
         const pizzaArray = pizza['Vegetarian'];
         console.log("pizza",pizzaArray);
         const productsArray = pizzaArray.map(pro=>{
            const currentpizza =new Product(pro.id,pro.name,
                pro.menu_description,pro.price,pro.url)
            return currentpizza;
        } )
        console.log('products Array',productsArray);
        this.products=productsArray;
        return productsArray;//wrap in promise

    },
    sortproducts(){

    },
    searchproducts(){

    }
}

