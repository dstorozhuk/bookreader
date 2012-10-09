$(document).ready(function() {
		
	
	var count_pages = $('.book-page').length;
	if (count_pages == 1){
		$('.book-page').width('100%');	
	}

	$("#chapters-btn").toggle(
		function(){
			$('#book-menu-tree-wrapper').show();			
		},
		function(){
			$('#book-menu-tree-wrapper').hide();			
			}	
	);	
	
	$('#book').before('<div id="nav">').cycle({ 
    fx:     'fade', 
    speed:  'fast', 
    timeout: 0, 
    next:   '#next', 
    prev:   '#prev',
    repeat: 'off',
   	pager: '#nav',
    after: function(){ }
	});
	
	$('#slider').slider({
            value:4,
            min: 2,
            max: 6,
            step: 1,
            slide: function( event, ui ) {
                $( "#book" ).css( 'font-size', '1.'+ ui.value+'em');               
            }
        });
   $('#show-hide-tolbar-btn').toggle(
   		function () {
		   	$(this).parent().animate({	top: 0}, 'fast' );
		   	$(this).addClass('show-hide-tolbar-btn-up');
		  	},
		  function () {
			  $(this).parent().animate({	top: '-52px'}, 'fast' );//
				$(this).removeClass('show-hide-tolbar-btn-up');					  
			  }
			 );
			 
		$('#show-hide-statusbar-bar-btn').toggle(
   		function () {
		   	$(this).parent().animate({	bottom: 0}, 'fast' );
		   	$(this).addClass('show-hide-statusbar-bar-btn-up');
		  	},
		  function () {
			  $(this).parent().animate({	bottom: '-52px'}, 'fast' );//
				$(this).removeClass('show-hide-statusbar-bar-btn-up');					  
			  }
			 );
   var bookWrapperHeihgt = $('#book-wrapper').height();
   $('div.next-prec-rows').height(bookWrapperHeihgt);    
});

var hyphenatorSettings = {
				useCSS3hyphenation:     true,
};
Hyphenator.config(hyphenatorSettings);
Hyphenator.run();

//Hot keys

shortcut.add("left",function() {
    $('#prev').trigger('click');
});

shortcut.add("right",function() {
    $('#next').trigger('click');
});