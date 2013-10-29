var Payment = Payment || {};

(function () {
    Payment.isPaid = function (orderid) {

        var order = session.get("o" + orderid);
        if (order != null) {
            print(order.PAY);
        } else {
            print({
                "Infor": "Sorry, Order is not exsiting"
            });
        }
    };

    Payment.pay = function (orderid) {
        var orders = session.get('user').orders;
        var thisOrder;
        for (var o in orders) {
            var order = orders[o];
            if (orderid == order.ORDER_ID) {
                thisOrder = order;
            }
        }

        //checking order is there
        if (thisOrder != null) {
            //Order is existing
            if (thisOrder.PAY) {
                print({
                    "Infor": "Sorry, Order was paid"
                });
            } else {
                thisOrder.PAY = true;
                thisOrder.STATUS = "Complete";
                print(order);
            }
        } else {

            print({
                "Infor": "Sorry, Order is not exsiting"
            });
        }

    };
}());