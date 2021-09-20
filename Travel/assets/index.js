//APIs
$(document).ready(function () {
    $("#form-submit").submit(function (event) {
        performSearch(event);
    });
});

function performSearch(event) {
    //event.preventDefault();

    $.ajax({
        type: "GET",
        url: 'https://api.sampleapis.com/countries/countries',
        dataType: "jsonp",
        data: {
            q: $("#city").val(),
            units: 'metric'
        },
        success: function (response) {
            console.log("api");
            formatSearch(response);
        }
    });
}
function formatSearch(jsonObject) {
    const first = jsonObject[0];
    console.log(first);
    var city_name = first.name;
    var city_capital = first.capital;
    var city_currency = first.currency;

    $("#city-name").text(city_name);
    $("#city-capital").text(city_capital);
    $("#city-currency").text(city_currency);
}

//SignUP
$('#password2').keyup(function () {
    var password = $('#password').val();
    var password2 = $('#password2').val();

    if (password2 != password) {
        $('#showErrorPassword').html('Password do not match!');
        $('#showErrorPassword').css('color', 'red');
        return false;
    } else {
        $('#showErrorPassword').hide();
        return true;
    }
});


