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
            $(this).show();
          }
          else{
            $(this).hide();
          }
      }
        
    });
}


$( "input[type='text']" ).keypress(function() {
  handleSearch($(this));
});

$("input[type='text']").on('change', function(){
  handleSearch($(this));
});

