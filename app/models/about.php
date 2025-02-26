<?php $this->about = function($f3,$resp,$hndl){//=====  ABOUT FUNCTION START HERE ==========>
	
	$f3->view('spa_about.htm',function($add){
	    $add->css=["about.css"];
	    $add->js=["about.js"];
	});
	
}?>