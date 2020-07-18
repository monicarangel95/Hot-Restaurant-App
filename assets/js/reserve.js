$("#reserve").on("click", function(add){
    //Creates Array of New Reservation Data
    var newPeople = {
        name: $("#name").val(),
        number: $("#phonenum").val(),
        email: $("#email").val(),
        ID: $("groupID").val(),
    };

    console.log(newPeople);

    $.post("/api/tables", newPeople, funciton(){
        $("#name").val(""),
        $("#phonenum").val(""),
        $("#email").val(""),
        $("groupID").val(""),
    }
})