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
            list1.append(
                $("<h2>").text("Table " + (i + 1)),
                $("<hr>"),
                $("<h3>").text("ID: " + tables[i].customerID),
                $("<h3>").text("Name: " + tables[i].customerName),
                $("<h3>").text("Email: " + tables[i].customerEmail),
                $("<h3>").text("Phone: " + tables[i].phoneNumber)
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
            list2.append(
                $("<h2>").text("Table " + (i + 1)),
                $("<hr>"),
                $("<h3>").text("ID: " + waitlist[i].customerID),
                $("<h3>").text("Name: " + waitlist[i].customerName),
                $("<h3>").text("Email: " + waitlist[i].customerEmail),
                $("<h3>").text("Phone: " + waitlist[i].phoneNumber),
            );
            $("#waiting").append(list);
    }
})