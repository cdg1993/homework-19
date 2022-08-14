$(function(){
    $('h1').delegate('span', 'mouseenter mouseleave', function(e){
      
      var span = $(this);
      
      if (e.type === 'mouseenter'){
        span.not(':animated').animate({ fontSize: '50px' });
      }
      else if (e.type === 'mouseleave'){
        span.animate({ fontSize: '70px' });
      }
    });
    
    var newText = '',
            h1 = $('h1').text(),
            len = h1.length;
  
      for (var i = 0; i < len; i++){
          newText += '<span>' + h1.charAt(i) + '</span>';
  }
      $('h1').html(newText);	
  });