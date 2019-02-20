var jumpObj = document.getElementById("jumpObj"),
	moveJump = document.querySelector(".moveJump"),
	numberadd = 0,
	zankiNumberadd = 0;

$('.jumpBtn').click(function () {
	$('#jumpNmb').text(++numberadd);
	$('#jumpObj img').css('width', '100%').attr('src', './img/osn_jump.svg');
	$('#jumpObj').animate(
		{marginTop : "-=20px"}, 50
	).promise().done(function () {
		$('.blockObj').animate(
			{marginTop : "-=20px"}, 50
		).promise().done(function () {
			$('.coinObj').animate({marginTop : "-=80px", opacity : 1}, 50);
			$('.blockObj').animate({marginTop : "+=20px"}, 50);
		});
		$('#jumpObj').animate({marginTop : "+=20px"}, 50)
		.promise().done(function () {
			$('#jumpObj img').css('width','80%').attr('src','./img/osn_standup.svg');
			$('.coinObj').animate({marginTop : "+=80px", opacity : 0}, 50);
		});
	});
	if (numberadd == 100){
		numberadd = 0;
		$('#jumpNmb').text(0);
		$('.zankinum').text(++zankiNumberadd);
	}
});
console.log('コンソールの変更');




