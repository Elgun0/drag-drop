var number=document.querySelectorAll(".number")
var droparea=document.querySelector(".drop-area")
for(var num of number){
    num.addEventListener("dragstart",function(ev){
        this.style="background:green;color:white"
        ev.dataTransfer.setData("numev",this.id)
    })
    num.addEventListener("dragend",function(){
        this.style="background:transparent;color:black"
    })
}
droparea.addEventListener("dragover",function(e){
e.preventDefault();
})
droparea.addEventListener("drop",function(b){
var boxid=b.dataTransfer.getData("numev");
var newdiv=document.getElementById(boxid);
this.prepend(newdiv)
})  