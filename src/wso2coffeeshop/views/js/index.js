$(function () {
    //placing a Espresso order
    $('#cappuccino').click(function () {
        $.post("/wso2coffeeshop/api/orders", { order: "cappuccino"}, function (data) {
            console.log(data);
        });
    });

    $('#americana').click(function () {
        $.post("/wso2coffeeshop/api/orders", { order: "americana"}, function (data) {
            console.log(data);
        });
    });

    $('#breve').click(function () {
        $.post("/wso2coffeeshop/api/orders", { order: "breve"}, function (data) {
            console.log(data);
        });
    });

    $('#espresso').click(function () {
        $.post("/wso2coffeeshop/api/orders", { order: "espresso"}, function (data) {
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

    $('.payment').on('click', function () {
        var orderId = this.attr('id');
        $.put('/wso2coffeeshop/api/payments/' + orderId, function (data) {
            console.log(data);
        });

    });


});

var pay = function (orderId) {
    $.ajax({
        url: '/wso2coffeeshop/api/payment/' + orderId,
        data: {'sss':'sss'},
        dataType:'json',
        type: 'POST',
        success: function (data) {
            $('#'+orderId).text('Payment Complete');
        }
    });
}