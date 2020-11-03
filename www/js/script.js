$(document).ready(function() {
    $(".item, .item-card-rwd").click(function() {
        $("#modal-content").append("<h3>" + $(this).find(".item-title")[0].textContent + "</h3>");
        $(this).find(".item-picture").clone().appendTo("#modal-content");
        var clicked = this.className;
        if(clicked === "item")
        {
            $("#modal-content").append("<p>" + $(this).find(".item-description")[0].textContent + "</p>");
            $("#modal-content").append("<p>" + $(this).find(".item-price")[0].textContent + "</p>");
        }
        else if(clicked === "item-card-rwd")
        {
            $("#modal-content").append("<p>" + $(this).find(".item-description:hidden")[0].textContent + "</p>");
            $("#modal-content").append("<p>" + $(this).find(".item-price:hidden")[0].textContent + "</p>");
        }
        $("#modal-content").append("<button id='buy-now' style='font-size: 16px; color:white; text-shadow: 2px 2px #78af43; background-color: #8ccc4e; padding: 10px; border: 1px solid #78af43; border-radius: 2px;'>Buy now!</button>");
        $("#modal").show();
    });
    $("#modal-content").on("click", "#close", function() {
        $("#modal").hide();
        $("#modal-content").empty();
        $("#modal-content").append('<span id="close">&times;</span>');
    });
    $("#modal-content").on("click", "#buy-now", function() {
        $("#modal").hide();
        $("#modal-content").empty();
        $("#modal-content").append('<span id="close">&times;</span>');
    });
  });