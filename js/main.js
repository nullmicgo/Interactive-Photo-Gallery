 lightbox.option({
        'alwaysShowNavOnTouchDevices':true,
        'positionFromTop':100,
       'maxWidth':600,
       'resizeDuration': 200,
       'wrapAround': true,
       'showImageNumberLabel':false
  });


function handleSearch(element){
   var keywords =element.val() ;
    $('.gallery-item').each(function () {

      if(keywords==""){
            $(this).attr('data-lightbox',"gallery");
          $(this).show();
      }else{
         var title = $(this).find("img").attr("alt");
         var description = $(this).attr('data-title');
         var shouldShould =false;

        if(title.indexOf(keywords) !== -1){
              //found it
             shouldShould= true;
          }

        if(description.indexOf(keywords) !== -1){
              //found it
             shouldShould= true;
          }
         if(shouldShould==true){
            //found it

            $(this).attr('data-lightbox',"gallery");
            $(this).show();
          }
          else{
            $(this).attr('data-lightbox',"");
            $(this).hide();
          }
      }
        
    });
}

 
    $("input[type='text']").keyup(function(e) {
        handleSearch($(this));

    });


    $("input[type='text']").bind('paste', function(e) { // text pasted
  handleSearch($(this));
    });



