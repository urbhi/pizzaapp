//product model(blue print)
//pizza object -id ,name ,desc,price,ratings,images

class Product
{ 
constructor(id,name, desc ,price,url){
//this -keyword (contains currents calling object refences)
this.id=id;
this.name=name;
this.desc=desc;
this.price=price;
this.url=url;
}
}
export default Product;