// $(document).ready(function () {
//     // $("button").click(function () {
//         // let pid = $("#postId").val();
//         // console.log(uid);
//         let pid=1;
//          $.get(`https://jsonplaceholder.typicode.com/posts/${pid}`, function (data) {
//           //  if((data.title)== ($("a").val()))

//              $('#title').text(data.title);
//              $("#blog").text(data.body);
             
//              //console.log(data.website)
//              console.log($["a"].text());
//              // console.log(a.status);
//              // console.log(status);
//          })
//           .fail(function(error){
//              $("#username").text("data not found");
//              console.log(error);
//           });
 
//      });



{
$(document).ready(function () {
   // $("button").click(function () {
       // let pid = $("#postId").val();
       // console.log(uid);
       let pid=1;
        $.get(`https://jsonplaceholder.typicode.com/posts/${pid}`, function (data) {
            $('#title').text(data.title);
            let A =data.body;
            
            a = A.repeat(100);

            $("#blog").text(a);
        
            
        })
         .fail(function(error){
            $("#username").text("data not found");
            console.log(error);
         });

    });

    $(document).ready(function(){
        $("img").click(function(){
            // Change src attribute of image
            $(this).attr("src", "https://picsum.photos/200/300");
        });    
    });
$(document).ready(function () {
   
       const uid=1;
        $.get(`https://jsonplaceholder.typicode.com/users/${uid}`, function (data) {
            $("#un").text(data.username);
            $("#email").text(data.email);
            $("#address").text(data.address.city);
           
        })
         .fail(function(error){
            $("#username").text("data not found");
            console.log(error);
         });

    });

}