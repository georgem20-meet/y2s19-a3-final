$(".signupButton").on("click", function () {
    // $(this) refers to the element that was clicked
    $("#signupForm").css("display", "block");
    $("#loginForm").css("display", "none");
 })
$(".loginButton").on("click", function () {
    // $(this) refers to the element that was clicked
    $("#loginForm").css("display", "block");
    $("#signupForm").css("display", "none");

 })


