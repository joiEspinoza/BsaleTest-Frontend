import { getCategories } from "../../Actions/productsActions.js";

//////<<<<<------------------------------------------------``

const nav2 = document.querySelector( '.navBar2' );


getCategories()
.then( ( categories ) => 
{
   
    categories.map( ( category ) => 
    {


        const li = document.createElement( 'li' );
        li.classList.add( 'nav-item' );

    ///////////////////////////////////////////////////////////////////////////


        const a = document.createElement( 'a' );
        a.classList.add( 'nav-link' );
        a.classList.add( 'pointer' );
        a.classList.add( 'link' );
        a.setAttribute( 'id', category.id );
        a.href = `${ ( category.name.replace( /[ " " ]/g,"") ) }.html`;
        a.innerText = category.name;


    ///////////////////////////////////////////////////////////////////////////

    
        li.append( a );
        nav2.append( li );

    });
        

  
} )
.catch( ( error ) => console.log( error ) );