$(function() {
	$('#btn1').click(function(){
		$.get('data.txt', function(response){
			var ol = $('<ol></ol>');
			var arr = response.split('');
			for(var item in arr){
				ol.append('<span>'+"➳"+ arr[item] +"➳"+'</span>'+'<br>');
			}
			$('#msg').append(ol);
		});
	});
});

