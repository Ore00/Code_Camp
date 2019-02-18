$(document).ready(function() {
  // $('#step4').hide();
  //alert("Page Loading...");
  createStatusBox("statusBox", "alert alert-info", "formStatus");
  $("#statusBox").append("Enter your information, then click submit to process data.");

});
function getFormValues(formName){
 var frm = document.getElementById(formName);
 var values = "";
 var i;
 for (i = 0; i < frm.length; i++){
     values = values + frm.elements[i].name + ": " + frm.elements[i].value + "<br>";
 }
 return values;
}

function checkFormInput(FormName){
     var inputStr = "";
     var frmList = document.getElementById(FormName);
     var i;
    for(i = 0; i < frmList.length; i++){
        if(frmList.elements[i].name !== ""){
         inputStr +=   frmList.elements[i].name + ": " + frmList.elements[i].value + "\n";
     }
    }
    alert(inputStr);
}

function getArrayElement(arr){
   var thisArray = arr.values();
   var thisStr = "";
   for(let item of thisArray){
       thisStr = thisStr.concat(item,  "<br />");
   }
   return thisStr;
}

function getAjaxProcess(data, url, callback){
    var step;
    var result = "";
    $.ajax({
    url: url,
    type: 'POST',
    async: false,
    timeout: 180000,
    data: data
    }).done(function(data){
    var JSONstr = JSON.parse(data);
         //check whether process ran successfully
         if(JSONstr.sysError == ""){
              step = true;
              createStatusBox("statusBox", "alert alert-success", "formStatus");
             result =  JSONstr.msg;
             $("#statusBox").append(result + "<br>" );
           }else{
             alert( JSONstr.sysError);
             //if process rendered an error
             step = false;
             createStatusBox("statusBox", "alert alert-danger", "formStatus");
             result = JSONstr.sysError;
            $("#statusBox").append(result + "<br>");
          }
            callback(step);
       }).fail(function(jqXHR, textStatus){
         createStatusBox("statusBox", "alert alert-danger", "formStatus");
         result = "System error: " + textStatus + " : " + jqXHR.responseText;
         $("#statusBox").append(result + "<br />");
       });
}

function isProcessingBTN(theButton, status=true){
    //theButton.disabled = status;
    if(status === true){
    $("#" + theButton).attr("disabled", "disabled");
    }else{
    $("#" + theButton).removeAttr("disabled");
}

 }

 function getProcessForm(email, fname, lname){
 var data = {email: email, fname: fname, lname: lname} ;
 var step;
   getAjaxProcess(data, "includes/processForm.php", function(d){  step = d; });
   return step;
 }
function processForm(){
  if(validateForm("ContactForm")){
     var email = document.getElementById("email").value;
     var fname = document.getElementById("fname").value;
     var lname = document.getElementById("lname").value;
     var result = getProcessForm(email, fname, lname);
}else{
  return;
}
  // $("#statusBox").append(" " + result + "<br>");
}

function createStatusBox(statusBoxName, statusBoxClass, mainBox){
    if( $("#" + statusBoxName).length){
    $("#" + statusBoxName).remove();
    }
    var setBox = page_error_nohead(statusBoxName);
    $("#" + mainBox).append(setBox);
    $("#" + statusBoxName).removeClass();
    $("#" + statusBoxName).addClass(statusBoxClass);
    $("#" + statusBoxName).show();
}
function page_error_nohead(divID){
 var box = "<div id='";
 box = box + divID;
 box = box + "'>";
 box = box + "<span class='close'";
 box = box + 'onclick="';
 box = box + "this.parentElement.style.display='none'";
 box = box + ';"';
 box = box + ">";
 box = box + "&times;</span></div>";

 return box;
}

function validateForm(FormName) {
  // This function deals with validation of the form fields
  var y, i, valid = true;
  y = document.getElementById(FormName);
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "" && y[i].type != "button") {    
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }

  return valid; // return the valid status
}
