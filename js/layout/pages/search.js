import { getProductsBySearchValue } from "../../Actions/productsActions.js";
import { content } from "../ui/content.js";

//////<<<<<-----------------------------------------------------------``

const searchBtn = document.getElementById( 'searchBtn' );

if( searchBtn )
{
    searchBtn.addEventListener( 'click',( event )=>
    {

        if( document.getElementById( 'searchInput' ).value === '' )
        {

            alert( 'Search value is required' );
            event.preventDefault();

        }
        else
        {
            localStorage.setItem( 'searchValue', document.getElementById( 'searchInput' ).value )
        };
        

    });

};


/////////////////////////////////////////////////////////////////////////////////


if( localStorage.getItem( 'searchValue' ) )
{

    getProductsBySearchValue( localStorage.getItem( 'searchValue' ) )
    .then( ( products ) => 
    {
        content( products );
        localStorage.clear();
    })
    .catch( ( error )=> {

        window.location.href = "index.html"; 
        console.log( error );
    } );

};


/////////////////////////////////////////////////////////////////////////////////



