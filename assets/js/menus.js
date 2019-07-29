function bg(val,ima,url){
  var imagen='estructura.jpg';
  if(val>0){
       document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/"+ima+"')";
       document.getElementById("ver-url").innerHTML = '<a href="'+url+val+'">VER M&Aacute;S</a>';
       switch (true) {
         case (val==1):
          document.getElementById("rec1").style.display = "inherit";
          document.getElementById("rec2").style.display = "none";
          document.getElementById("rec3").style.display = "none";
          document.getElementById("rec4").style.display = "none";
          document.getElementById("rec5").style.display = "none";
          document.getElementById("rec6").style.display = "none";
          document.getElementById("rec7").style.display = "none";
          document.getElementById("rec8").style.display = "none";
          document.getElementById("rec9").style.display = "none";
          //document.getElementById("rec10").style.display = "none";
         break;
         case (val==2):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "inherit";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==3):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "inherit";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==4):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "inherit";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==5):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "inherit";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==6):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "inherit";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==7):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "inherit";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==8):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "inherit";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "none";
         break;
         case (val==9):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "inherit";
         document.getElementById("rec10").style.display = "none";
         break;
         case (val==10):
         document.getElementById("rec1").style.display = "none";
         document.getElementById("rec2").style.display = "none";
         document.getElementById("rec3").style.display = "none";
         document.getElementById("rec4").style.display = "none";
         document.getElementById("rec5").style.display = "none";
         document.getElementById("rec6").style.display = "none";
         document.getElementById("rec7").style.display = "none";
         document.getElementById("rec8").style.display = "none";
         document.getElementById("rec9").style.display = "none";
         //document.getElementById("rec10").style.display = "inherit";
         break;
         default:
         break;
       }
  }else{
       document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/"+ima+"')";
       document.getElementById("rec1").style.display = "none";
       document.getElementById("rec2").style.display = "none";
       document.getElementById("rec3").style.display = "none";
       document.getElementById("rec4").style.display = "none";
       document.getElementById("rec5").style.display = "none";
       document.getElementById("rec6").style.display = "none";
       document.getElementById("rec7").style.display = "none";
       document.getElementById("rec8").style.display = "none";
       document.getElementById("rec9").style.display = "none";
       //document.getElementById("rec10").style.display = "none";
  }
}
//window.onload=bg(0,'estructura.jpg');
/*
  $(document).ready(function(){
    var imagen='estructura.jpg';
    $(".imenu").hover(function(){
      $(".bg-ima").css("background-image", "url('assets/img/"+imagen+"')");
    });
  });
  $(document).ready(function(){
    $(".imenu").hover(function() {
      $("article",this).css('background-color', 'red');
    });
  });
*/
