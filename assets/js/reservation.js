// const waitingArray = require("../../app/data/waitinglist-data");

// $(document).ready(function(){
    
//     // Reserved Tables
//     $.ajax({
//         url:"/api/tables",
//         method:"GET"
//     }).then(function(tablelist){
//         console.log(tablelist);
//         tables = tablelist.slice(0,5);
//         for(var i=0; i < tables.length;i++){
//             var list = $("<li class='list-group-item'>");
//             list.append(
//                 $("<h2>").text("Table " + (i + 1)),
//                 $("<hr>"),
//                 $("<h3>").text("ID: " + )
//                 $("<h3>").text("Name: " + )
//                 $("<h3>").text("Email: " + )
//                 $("<h3>").text("Phone: " + )
//             );
//             $("#reservations").append(list);
//         }
//     });

//     $.ajax({
//         url:"/api/waitlist",
//         method:"GET",
//     }).then(function(response){
//         console.log(response);
//         for(var i=5; i<tablelist.length;i++){
//             var list = $("<li class='list-group-item'>");
//             list.append(
//                 $("<div>").text("Table " + (i + 1);
//                 $("<hr>");
//                 $("<div>").text("ID: " + tablelist[i].groupID);
//                 $("<div>").text("Name: " + tablelist[i].name);
//                 $("<div>").text("Email: " + tablelist[i].email);
//                 $("<div>").text("Phone: " + tablelist[i].phoneNum);
//             );
//             $("#reservations").append(list);
//     }
// })