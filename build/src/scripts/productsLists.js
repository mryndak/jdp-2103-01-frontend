"use strict";

//CREATE PRODUCT LIST HOME
function createProductList() {
    fetch(endpoints.products.url).then(function (response) {
        return response.json();
    }).then(function (productsList) {
        var html = '';
        for (var i = 0; i < productsList.length; i++) {
            html += "\n                    <div class=\"col-lg-4 col-md-6 mb-4\">\n                        <div class=\"card h-100\">\n                            <a href=\"/product/" + productsList[i].id + "\"><img class=\"card-img-top\" src=\"http://placehold.it/250x250\" alt=\"\"></a>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">\n                                    <a href=\"/product\">" + productsList[i].name + "</a>\n                                </h4>\n                                <h5>$" + productsList[i].price + "</h5>\n                            </div>\n                        </div>\n                    </div>\n                ";
        }
        $("#products").append(html);
    });
}
createProductList();