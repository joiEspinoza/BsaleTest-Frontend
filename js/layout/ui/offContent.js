
const offContent = () =>
{

    const mainRow = document.getElementById( 'mainRow' );

    const contDiv = document.createElement( 'div' );
    contDiv.classList.add( 'boxImg' );

    const imgOff = document.createElement( 'img' )
    imgOff.src = "https://res.cloudinary.com/djlmqpd2n/image/upload/v1611563879/BSale%20Test/load_fkoj2j.gif";

    contDiv.append( imgOff );

    mainRow.append( contDiv );


};