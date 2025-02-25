<?php $this->index = function($f3,$resp,$hndl){//=====  INDEX FUNCTION START HERE ==========>	
		
	$f3->view("spa_index.htm",function($add){
		$add->css = ["ini.css","itu.css","sana.css"];
		$add->js = ["https://releases.jquery.com/git/jquery-git.min.js","ini.js","itu.js","sana.js"];
	});
	
}?>