$(document).ready(function(){
    //take html tags with assigned values and set to variable.
    //set textarea to the value of "blank", and add to values.
    
    if(/Android/.test(navigator.userAgent)){
      $('backspace').html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" height="24" width="24"><path style="fill:#f5f5f5"  d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>`)
    } else {
      $('backspace').html('&#x2190;')
    }

    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function(){
          var v = $(this).val();
      var total = $('textarea').val($('textarea').val() + v); 
      });
    
    //clicking equal sign evaluates the textarea
    $('#equal').click(function(){
      $('textarea').val(eval($('textarea').val()));
      });
  
    
    $('#clear').click(function(){
        $('textarea').val('');
      });
    
      
    $('#backspace').click(function(){
        $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
      });

    
  });