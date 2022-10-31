$(function() {
    $('#btn1').click(function(){
        var id = $('#text1').val();
        $.getJSON('data.php', {'id':id}, function(response, status, xhr){
            var ol = $('<ul></ul>');
            ol.append('<li>姓名：' + response.name + '</li>');
            ol.append('<li>電郵信箱：' + response.mail + '</li>');
            ol.append('<li>電話號碼：' + response.tel + '</li>');
            $('#msg').empty().append(ol);
        });
    });
});


