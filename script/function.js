// F12 방지 
$(document).ready(function(){ 
	$(document).bind('keydown',function(e){ 
		if (e.keyCode == 123) { 
			e.preventDefault(); e.returnValue = false; 
		} 
	}); 
});

// 입력받은 월급이 정수인지 확인 
function check_value(input_pay) {
	if (input_pay) {
		if (input_pay <= 0 || isNaN(input_pay)) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

// 통계값 리턴하는 함수 
function get_results(input_pay) {
	var input_results = 0;
	
	if (input_pay < 85) {
		input_results = 100;
	} else if (85 <= input_pay && input_pay < 150) {
		input_results = 86.3;
	} else if (150 <= input_pay && input_pay < 250) {
		input_results = 76.6;
	} else if (250 <= input_pay && input_pay < 350) {
		input_results = 50.3;
	} else if (350 <= input_pay && input_pay < 450) {
		input_results = 32.5;
	} else if (450 <= input_pay && input_pay < 550) {
		input_results = 22.2;
	} else if (550 <= input_pay && input_pay < 650) {
		input_results = 15.4;
	} else if (650 <= input_pay && input_pay < 800) {
		input_results = 10.7;
	} else if (800 <= input_pay && input_pay < 1000) {
		input_results = 6.0;
	} else if (1000 <= input_pay) {
		input_results = 3.1;
	}
	
	return input_results;
}

// 통계값 받아서 결과페이지에 출력하고 애니메이션 실행 
function view_results(input_pay) {
	var input_results = get_results(input_pay);
	document.getElementById('input_results').innerHTML = input_results;
	setTimeout(function() {
		exe_animation(input_pay);
	}, 220);
		
	return;
}


// 월급 입력받으면 입력페이지 가리고 결과페이지 출력 
function exe_results() {
	var input_pay = document.getElementById('input_pay').value;
	if (!check_value(input_pay)) {
		alert("정확한 값을 입력하세요.");
	} else {
		view_results(input_pay);
		$('#input_space').slideUp( 200 );
		setTimeout(function() {
			$('#result_space').slideDown( 300 );
		}, 200);
	}

	return;
}
$(document).ready(function() {
	$('#input_ok').click(function() {
		exe_results();
	});
});
