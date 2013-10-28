$(function () {
    //placing a Espresso order
    $('#cappuccino').click(function () {
        $.post("/wso2coffeeshop/api/orders", { order: "Espresso"}, function (data) {
            console.log(data);
        });
    });


    //Checking the session for a valid user
    $.get("/wso2coffeeshop/api/login/valid", function (data) {
        var d = JSON.parse(data);
        if (d.username) {
            $('#navbar').html('Logged in as <a data-toggle="modal" href="#myModal" class="btn btn-primary btn-lg"><u>' + d.username + '</u></a>');
        } else {
            document.location = '/wso2coffeeshop/views/login.html';
        }
    });

});