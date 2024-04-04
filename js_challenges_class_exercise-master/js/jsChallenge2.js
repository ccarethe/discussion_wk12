document.querySelector("#sameAddress")
.addEventListener("click",function(){
    const content = document.getElementById("bill").value
    if(this.checked){
        document.getElementById("home").value = content
    }
    else{
        document.getElementById("home").value = ""
    }
})