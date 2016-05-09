alert('');

$(function() {

	// Карусель
     


     $('.jcarousel').jcarousel();

     $('.jcarousel_preview').click(function() {
     	$('jcarousel').jcarousel('scroll', '-=1');
     });

     $('.jcarousel_next').click(function() {
     	$('.jcarousel').jcarousel('scroll', '+=1');
     });

     $('.jcarousel_pagination').on('jcarouselpagination:active', 'a', function() {
     	$(this).addClass('active');
     })

        .on('jcarouselpagination:inactive', 'a', function() {
        	$(this).removeClass('active');
        })
        .jcarouselPagination();

        //select box

        $('#excursion').selectbox();

       
        //menu

        $('.dropdown').hover(function() {
        	$(this).children('.sub_menu').slideDown(200);

        	$('.sub_menu').mouseover(function() {
        		$('.sub_menu').css('background', '#f87f09');
        	})
        	.mouseleave(function() {
        		$('.sub_menu').css('background', '#fbb50e');
        	});

        },

            function() {
            	    $(this).children('.sub_menu').slideUp(200);
            }
        );

  });






