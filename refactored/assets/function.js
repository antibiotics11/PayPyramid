// 입력값 받아서 소득분위 리턴하는 함수
function get_results(input_pay) {
	var input_results = 0;
	
	if (input_pay < 85) {
		input_results = 100;
	} else if (85 <= input_pay && input_pay < 150) {
		input_results = 83.7;
	} else if (150 <= input_pay && input_pay < 250) {
		input_results = 72.5;
	} else if (250 <= input_pay && input_pay < 350) {
		input_results = 43.6;
	} else if (350 <= input_pay && input_pay < 450) {
		input_results = 28.2;
	} else if (450 <= input_pay && input_pay < 550) {
		input_results = 18.9;
	} else if (550 <= input_pay && input_pay < 650) {
		input_results = 12.8;
	} else if (650 <= input_pay && input_pay < 800) {
		input_results = 8.5;
	} else if (800 <= input_pay && input_pay < 1000) {
		input_results = 4.5;
	} else if (1000 <= input_pay) {
		input_results = 2.2;
	}
	
	return input_results;
}

// 입력값이 정수인지 확인하는 함수
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

// 소득분위 출력하고 애니메이션 실행하는 함수
function view_results(input_pay) {
	var input_results = get_results(input_pay);
	document.getElementById('input_results').innerHTML = input_results;
	setTimeout(function() {
		exe_animation(input_pay);
	}, 220);
		
	return 0;
}

// 입력값 확인해서 view_results 함수로 넘기고 화면전환 효과 실행
$(document).ready(function() {
	$('#input_ok').click(function() {
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
	});
});