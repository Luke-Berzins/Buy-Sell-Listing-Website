$(() => {



  $(".conversation_title").click(function(){
     console.log("hi")
    $("p").toggle();
  });
});









// $(() => {
//   $(".far").on('click', function(e) {
//     e.preventDefault();
//     $.ajax({
//       method: "POST",
//       url: "/postings",
//       data: {postingId: 5}
//     }).then((response) => {
//       console.log(response);
//     });;
//   });
//   });
