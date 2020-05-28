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
    $this = $(this);
    $target =  $this.next();

    if($target.hasClass('active')){
       $target.removeClass('active').slideUp();
       $this.removeClass('active');
       return false;
    } else {

    if(!$target.hasClass('active')){
       allPanels.removeClass('active').slideUp();
       $target.addClass('active').slideDown();
       $this.addClass('active');
    }
    return false;
    }
  });
});

$(document).on('change', '#palette-selector', function() {
    var category = $(this).val();
    console.log(category);
    $.get('/palettes/' + category + '/index.html', function(data) {
        $('#results').html(data);
    });
});