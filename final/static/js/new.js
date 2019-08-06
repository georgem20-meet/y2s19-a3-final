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

// /* Get all elements with class="close" */
// $(var closebtns = document.getElementsByClassName("close"));
// $(var i);

//  Loop through the elements, and hide the parent, when clicked on 
// for (i = 0; i < closebtns.length; i++) {
//   closebtns[i].addEventListener("click", function() {
//   this.parentElement.style.display = 'none';
// });
// $(".js-open-modal").click(function(){
//   $(".modal").addClass("visible");
// });

// $(".js-close-modal").click(function(){
//   $(".modal").removeClass("visible");
// });

// $(document).click(function(event) {
//   //if you click on anything except the modal itself or the "open modal" link, close the modal
//   if (!$(event.target).closest(".modal,.js-open-modal").length) {
//     $("body").find(".modal").removeClass("visible");
//   }