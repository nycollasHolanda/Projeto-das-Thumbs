var linksDosVideos = [];

var link1 = document.querySelector("#linkUm");
var link2 = document.querySelector("#linkDois");
var link3 = document.querySelector("#linkTres");

$(document).ready(function () {
    $("ul a").each(function () {
        const linkHref = $(this).attr("href");
        const thumbnailUrl = youtube.generateThumbnailUrl(linkHref);
        const thumbnailImg = $("<img>").attr("src", thumbnailUrl);
        $(this).prepend(thumbnailImg);
        linksDosVideos.push($(this));
    });

    $("img").hide();

    function mostrarEEsconder(link) {
        $(link).mouseenter(function () {
            $(link).find("img").show();
        });

        $(link).mouseleave(function () {
            $(link).find("img").hide();
        });
    }

    mostrarEEsconder(link1);
    mostrarEEsconder(link2);
    mostrarEEsconder(link3);
});

