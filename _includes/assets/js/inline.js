// if (window.netlifyIdentity) {
//   window.netlifyIdentity.on("init", user => {
//     if (!user) {
//       window.netlifyIdentity.on("login", () => {
//         document.location.href = "/admin/";
//       });
//     }
//   });
// }

$(document).ready(function(){
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $("nav").toggleClass("is-active");
  });
});

$(document).ready(function(){
  var allPanels = $('.answer').hide();
    
  $('.question').click(function() {
    allPanels.slideUp();
    $(this).next().slideDown("slow");
    return false;
  });
});