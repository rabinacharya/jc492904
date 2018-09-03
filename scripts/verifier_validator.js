// JavaScript Document
$(document).ready(function(e) {

		 //Hiding error div
		 $("#name_help,#cnf_pwd_help,#Qualification_help,#username_help").hide();
		 $("#pwd_help,#phn_help,#email_help").hide();
		 
		 //Showing the hint message when corresponding input is focussed(left side)
		 $("#username,#name,#Qualification,#cnf_pwd").focus(function(){
		 
			$("#"+this.id+"_help").show("slow");
			
		});
		
		//Showing the hint message when corresponding input is focussed(right side)
		$("#email,#pwd,#phn").focus(function(){
			
			 $("#"+this.id+"_help").show("slow");
		});
		
		//Checking Validity of firstname and lastname when key is pressed
		$("#name").keyup(function(){
			  
			  if($(this).val().match(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/))
			  {
			      $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				  $("#"+this.id+"_help").hide(1200);
			  }
			  else
			  {
			      $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				  $("#"+this.id+"_help").show("slow");
				  
			  }
			  
			
		});
		
		//Checking all select box is emptied or not department,designation and interest
		$("#Qualification").change(function(){
		  
			   if($(this).val()!=-1)
			   {
				   $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				   $("#"+this.id+"_help").hide(1200);
			   }  
			   else
			   {
				   $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				   $("#"+this.id+"_help").show("slow");
			   }
		});
		
		//Checking EmailID
	    $("#email").keyup(function(){
		  if($(this).val().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Z-a-z]{2,4}$/))
		  {
		    	$('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				$("#"+this.id+"_help").hide(1200);
		  }
		  else
		  {
                $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				$("#"+this.id+"_help").show("slow");
 		   }
	    });
		
		
		//Checking Username
		$("#username").keyup(function(){
		  if($(this).val()!='')
		  {
		    	$('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				$("#"+this.id+"_help").hide(1200);
		  }
		  else
		  {
                $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				$("#"+this.id+"_help").show("slow");
 		   }
	    });
		
				//Checking Valid Password
		$("#pwd").keyup(function(){
		   if($(this).val().length>5)
		   {
			  $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
			  $("#"+this.id+"_help").hide(1200);   
		   }
		   else
		   {
			  $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
			  $("#"+this.id+"_help").show("slow");
		   }
		   /*if($(this).val()!==$("#pwd").val())
		   {
			  $('#icon_image_pass1').attr("src","assets/Close-icon.png");
			  $("#pass1_help").show("slow");
			}
			else
			{
			   $('#icon_image_pass1').attr("src","assets/Accept-icon.png");
			   $("#pass1_help").hide(1200);
			}*/   
	    });
		
		//Checking Password Match
		$("#cnf_pwd").keyup(function(){
		  
		  if($("#pwd").val()==$(this).val())
		  {
			  $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
			  $("#"+this.id+"_help").hide(1200);
		  }
		  else
		  {
			  $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
			  $("#"+this.id+"_help").show("slow");
		  }
		});
		
		//Checking Mobile Number
		$("#phn").keyup(function(){
		    
			if($(this).val().match(/^[0-9]{10}$/))
			{
			    $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
			    $("#"+this.id+"_help").hide(1200);
				}
			else
			{
				$('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
			    $("#"+this.id+"_help").show("slow");
				}	
		});
		
		//Now comes the Clicking of Register button validation
		$("#reg_button").click(function(){
		
		
		    var flag=1;
			//Scrolling to top
			$("#body").scrollTop(0);	
			//checking name	
			$("#name").keyup(function(){
			  
			  if($(this).val().match(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]*$/))
			  {
			      $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				  $("#"+this.id+"_help").hide(1200);
			  }
			  else
			  {
			      $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				  $("#"+this.id+"_help").show("slow");
				  flag=-1
				  
			  }
			  
			
		});
		
		
		//Checking all select box is emptied or not qualification
		$("#Qualification").click(function(){
		  
			   if($(this).val()!=-1)
			   {
				   $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				   $("#"+this.id+"_help").hide(1200);
			   }  
			   else
			   {
				   $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				   $("#"+this.id+"_help").show("slow");
				   flag=-1
			   }
		});
		
		//Checking EmailID
	    $("#email").keyup(function(){
		  if($(this).val().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Z-a-z]{2,4}$/))
		  {
		    	$('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				$("#"+this.id+"_help").hide(1200);
		  }
		  else
		  {
                $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				$("#"+this.id+"_help").show("slow");
				flag=-1
 		   }
	    });
		
		
		//Checking Username
		$("#username").keyup(function(){
		  if($(this).val()!='')
		  {
		    	$('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				$("#"+this.id+"_help").hide(1200);
		  }
		  else
		  {
                $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				$("#"+this.id+"_help").show("slow");
				flag=-1
 		   }
	    });
		
				//Checking Valid Password
		$("#pwd").keyup(function(){
		   if($(this).val().length>5)
		   {
			  $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
			  $("#"+this.id+"_help").hide(1200);   
		   }
		   else
		   {
			  $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
			  $("#"+this.id+"_help").show("slow");
			  flag=-1
		   }
		   /*if($(this).val()!==$("#pwd").val())
		   {
			  $('#icon_image_pass1').attr("src","assets/Close-icon.png");
			  $("#pass1_help").show("slow");
			}
			else
			{
			   $('#icon_image_pass1').attr("src","assets/Accept-icon.png");
			   $("#pass1_help").hide(1200);
			}*/   
	    });
		
		//Checking Password Match
		$("#cnf_pwd").keyup(function(){
		  
		  if($("#pwd").val()==$(this).val())
		  {
			  $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
			  $("#"+this.id+"_help").hide(1200);
		  }
		  else
		  {
			  $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
			  $("#"+this.id+"_help").show("slow");
			  flag=-1
		  }
		});
		
		//Checking Mobile Number
		$("#phn").keyup(function(){
		    
			if($(this).val().match(/^[0-9]{10}$/))
			{
			    $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
			    $("#"+this.id+"_help").hide(1200);
				}
			else
			{
				$('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
			    $("#"+this.id+"_help").show("slow");
				flag=-1
				}	
		});
		
		 if(flag==1)
			  {
			      $("#reg_form").submit();	  
			  }				
		 });//Register_Button clicked	  
		 
 });//Document Ready event