$(document).ready(function(){
	var imgContainer = $('.slide-img')
	var imgSize = $('.slide-img img').width()
	var imgContainerWidth = $('.slide-img').width();
	$('.slider-product').find('.fa').on('click', function(event) {
		var tmpLeft = parseInt($('.slide-img div').css('margin-right'));
		if ($(this).hasClass('fa-angle-left')) {
			tmpLeft = tmpLeft + imgSize;	
		} else {
			tmpLeft = tmpLeft - imgSize;
		}
		$(imgContainer).find('div').css('margin-right',tmpLeft);
		var condition;
		condition = imgSize * ($('.slide-img img').length - 5);
		if (condition <= Math.abs(tmpLeft) || parseInt($('.slide-img div').css('margin-right'))>=0) {
			$(this).hide();
		} else {
			$('.fa').show();
		}
	});


	$(imgContainer).find('img').on('click', function(event) {
		var sRc = $(this).attr('src');
		$('.main-img img').attr('src', sRc);
		//console.log($(this).attr('src'))
	});
})