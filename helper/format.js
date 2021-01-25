
const format = ( str = '' ) =>
{

    return str.replace( /^./, str[0].toUpperCase() );

};

//////---------------------------------------------->>>>>

export { format };