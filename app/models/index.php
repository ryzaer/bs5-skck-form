<?php $this->index = function($f3,$resp,$hndl){//=====  INDEX FUNCTION START HERE ==========>
	
	$f3->view('spa_index.htm',function($add){
	    $add->css=["css1.css","css2.css"];
	    $add->js=["https://releases.jquery.com/git/jquery-git.min.js","cutom.js"];
	});
	
}?>