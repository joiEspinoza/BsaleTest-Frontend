import { format } from "../../../helper/format.js";

//////<<<<<------------------------------------------------``


const content = ( products, id = false ) => 
{

    if( id )
    {
        products = [ ...products.filter( ( product ) => product.category === id ) ];
    };

    const mainRow = document.getElementById( 'mainRow' );

    const divLoading = document.getElementById( 'boxImg' );
    divLoading.setAttribute( 'hidden', true );

    return products.map( ( product ) => 
    {

        const br = document.createElement( 'br' );

        const col3 = document.createElement( 'div' );
        col3.classList.add( 'col-md-3' );
    
    ////////////////////////////////////////////////////////////////////////
        
        const card = document.createElement( 'div' );
        card.classList.add( 'card' );
        card.classList.add( 'mt-5' );
        card.classList.add( 'animate__animated' );
        card.classList.add( 'animate__fadeIn' );

    /////////////////////////////////////////////////////////////////////////

        const cardHeader = document.createElement( 'div' );
        cardHeader.classList.add( 'card-header' );

        
        const productImg = document.createElement( 'img' );
        productImg.classList.add( 'card-img-top' );
        productImg.src = product.url_image ? product.url_image : 'https://res.cloudinary.com/djlmqpd2n/image/upload/v1611514254/BSale%20Test/cans_x92lnv.png';
        cardHeader.append( productImg );
    
    /////////////////////////////////////////////////////////////////////////

        const cardBody = document.createElement( 'div' );
        cardBody.classList.add( 'card-body' );
        cardBody.classList.add( 'text-center' );

        const pName = document.createElement( 'p' );
        pName.classList.add( 'pName' );
        pName.innerText = format( product.name.toLowerCase() );

        

        const pPrice = document.createElement( 'p' );
        pPrice.innerText = `$ ${ product.price }`;

        cardBody.append( pName );
        cardBody.append( br );
        cardBody.append( pPrice );

    /////////////////////////////////////////////////////////////////////////

        const cardFooter = document.createElement( 'div' );
        cardFooter.classList.add( 'card-footer' );


        const cardButton = document.createElement( 'button' );
        cardButton.classList.add( 'btn' );
        cardButton.classList.add( 'btn-primary' );
        cardButton.classList.add( 'form-control' );
        cardButton.innerText = 'Buy';
    
    //////////////////////////////////////////////////////////////////////
    

        cardFooter.append( cardButton );
    
        card.append( cardHeader );
    
        card.append( cardBody );
    
        card.append( cardFooter );
    
        col3.append( card );
    
        mainRow.append( col3 );


    ///////////////////////////////////////////////////////////////////////
    

    });

}

//////---------------------------------------------->>>>>


export { content };
