var textarea = document.getElementById("text");
var select = document.getElementById("select");
var result = document.getElementById("result");
textarea.addEventListener("input",()=>{
    make_result  () ;
})
select.addEventListener("change",()=>{
    make_result();
})
 function make_result (){
      if(select.value=="decode")
    {
        result.value = atob(textarea.value);
    }
    else if(select.value=="encode"){
        result.value = btoa(textarea.value) ;
    }
 }