// function display(){
// $(".submit").on("click", function(event){
//     event.preventDefault();
//     //Creates Array of New Reservation Data
//     let newPeople = {
//         customerName: $("#name").val().trim(),
//         phoneNumber: $("#phoneNum").val().trim(),
//         customerEmail: $("#email").val().trim(),
//         customerID: $("#groupID").val().trim(),
//     };

//     console.log(newPeople);

//     $.post("/api/reserve", newPeople) 
//     .then (function(tablelist){
//         alert(tablelist);
//         $("#name").val("");
//         $("#phoneNum").val("");
//         $("#email").val("");
//         $("#groupID").val("");
//     });
// });
// }