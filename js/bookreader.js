
$(function(){

  var page = 1;  // the beginning page number to show in the footer
  // main columnizer function with settings
  function buildNewsletter(height){


    if($('#newsletterContent').contents().length > 0){
      // when we need to add a new page, use a jq object for a template
      // or use a long HTML string, whatever your preference
      $page = $("#page_template").clone().addClass("page").css("display", "block");

      // fun stuff, like adding page numbers to the footer
      $page.find(".footer .page-num").append(page);
      $("#book-content").append($page);

      page++;

      // here is the columnizer magic
      $('#newsletterContent').columnize({
        columns: 2,
        target: ".page:last .content",
        buildOnce: true,
        doneFunc: function(){

          Hyphenator.run();
        },
        overflow: {
          // width:
          height: height-170,
          id: "#newsletterContent",
          doneFunc: function(){
            console.log("done with page");
            buildNewsletter(height);
          }
        }
      });
    }
  }
//begin split into columns
buildNewsletter($(window).height());

//remove repeated id attribute
$('.page').slice(1).removeAttr("id");

if($('.page').length == 1){
  $('.first.column').css('width', '98%');
}

$pages_count = $('body').find('.page').size();

$('.page').find(".footer .page-total").append($pages_count);
$('.page').css('height', $(window).height()-120);
$('#info').remove();

// create page slider
$('#book-content').before('<div id="nav">').cycle({
  fx:     'fade',
  speed:  'fast',
  timeout: 0,
  next:   '#next',
  prev:   '#prev',
  pager: '#nav',
  after: slideNavHandle,
  //end: function(){alert('test')}
});
// slide navigation handle on next/prev click
function slideNavHandle(currSlideElement, nextSlideElement, options, forwardFlag){
    $("#slider-nav").slider('value', options.currSlide+1);
  }

});



$(function(){
  // Bind the resize event. When the window size changes, update its corresponding
  // info div.
  $(window).afterresize(function() {

    location.reload();
  });


});


$(document).ready(function() {

/*
  var count_pages = $('.book-page').length;
  if (count_pages == 1){
    $('.book-page').width('100%');
  }
*/


  // Navigation
  $("#chapters-btn").toggle(
    function(){
      $('#book-menu-tree-wrapper').show();
    },
    function(){
      $('#book-menu-tree-wrapper').hide();
      }
  );
  // navigation in chapter
   $('#slider-nav').slider({
            min: 1,
            max: $pages_count,
            step: 1,
            slide: function( event, ui ) {
                $('#book-content').cycle(ui.value-1);
            }
        });
  // font size
  $('#slider').slider({
            value:4,
            min: 2,
            max: 6,
            step: 1,
            slide: function( event, ui ) {
              $( "#newsletterContent" ).css( 'font-size', '1.'+ ui.value+'em');
            },
            stop: function(event, ui) {
              $('#edit-fontsize').val(ui.value);
              $('#fontsize-form').submit();
            }
        });



   $('#show-hide-tolbar-btn').toggle(
      function () {
        $(this).parent().animate({  top: 0}, 'fast' );
        $(this).addClass('show-hide-tolbar-btn-up');
        },
      function () {
        $(this).parent().animate({  top: '-52px'}, 'fast' );//
        $(this).removeClass('show-hide-tolbar-btn-up');
        }
       );

    $('#show-hide-statusbar-bar-btn').toggle(
      function () {
        $(this).parent().animate({  bottom: 0}, 'fast' );
        $(this).addClass('show-hide-statusbar-bar-btn-up');
        },
      function () {
        $(this).parent().animate({  bottom: '-52px'}, 'fast' );//
        $(this).removeClass('show-hide-statusbar-bar-btn-up');
        }
       );

   //Add height to navogations arrows
   var bookWrapperHeihgt = $('#book-wrapper').height();
   $('div.next-prec-rows').height(bookWrapperHeihgt);
    // help info
   $('#help-info-btn').click(function(){
     //alert(" ctrl+⇧: all chapters;\n ctrl+⇦: previous chapter;\n ctrl+⇨: next chapter;\n ⇨: next page;\n ⇦: previous page;");
   });

   $('#help-info').dialog({autoOpen: false, modal: true, width: 400});
   $('#help-info-btn').click(function(){
     $('#help-info').dialog('open');
   });

   shortcut.add("F1",function() {
     $('#help-info').dialog('open');
   });
  $(".content .first").append($('#table-of-contents'));
});

// hyphenatorSettings
var hyphenatorSettings = {
        useCSS3hyphenation:     true,
        classname : 'column',
};
Hyphenator.config(hyphenatorSettings);


//Hot keys

shortcut.add("left",function() {
    $('#prev').trigger('click');
});

shortcut.add("right",function() {
    $('#next').trigger('click');
});

shortcut.add("ctrl+right",function() {
    var chapter_next = $('#chapter-next');
    var chapter_next_url = chapter_next.attr('href');
    if(chapter_next_url !== undefined){
      window.location = chapter_next_url;
    }
});

shortcut.add("ctrl+left",function() {
    var chapter_prev = $('#chapter-previous');
    var chapter_prev_url = chapter_prev.attr('href');
    if(chapter_prev_url !== undefined){
      window.location = chapter_prev_url;
    }
});

shortcut.add("ctrl+up",function() {
    var chapter_up = $('#chapters');
    var chapter_up_url = chapter_up.attr('href');
    if(chapter_up_url !== undefined){
      window.location = chapter_up_url;
    }
});


