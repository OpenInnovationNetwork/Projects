# Cross Site issue, best way to resolve
## From Paul Barham


Inbox
x 

Paul Barham
12:57 AM (16 hours ago)

to me 
http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/ is a good article

I have two solutions I use:  


Using Apache Headers

The the Data source/server sets its headers correctly there is no extra code that needs to be done by the JavaScript client.

On the server serving the data I have the following in the Apache configuration for the site

    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Credentials true
    Header set Access-Control-Allow-Methods "POST, GET, OPTIONS"

Then to call I just use jQuery's ajax  code.

This is at https://github.com/zmon/address-api/tree/gh-pages
Example is at http://zmon.github.io/address-api/ a good address is "201 W 19th terr"

    $("#address-form").on("submit", function () {

        var one_line_address = encodeURIComponent($("#address_id").val().replace(/ KANSAS CITY, MO/,''));

        var url = "http://dev-api.codeforkc.org//address-attributes/V0/" + one_line_address + "?city=Kansas%20City&state=mo";

        $.ajax({
            method: "GET",
            crossDomain: true,
            url: url
        })

            .done(function (data) {
                address_obj = jQuery.parseJSON(data);
                console.log(address_obj);

                $.each(address_obj.data, function (key, value) {

                    var row = '';
                    row += '<tr>';
                    row += '<td>' + key + '</td>';
                    row += '<td>' + value + '</td>';
                    row += '</tr>';

                    $('#cases > tbody:last').append(row);

                });

            })
            .fail(function () {
                $('#address-error').show("slow");
                $('#address-error').text('Error');

            })
            .always(function () {

            });

        return false;
    });




Using createCORSRequest

The cross origin issue in this case is a web page being hosted on GitHub accessing JSON data from KCMO.

To see it in action the GitHub repository is at https://github.com/codeforkansascity/api-examples

Example code is at http://codeforkc.org/api-examples/

This is a JavaScript function from https://github.com/codeforkansascity/api-examples/blob/gh-pages/js/app.js



/* From http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/ */

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}


var d = new Date();
var month = d.getMonth() + 1;
var day = 0;
if (d.getHours() < 7) {
    day = d.getDate() - 2;
} else {
    day = d.getDate() - 1;
}

var output = d.getFullYear() + '-' +
    (('' + month).length < 2 ? '0' : '') + month + '-' +
    (('' + day).length < 2 ? '0' : '') + day;
var yesterday = output + 'T00:00:00';

// See http://dev.socrata.com/docs/queries.html on SoQL Clauses

var request_311 = createCORSRequest("get", "http://data.kcmo.org/resource/7at3-sxhp.json?$where=creation_date='" + yesterday + "'");
if (request_311) {
    request_311.onload = function () {
        var data = JSON.parse(request_311.responseText);
        console.dir(data);
        for (var i in data) {
            var row = '';
            row += '<tr>';
            row += '<td>' + data[i]['case_id'] + '</td>';
            row += '<td>' + data[i]['street_address'] + '</td>';
            row += '<td>' + data[i]['department'] + '</td>';
            row += '<td>' + data[i]['request_type'] + '</td>';
            row += '<td>' + data[i]['status'] + '</td>';
            row += '</tr>';

            $('#cases > tbody:last').append(row);

            if (i > 10) break;

        }
    };
    request_311.send();
}


            
