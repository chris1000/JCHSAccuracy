$(document).ready(function(){
	
	$('.o-icon').click (function(event){
		event.preventDefault();
		if( $ (this).hasClass('inOut')  ){
			$('.trendbiz-option').stop().animate({right:'0px'},500 );
		} else{
			$('.trendbiz-option').stop().animate({right:'-200px'},500 );
		} 
		$(this).toggleClass('inOut');
		return false;

	}  );		
	
	
	$(".color1" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin1.css" );
		return false;
	});
	$(".color2" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin2.css" );
		return false;
	});
	$(".color3" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin3.css" );
		return false;
	});
	$(".color4" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin4.css" );
		return false;
	});
	$(".color5" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin5.css" );
		return false;
	});
	$(".color6" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin6.css" );
		return false;
	});
	$(".color7" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin7.css" );
		return false;
	});
	$(".color8" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin8.css" );
		return false;
	});	
	$(".color9" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin9.css" );
		return false;
	});	
	$(".color10" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin10.css" );
		return false;
	});	
	$(".color11" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin11.css" );
		return false;
	});	
	$(".color12" ).click(function(){
		$("#trenbiz" ).attr("href", "css/skin/skin12.css" );
		return false;
	});	
		
	
} );
