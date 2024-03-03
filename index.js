$("h1")
.css("color", "green")
.css("font-size", "10rem")
.css("text-align", "center")
.css("margin-top", "5px");

$(document).keydown(function(event) {
    $("h1").text(event.key.toUpperCase());
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
})

$("h1").on("mouseout", function() {
    $("h1").css("color", "green");
})


