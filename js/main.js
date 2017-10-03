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






  $("input[type='text']").keypress(function(e) { // text written
  handleSearch($(this));
    });

    $("input[type='text']").keyup(function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) { //backspace and delete key
  handleSearch($(this));
        } else { // rest ignore
            e.preventDefault();
        }
    });
    $("input[type='text']").bind('paste', function(e) { // text pasted
  handleSearch($(this));
    });

    $("input[type='text']").change(function(e) { // select element changed
  handleSearch($(this));
    });

    $("input[type='text']").change(function(e) { // radio changed
  handleSearch($(this));
    });

    $("input[type='text']").keypress(function(e) { // password written
  handleSearch($(this));
    });
    $("input[type='text']").bind('paste', function(e) { // password pasted
  handleSearch($(this));
    });
