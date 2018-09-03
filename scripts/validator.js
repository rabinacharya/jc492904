// JavaScript Document
$(document).ready(function(e) {
		 //Hiding error div
		$("#firstname_help,#dep_help,#username_help,#dob_help,#gender_help,#interest_help,#pass_help").hide();
        $("#lastname_help,#desig_help,#emailid_help,#pass1_help,#mobile_help").hide();
	
		//Showing the hint message when corresponding input is focussed(left side)
        $("#firstname,#dep,#username,#dob,#gender,#interest,#pass").focus(function(){
			  	
				$("#"+this.id+"_help").show("slow");
	    });
		//Showing the hint message when corresponding input is focussed(right side)
		$("#lastname,#desig,#emailid,#pass1,#mobile").focus(function(){
			
			 $("#"+this.id+"_help").show("slow");
		});
		
		
		//Checking Validity of firstname and lastname when key is pressed
		$("#firstname,#lastname").keyup(function(){
			  
			  if($(this).val().match(/^[a-zA-Z][a-zA-Z]+$/))
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
		$("#dep,#desig,#interest").change(function(){
		  
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
		
		//Checking the date of birth
		$("#dob").change(function(){
			
			if($(this).val()=="")
			{
				 $('#icon_image_'+this.id).attr("src","assets/Close-icon.png");
				 $("#"+this.id+"_help").show("slow");
			}
			else
			{
				 $('#icon_image_'+this.id).attr("src","assets/Accept-icon.png");
				 $("#"+this.id+"_help").hide(1200);
			}
	    });
		
		/*Checking the employee ID
	    $("#empid").keyup(function(){
			
			if($(this).val().match(/^[a-zA-Z0-9]+$/))
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
		*/
		
		
		//Checking EmailID
	    $("#emailid").keyup(function(){
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
			
			//AJAX for checking the availablity of username
		  if($(this).val()!='')
		  {
		    var username=document.getElementById("username").value;	
		   
		     if (window.XMLHttpRequest) {
              // code for IE7+, Firefox, Chrome, Opera, Safari
	      
		       xmlhttp=new XMLHttpRequest();
		  
             } 
	         else { 
		       // code for IE6, IE5
           
		      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
             }
	  
	         xmlhttp.onreadystatechange=function()
	         {
		       if(xmlhttp.readyState==4 && xmlhttp.status==200)
		       {
			  
		         
				  if(xmlhttp.responseText=='not_available')
				  {
					   $('#icon_image_username').attr("src","assets/Close-icon.png");
				       $("#username_help").show("slow");
				  }
				  else
				  {
					  $('#icon_image_username').attr("src","assets/Accept-icon.png");
			          $("#username_help").hide(1200);
				  }
			
		        }
		   
	         }
		  
	         xmlhttp.open("GET","../php/check_username.php?username="+username,true);
	         xmlhttp.send();
		  
		   }
		   else if($(this).val()=='')
		   {
			   $('#icon_image_username').attr("src","assets/Close-icon.png");
			   $("#username_help").show("slow");    
		   }
		  
		});
		
		
		//Checking Valid Password
		$("#pass").keyup(function(){
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
		   if($(this).val()!==$("#pass1").val())
		   {
			  $('#icon_image_pass1').attr("src","assets/Close-icon.png");
			  $("#pass1_help").show("slow");
			}
			else
			{
			   $('#icon_image_pass1').attr("src","assets/Accept-icon.png");
			   $("#pass1_help").hide(1200);
			}   
	    });
		
		//Checking Password Match
		$("#pass1").keyup(function(){
		  
		  if($("#pass").val()==$(this).val())
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
		$("#mobile").keyup(function(){
		    
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
		//Checking Gender
		$("input:radio[name=gender]").change(function(){
			  if($(this).val()!=-1)
			  {
				  $('#icon_image_gender').attr("src","assets/Accept-icon.png");
			      $("#gender_help").hide(1200);
			   }
		});
        //finish on the fly validation
		
		
		
		//Now comes the Clicking of Register button validation
		$("#reg_button").click(function(){
		
		    var flag=1;
			//Scrolling to top
			$("#body").scrollTop(0);
			//Checking firstname

		    if($("#firstname").val().match(/^[a-zA-Z][a-zA-Z]+$/))
			{
			   	$('#icon_image_firstname').attr("src","assets/Accept-icon.png");
			    $("#firstname_help").hide(1200);
			}
			else
			{
				
				$("#icon_image_firstname").attr("src","assets/Close-icon.png");
				$("#firstname_help").show("slow");
				flag=-1;
			}	
			
			//Checking lastname
	        if($("#lastname").val().match(/^[a-zA-Z][a-zA-Z]+$/))
			{
			   	$('#icon_image_lastname').attr("src","assets/Accept-icon.png");
			    $("#lastname_help").hide(1200);
			    
			}
			else
			{
				
				$("#icon_image_firstname").attr("src","assets/Close-icon.png");
			    $("#lastname_help").show("slow");
				flag=-1;
			}
			
			//Checking Department
		    if($("#dep").val()!=-1)
			{
				   $('#icon_image_dep').attr("src","assets/Accept-icon.png");
				   $("#dep_help").hide(1200);
			       
			}  
			else
			{
				   $('#icon_image_dep').attr("src","assets/Close-icon.png");
				   $("#dep_help").show("slow");
				   flag=-1;  
				   
			}
			//Checking designation
			if($("#desig").val()!=-1)
			{
				   $('#icon_image_desig').attr("src","assets/Accept-icon.png");
				   $("#desig_help").hide(1200);
			       
			}  
			else
			{
				   $('#icon_image_desig').attr("src","assets/Close-icon.png");
				   $("#desig_help").show("slow");
				   flag=-1;
			}
			
			/*Checking Employee ID
			if($("#empid").val().match(/^[a-zA-Z0-9]+$/))
		    {
		    	
				 var empid=document.getElementById("empid").value;	
		   
		         if (window.XMLHttpRequest) 
				 {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
	      
		            xmlhttp=new XMLHttpRequest();
		  
                 } 
                 else 
				 { 
		            // code for IE6, IE5
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }
	  
	             xmlhttp.onreadystatechange=function()
	             {
		        
				   if(xmlhttp.readyState==4 && xmlhttp.status==200)
		           {
					   
	          	       if(xmlhttp.responseText=='not_available')
				       {
					     document.getElementById("error_emp_id").innerHTML="<span style='color:red;'>EmployeeID is not Available</span>"; 
				       }
				       else
				       {
					     document.getElementById("error_emp_id").innerHTML="<span style='color:green;'>EmployeeID is Available</span>";
				       }
	               }
		         }		  
	             xmlhttp.open("GET","../php/check_emp_id.php?emp_id="+empid,true);
	             xmlhttp.send();
				
		    }
		    else
		    {
                $('#icon_image_empid').attr("src","assets/Close-icon.png");
				$("#empid_help").show("slow");
				flag=-1;
 		    }
			*/
			
			//Checking email id
			 if($("#emailid").val().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Z-a-z]{2,4}$/))
		     {
		    	$('#icon_image_emailid').attr("src","assets/Accept-icon.png");
				$("#emailid_help").hide(1200);
		     }
		     else
		     {
                $('#icon_image_emailid').attr("src","assets/Close-icon.png");
				$("#emailid_help").show("slow");
				flag=-1;
 		     }
			 
			 //Checking USername
			 
			 if($("#username").val()!='')
		     {
		    	 //Ajax Checking
				
			     var username=document.getElementById("username").value;	
		   
		         if (window.XMLHttpRequest) {
                 // code for IE7+, Firefox, Chrome, Opera, Safari
	      
		          xmlhttp=new XMLHttpRequest();
		  
                  } 
	             else { 
		          // code for IE6, IE5
           
		           xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }
	  
	             xmlhttp.onreadystatechange=function()
	            {
		           if(xmlhttp.readyState==4 && xmlhttp.status==200)
		           {
			  
		         
			      	  if(xmlhttp.responseText=='not_available')
				      {
					     $('#icon_image_username').attr("src","assets/Close-icon.png");
				         $("#username_help").show("slow");
						 flag=-1;
				      }
				      else
				      {
					     $('#icon_image_username').attr("src","assets/Accept-icon.png");
			             $("#username_help").hide(1200);
				      }
			
		           }
		   
	             }
		  
	             xmlhttp.open("GET","../php/check_username.php?username="+username,true);
	             xmlhttp.send();
		     }
			 else
			 {
				  $('#icon_image_username').attr("src","assets/Close-icon.png");
				  $("#username_help").show("slow");
				  flag=-1;
				 
		     }
		     
			 
			 //Checking password
			  if($("#pass").val().length>5)
		      {
			    $('#icon_image_pass').attr("src","assets/Accept-icon.png");
			    $("#pass_help").hide(1200);   
		      }
		      else
		      {
			    $('#icon_image_pass').attr("src","assets/Close-icon.png");
			    $("#pass_help").show("slow");
			    flag=-1;
		      }
			  
			  //Checking confirm password
			  if($("#pass").val()!=$("#pass1").val() || $('#pass').val()=='')
		      {  
			    $('#icon_image_pass1').attr("src","assets/Close-icon.png");
			    $("#pass1_help").show("slow");
				flag=-1;
			    
		      }
		      else
		      {
			    $('#icon_image_pass1').attr("src","assets/Accept-icon.png");
			    $("#pass1_help").hide(1200);
		      }
			  
			  //Checking mobile number
			  if($("#mobile").val().match(/^[0-9]{10}$/))
			  {
			    $('#icon_image_mobile').attr("src","assets/Accept-icon.png");
			    $("#mobile_help").hide(1200);
			  }
			  else
			  {
				$('#icon_image_mobile').attr("src","assets/Close-icon.png");
			    $("#mobile_help").show("slow");
				flag=-1;
			  }
			  
			  //Checking Date of birth
			  if($("#dob").val()=="")
			  {
				 $('#icon_image_dob').attr("src","assets/Close-icon.png");
				 $("#dob_help").show("slow");
				 flag=-1;
			  }
			  else
			  {
				 $('#icon_image_dob').attr("src","assets/Accept-icon.png");
				 $("#dob_help").hide(1200);
			  }
			
			  //Checking Gender
			  if($('input:radio[name=gender]:checked').val()==-1)
			  {
				 $('#icon_image_gender').attr("src","assets/Close-icon.png");
				 $("#gender_help").show("slow");
				 flag=-1;
			  }
			  else
			  {
				 $('#icon_image_gender').attr("src","assets/Accept-icon.png");
				 $("#gender_help").hide(1200);
			  }
			  
			  //Checking interest
			  if($("#interest").val()!=-1)
			   {
				   $('#icon_image_interest').attr("src","assets/Accept-icon.png");
				   $("#interest_help").hide(1200);
			   }  
			   else
			   {
				   $('#icon_image_interest').attr("src","assets/Close-icon.png");
				   $("#interest_help").show("slow");
				   flag=-1;
			   }
			  
			  if(flag==1)
			  {
			      $("#reg_form").submit();	  
			  }			 
			
		 });//Register_Button clicked	  
 });//Document Ready event