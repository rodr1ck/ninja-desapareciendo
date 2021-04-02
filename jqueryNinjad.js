$(document).ready(function(){
    $('img').click(function(){
        $(this).hide();
    });
    $('#btnRestore').click(function(){
        $( 'img' ).show( "slow");
    })
})