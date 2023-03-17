$(document).ready(function () {
    $("button").click(function () {
        let uid = $("#userId").val();
       // console.log(uid);
        $.get(`https://jsonplaceholder.typicode.com/users/${uid}`, function (data, status,a) {
            $('#name').text(data.name);
            $("#username").text(data.username);
            $("#useremail").text(data.email);
            $("#address").text(data.address.street);
            $("#ws").text(data.website);
            //console.log(data.website)
            console.log(data);
            console.log(a.status);
            console.log(status);
        })
         .fail(function(error){
            $("#username").text("data not found");
            console.log(error);
         });

    });
})

