const waitingArray = require("../../app/data/waitinglist-data");

$(document).ready(function(){
    
    // Reserved Tables
    $.ajax({
        url:"/api/tables",
        method:"GET"
    }).then(function(response){
        console.log(response);
        for(i=0; i<response.length;i++){
            var list = $("<li class='list-group-item'>");
            list.append(
                $("<h2>").text("Table " + (i + 1)),
                $("<hr>"),
                $("<h3>").text("ID: " + )
                $("<h3>").text("Name: " + )
                $("<h3>").text("Email: " + )
                $("<h3>").text("Phone: " + )
            );
            $("#reservations").append(list);
        }
    });

    $.ajax({
        url:"/api/waitlist",
        method:"GET",
    }).then(function(response){
        console.log(response);
        for(i=0; i<response.length;i++){
            var list = $("<li class='list-group-item'>");
            list.append(
                $("<h2>").text("Table " + (i + 1)),
                $("<hr>"),
                $("<h3>").text("ID: " + waitingArray[i].customerID)
                $("<h3>").text("Name: " + waitingArray[i].customerName)
                $("<h3>").text("Email: " + waitingArray[i].customerEmail)
                $("<h3>").text("Phone: " + waitingArray[i].phoneNumber)
            );
            $("#reservations").append(list);
    }
})