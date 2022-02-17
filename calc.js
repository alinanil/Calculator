function buttonClick(val){
    document.getElementById("display").value+=val
}

function buttonClear(){
    document.getElementById("display").value=""
}

function buttonResult(){
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}