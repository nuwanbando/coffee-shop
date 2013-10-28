$(function () {

    //handles the login process
    $('#loginbut').click(function () {
        $.post("/wso2coffeeshop/api/login",
            {'username': $('#usernameLabel').val(), 'password': $('#passwordLabel').val()}, function (data) {
                var d = JSON.parse(data);
                if(d.username){
                    document.location = '/wso2coffeeshop/';
                }

        });
    });

});