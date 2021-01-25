import { getProducts } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";



//////<<<<<-----------------------------------------------------------``



getProducts()
.then( ( products ) => 
{  

    
    content( products );


})
.catch( ( error ) => console.log( error ) );




