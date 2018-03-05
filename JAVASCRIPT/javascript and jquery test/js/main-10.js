
$(function(){
	$('.button-x').on('click', function() {
        var buttonId = $(this).attr('data-buttonId');
		$('#' + buttonId).toggle();
	});
});




