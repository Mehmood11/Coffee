$(document).ready(function () {
    $("nav .icons .fa-search").click(function () {
        $("nav .search").toggleClass("showSearch");
    });

    $("nav .icons .fa-shopping-cart").click(function () {
        $("nav .cart-items").toggleClass("showCart");
    });

    $("nav .icons .fa-bars").click(function () {
        $("nav ul").toggleClass("active");
        $("nav .icons .fa-bars").toggleClass("active");
    });
    
})