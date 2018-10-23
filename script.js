"use strict"
let table= null;
$(document).ready(()=>{

    $("form").hide();


    $(document).on("click",".table", (event)=>{
      $("form").show();
    //   $(event.target).addClass("reserved");
    //   console.log(event.target);
       table = $(event.target);

    });

    $(document).on("click", ".input-field",".save", (event)=>{
        table.removeClass("available");
        table.addClass("reserved");
        console.log(table);
    });
});