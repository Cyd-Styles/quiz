/* global $ */

$( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$(".submit").click(function() {
  
  var a1 = $(".a.selected").length;
  
  var a2 = $(".b.selected").length;
 
  var a3 = $(".c.selected").length;
 
  var a4 = $(".d.selected").length;
  
  var a5 = $(".a.selected").length;
  
  var a6 = $(".a.selected").length;
  
  var a7 = $(".a.selected").length;
  
  var a8 = $(".a.selected").length;
  
  var a9 = $(".a.selected").length;
  
  var a10 = $(".a.selected").length;
  
  
  
  
  
  if (a1 >= a2)&&(a1 >= a3)&&(a1 >= a4)) {
    $( "span" ).html("You are Marvel");
  }
  if ((a2 > a1)&&(a2 >= a3)&&(a2 >= a4)) {
    $( "span" ).html("You are DC") ;
  }
    
  if ((a3 > a1)&&(a3 > a2)&&(a3 >= a4)) {
    $( "span" ).html("You are DC");
  }
    
  if ((a4 > a1)&&(a4 > a2)&&(a4 > a3)) {
    $( "span" ).html("You are Marvel");
  }
		
});