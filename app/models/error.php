<?php $this->error = function($f3){//=====  ERROR FUNCTION START HERE ==========>
	
	$f3->set("recommended",[
	    "It used to appear message from your browser that you are not able to access this web",
	    "This is only example error messages that you can build something else",
	]);
	$f3->error_trace = array_values(array_filter(preg_split('/\n/',$f3->get("ERROR.trace"))));
	$f3->error_count = count($f3->error_trace);
	http_response_code($f3->get("ERROR.code"));
	$f3->view('error.htm');
	
}?>