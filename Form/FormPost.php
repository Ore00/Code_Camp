<?php

?>
<html>
    <head>
        <title>Form post results with AJAX, PHP</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="includes/bootstrap/bootstrap.min.css">
          <link rel="stylesheet" href="includes/css/form.css"/>
       <script src="includes/js/jquery.min.js"></script>
       <script src="includes/bootstrap/bootstrap.min.js"></script>

 </head>

 <body>
  <div class="container">

   <form id="ContactForm" autocomplete="off" method="post">
     <div class="tab"><h2>Contact Info</h2><br>
       <div id="formStatus"></div>
       <div id="jsResult"></div>
       <br>
       <div id="details" ></div>
       <p><input class="form-control" onclick="this.className = 'form-control'" placeholder="Email Address" name="email" id="email" type="email" ></p>
       <p><input class="form-control" onclick="this.className = 'form-control'" placeholder="First Name" name="fname" id="fname" type="text" maxlength="35"></p>
       <p><input class="form-control" onclick="this.className = 'form-control'" placeholder="Last Name"  name="lname" id="lname" type="text" maxlength="35"></p>
       <br>
     </div>
     <div>
       <div>
         <button type="button" class="btn btn-primary form-control" id="prevBtn" onclick="processForm()">Submit</button>
       </div>
     </div>
   </div>
   </form>
   <script src="includes/js/jquery-3.1.1.js"></script>
   <script src="includes/js/Form.js"></script>
 </body>
 </html>
