$(function () {
    $('#cappuccino').click(function () {
        $.post("/wso2coffeeshop/orders", { order: "Espresso"}, function (data) {
            console.log(data);
        });
    });


    $.get("/wso2coffeeshop/login/valid", function (data) {
        var d = JSON.parse(data);
        if (d.username) {
            $('#navbar').html('<a id="username" href="#" class="navbar-link">Logged in as ' + d.username + '</a>');
        }
    });

});