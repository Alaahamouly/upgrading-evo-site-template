    // Loading Screen

    $(window).on('load',(function(){

      //Loading elements
      $(".loading-overlay img, .spinner").fadeOut(1000, function(){
        $(this).parent().fadeOut(1000, function(){

          //remove the tag from Tree DOM
          $(this).remove();

        });
      });
    }));
