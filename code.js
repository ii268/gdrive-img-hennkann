function js() {
const gdive1 = document.getElementById("gdive")
const gdive2 = gdive1.value
const ken = gdive2.substr(8 ,16);
if (ken == "drive.google.com") {
const code = gdive2.substr(32 ,33);
const imgurl = "https://lh3.googleusercontent.com/d/"+code;
document.getElementById("kennse").style.display ="block";
document.getElementById( "end" ).value = imgurl ;
} else {  
    alert("正しいURLを入力してください")
}
}
function copy(){
var copyTarget = document.getElementById("end");
copyTarget.select();
document.execCommand("Copy");

}
