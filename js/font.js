
$(document).ready(function() {
    $("*").each( function () {
        var $this = $(this);
        if($(window).width() <= 320){
        //if (parseInt($this.css("fontSize")) < 12) {
            $this.css({ "font-size": "12px" });   
        }else{

        }
    });
});