var text = document.getElementById("nas1");
var select = document.getElementById("select");
var resultatf = document.getElementById("result_final");
text.addEventListener("input",()=>{
    get_code () ;
})
select.addEventListener("change",()=>{
    get_code ();
})
 function get_code (){
      if(select.value=="decode")
    {
        resultatf.value = atob(text.value);
    }
    else if(select.value=="encode"){
        resultatf.value = btoa(text.value) ;
    }
 }
