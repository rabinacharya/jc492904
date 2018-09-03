// JavaScript Document

function run_first(){
    // alert("hello")
	if(sessionStorage.item_id){
		document.getElementById(sessionStorage.item_id.toString()).style.backgroundColor="darkgray";
		document.getElementById(sessionStorage.item_id.toString()).style.borderRadius="25px";
		document.getElementById(sessionStorage.item_id.toString()).style.color="midnightblue";
    }
	else{
        document.getElementById("0").style.backgroundColor="#CCCCCC";
        document.getElementById("0").style.borderRadius="25px";
    }
	}


 function nav_item_selected(item_id){
	 for(i=0;i<4;i++){
         document.getElementById(i.toString()).style.backgroundColor="";
		 }

     document.getElementById(item_id.toString()).style.backgroundColor="darkgray";
     document.getElementById(item_id.toString()).style.borderRadius="25px";
     document.getElementById(item_id.toString()).style.color="midnightblue";

	 //store item_id in sessionStorage
	 sessionStorage.item_id=item_id;
 }