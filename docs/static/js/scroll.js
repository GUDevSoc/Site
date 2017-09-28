$("#linker").click(function(){ goToByScroll(document.getElementById("linker").href); return false; });

function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}