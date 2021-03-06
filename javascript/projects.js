$(document).ready(function(){
    $("#pr1").hide()
    $("#pr2").hide()
    $("#pr3").hide()
    $("#pr4").hide()
    $("#pr5").hide()
    $("#pr6").hide()

    $("#MRC").click(function(){
	destroyVideo();	 
	restoreVideo();
	if($('#pr5').is(':visible')) {
    	  $("#pr5").fadeOut(1200, function(){
	    $("#pr1").fadeIn(1200)
	  });  
	} else if($('#pr4').is(':visible')) {
    	  $("#pr4").fadeOut(1200, function(){
	    $("#pr1").fadeIn(1200)
	  });  
	} else if($('#pr3').is(':visible')) {
    	  $("#pr3").fadeOut(1200, function(){
	    $("#pr1").fadeIn(1200)
	  });  
	} else if($('#pr2').is(':visible')) {
    	  $("#pr2").fadeOut(1200, function(){
	    $("#pr1").fadeIn(1200)
	  });  
	} else{
	  $("#pr1").fadeIn(1200)	
	}        
    });

    $("#OCR").click(function(){
	destroyVideo();
	restoreVideo();
	if($('#pr6').is(':visible')) {
    	  $("#pr6").fadeOut(1200, function(){
	    $("#pr2").fadeIn(1200)
	  });  
	} else if($('#pr5').is(':visible')) {
    	  $("#pr5").fadeOut(1200, function(){
	    $("#pr2").fadeIn(1200)
	  });  
	} else if($('#pr4').is(':visible')) {
    	  $("#pr4").fadeOut(1200, function(){
	    $("#pr2").fadeIn(1200)
	  });  
	} else if($('#pr3').is(':visible')) {
    	  $("#pr3").fadeOut(1200, function(){
	    $("#pr2").fadeIn(1200)
	  });  
	} else if($('#pr1').is(':visible')) {
    	  $("#pr1").fadeOut(1200, function(){
	    $("#pr2").fadeIn(1200)
	  });  
	} else{
	  $("#pr2").fadeIn(1200)
	}
    });

    $("#REF").click(function(){
	destroyVideo();
	restoreVideo();
	if($('#pr6').is(':visible')) {
    	  $("#pr6").fadeOut(1200, function(){
	    $("#pr3").fadeIn(1200)
	  });  
	} else if($('#pr5').is(':visible')) {
    	  $("#pr5").fadeOut(1200, function(){
	    $("#pr3").fadeIn(1200)
	  });  
	} else if($('#pr4').is(':visible')) {
    	  $("#pr4").fadeOut(1200, function(){
	    $("#pr3").fadeIn(1200)
	  });  
	} else if($('#pr2').is(':visible')) {
    	  $("#pr2").fadeOut(1200, function(){
	    $("#pr3").fadeIn(1200)
	  });  
	} else if($('#pr1').is(':visible')) {
    	  $("#pr1").fadeOut(1200, function(){
	    $("#pr3").fadeIn(1200)
	  });  
	} else{
	  $("#pr3").fadeIn(1200)
	}        
    });

    $("#AEV").click(function(){
	destroyVideo();
	restoreVideo();
	if($('#pr6').is(':visible')) {
    	  $("#pr6").fadeOut(1200, function(){
	    $("#pr4").fadeIn(1200)
	  });  
	} else if($('#pr5').is(':visible')) {
    	  $("#pr5").fadeOut(1200, function(){
	    $("#pr4").fadeIn(1200)
	  });  
	} else if($('#pr3').is(':visible')) {
    	  $("#pr3").fadeOut(1200, function(){
	    $("#pr4").fadeIn(1200)
	  });  
	} else if($('#pr2').is(':visible')) {
    	  $("#pr2").fadeOut(1200, function(){
	    $("#pr4").fadeIn(1200)
	  });  
	} else if($('#pr1').is(':visible')) {
    	  $("#pr1").fadeOut(1200, function(){
	    $("#pr4").fadeIn(1200)
	  });  
	} else{
	  $("#pr4").fadeIn(1200)
	}        
    });
    
    $("#SCI").click(function(){
	destroyVideo();
	restoreVideo();	
	if($('#pr6').is(':visible')) {
    	  $("#pr6").fadeOut(1200, function(){
	    $("#pr5").fadeIn(1200)
	  });  
	} else if($('#pr4').is(':visible')) {
    	  $("#pr4").fadeOut(1200, function(){
	    $("#pr5").fadeIn(1200)
	  });  
	} else if($('#pr3').is(':visible')) {
    	  $("#pr3").fadeOut(1200, function(){
	    $("#pr5").fadeIn(1200)
	  });  
	} else if($('#pr2').is(':visible')) {
    	  $("#pr2").fadeOut(1200, function(){
	    $("#pr5").fadeIn(1200)
	  });  
	} else if($('#pr1').is(':visible')) {
    	  $("#pr1").fadeOut(1200, function(){
	    $("#pr5").fadeIn(1200)
	  });  
	} else{
	  $("#pr5").fadeIn(1200)
	}        
    });

    $("#NNC").click(function(){
	destroyVideo();
	restoreVideo();	
	if($('#pr5').is(':visible')) {
    	  $("#pr5").fadeOut(1200, function(){
	    $("#pr6").fadeIn(1200)
	  });  
	} else if($('#pr4').is(':visible')) {
    	  $("#pr4").fadeOut(1200, function(){
	    $("#pr6").fadeIn(1200)
	  });  
	} else if($('#pr3').is(':visible')) {
    	  $("#pr3").fadeOut(1200, function(){
	    $("#pr6").fadeIn(1200)
	  });  
	} else if($('#pr2').is(':visible')) {
    	  $("#pr2").fadeOut(1200, function(){
	    $("#pr6").fadeIn(1200)
	  });  
	} else if($('#pr1').is(':visible')) {
    	  $("#pr1").fadeOut(1200, function(){
	    $("#pr6").fadeIn(1200)
	  });  
	} else{
	  $("#pr6").fadeIn(1200)
	}        
    });
});    

function destroyVideo(){
    var url1 = $('#vid1').attr('src');
    $('#vid1').attr('src', '');

    var url2 = $('#vid2').attr('src');
    $('#vid2').attr('src', '');

    var url4 = $('#vid4').attr('src');
    $('#vid4').attr('src', '');
}

function restoreVideo(){
    $('#vid1').attr('src', "https://www.youtube.com/embed/EF4LxkXlR8M");
    $('#vid2').attr('src', "https://www.youtube.com/embed/5EVcQXWapcA");
    $('#vid4').attr('src', "https://www.youtube.com/embed/Ath1SjQ9mJ4");
}
