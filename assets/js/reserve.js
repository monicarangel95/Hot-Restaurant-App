// $("#reserve").on("click", function(add){
//     //Creates Array of New Reservation Data
//     var newPeople = {
//         name: $("#name").val(),
//         number: $("#phonenum").val(),
//         email: $("#email").val(),
//         ID: $("groupID").val(),
//     };

//     console.log(newPeople);

<<<<<<< HEAD
//     $.post("/api/tables", newPeople, function(){
//         $("#name").val(""),
//         $("#phonenum").val(""),
//         $("#email").val(""),
//         $("groupID").val("")
//     })
// })
=======
    $.post("/api/tables", newPeople, function(){
        
        
        $("#name").val(""),
        $("#phonenum").val(""),
        $("#email").val(""),
        $("groupID").val("")
    })
})
>>>>>>> a289e5820352df7873461277f922cecb904e2bb1
