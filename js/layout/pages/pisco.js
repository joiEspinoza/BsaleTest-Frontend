import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";


//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    content( products, 2 );

})
.catch( () => console.log( error ) );

