function getData() {

    var input = $("#searchtext").val()
    var load = $.get("https://api.tenor.com/v1/search?tag='" + input + "'&key=2EYOZLM8W08D");

    load.done(function (response) {

        var image = $('.inner').children("img");
        image.remove();

        console.log("success got data", response);
        var gif = response.results

        for (i in gif) {
            $('.inner').append("<img class='photo' src='" + gif[i].media[0].gif.url + "'/>")
        }
    });
}