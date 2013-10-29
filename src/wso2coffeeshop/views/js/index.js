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
            $('#navbar').html('Logged in as <a data-target="#myModal" data-toggle="modal" class="btn btn-primary btn-lg"><u>' + d.username + '</u></a>');
        } else {
            document.location = '/wso2coffeeshop/views/login.html';
        }
    });

    $('#myModal').on('show.bs.modal', function () {
        $.get('/wso2coffeeshop/api/orders/list/html', function (data) {
            $('#ordersCont').html(data);
            //console.log(data);
        });


    });

});