function bg(val,ima,url){
  var imagen='estructura.jpg';
  if(val>0){
       document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/"+ima+"')";
       document.getElementById("imenu"+val).style.background = "#B20800";
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
          document.getElementById("imenu1").style.background = "#B20800";
          document.getElementById("imenu2").style.background = "#930000";
          document.getElementById("imenu3").style.background = "#930000";
          document.getElementById("imenu4").style.background = "#930000";
          document.getElementById("imenu5").style.background = "#930000";
          document.getElementById("imenu6").style.background = "#930000";
          document.getElementById("imenu7").style.background = "#930000";
          document.getElementById("imenu8").style.background = "#930000";
          document.getElementById("imenu9").style.background = "#930000";
          //document.getElementById("imenu10").style.background = "#930000";
          document.getElementById("imenu1").style.fontFamily= "avenirblack";
          document.getElementById("imenu2").style.fontFamily= "avenir";
          document.getElementById("imenu3").style.fontFamily= "avenir";
          document.getElementById("imenu4").style.fontFamily= "avenir";
          document.getElementById("imenu5").style.fontFamily= "avenir";
          document.getElementById("imenu6").style.fontFamily= "avenir";
          document.getElementById("imenu7").style.fontFamily= "avenir";
          document.getElementById("imenu8").style.fontFamily= "avenir";
          document.getElementById("imenu9").style.fontFamily= "avenir";
          //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#B20800";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenirblack";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#B20800";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenirblack";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#B20800";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenirblack";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#B20800";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenirblack";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#B20800";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenirblack";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#B20800";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenirblack";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#B20800";
         document.getElementById("imenu9").style.background = "#930000";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenirblack";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         //document.getElementById("rec10").style.display = "none";
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#B20800";
         //document.getElementById("imenu10").style.background = "#930000";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenirblack";
         //document.getElementById("imenu10").style.fontFamily= "avenir";
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
         document.getElementById("rec10").style.display = "inherit";
         document.getElementById("imenu1").style.background = "#930000";
         document.getElementById("imenu2").style.background = "#930000";
         document.getElementById("imenu3").style.background = "#930000";
         document.getElementById("imenu4").style.background = "#930000";
         document.getElementById("imenu5").style.background = "#930000";
         document.getElementById("imenu6").style.background = "#930000";
         document.getElementById("imenu7").style.background = "#930000";
         document.getElementById("imenu8").style.background = "#930000";
         document.getElementById("imenu9").style.background = "#930000";
         document.getElementById("imenu10").style.background = "#B20800";
         document.getElementById("imenu1").style.fontFamily= "avenir";
         document.getElementById("imenu2").style.fontFamily= "avenir";
         document.getElementById("imenu3").style.fontFamily= "avenir";
         document.getElementById("imenu4").style.fontFamily= "avenir";
         document.getElementById("imenu5").style.fontFamily= "avenir";
         document.getElementById("imenu6").style.fontFamily= "avenir";
         document.getElementById("imenu7").style.fontFamily= "avenir";
         document.getElementById("imenu8").style.fontFamily= "avenir";
         document.getElementById("imenu9").style.fontFamily= "avenir";
         document.getElementById("imenu10").style.fontFamily= "avenirblack";
         break;
         default:
         break;
       }
  }else{
    document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/"+ima+"')";
  }
}
