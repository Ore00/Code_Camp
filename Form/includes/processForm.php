<?php

/*
 * Copyright (C) 2018 Websani - Linda McGraw
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
error_reporting('E_NONE');
Try{
$err = "";
$msg = "";
$connInfo = "";

$email = filter_input(INPUT_POST, "email");
$fname = filter_input(INPUT_POST, "fname");
$lname = filter_input(INPUT_POST, "lname");
if($email !==  "" && $fname  !==  "" && $lname  !==  ""){
      $dataArray = array($email, $fname, $lname);
       $msg = $fname . ", we have received your submission.";
}else{
    $err = "System couldn't process the input supplied, because one or more values are missing.";
}
echo json_encode([ "userInfo" => $dataArray, "sysError" => $err, "msg" => $msg]);
}catch(Exception $e){
    $emsg = $e->getMessage();
    echo json_encode(["sysError" => $emsg]);
}
