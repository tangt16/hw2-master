$(function(){
    $("#thumbnails img").click(function(e){
        console.log('clicked',$(this).attr("src"));
        var clickedImg = $(this).attr("src");
        $("#main-image").attr("src", clickedImg);
        e.preventDefault();
        return false;
    });
});
