var rating;

$(".rating > button").on("click",function(event) {
    
    if ($(this).hasClass("selected")){

        $(this).toggleClass("selected");
    
        $(".submit").addClass("before-click");
    }
    else {
    
        $(".btn").removeClass("selected");
    
        $(this).addClass("selected");
    
        $(".submit").removeClass("before-click");

    }  
    
    localStorage.setItem("myVariable", $(this).text());

});



$(".submit").click(function(){
    window.location.href = "./thanks.html";
});

var variable1 = localStorage.getItem("myVariable")
$("p.rating-details").text("You Selected " + variable1 + " out of 5");


