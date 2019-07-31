function bg(val,url){
  var imagen='bgmenu1.jpg';
  if(val>0){
       //document.getElementById("imenu"+val).style.background = "#B20800";
       document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/bgmenu"+val+".jpg')";
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
    document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/"+imagen+".jpg')";
  }
}



var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.setAttribute("onclick", "bg_select("+j+")");//Agregado
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


function bg_select(val){
  var imagen='bgmenu1.jpg';
  if(val>0){
    document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/bgmenu"+val+".jpg')";
    document.getElementById("ver-url").innerHTML = '<a href="'+val+'">VER M&Aacute;S</a>';
  }else{
    document.getElementById("bg-ima").style.backgroundImage = "url('assets/img/"+imagen+".jpg')";
  }
}

function bg_item(val){
  if(val>0){
    switch (true) {
      case (val==1):
      document.getElementById("item1").style.backgroundImage = "url('assets/img/item1_on.png')";
      document.getElementById("item2").style.backgroundImage = "url('assets/img/item2_off.png')";
      document.getElementById("item3").style.backgroundImage = "url('assets/img/item3_off.png')";
      document.getElementById("item4").style.backgroundImage = "url('assets/img/item4_off.png')";
      break;
      case (val==2):
      document.getElementById("item1").style.backgroundImage = "url('assets/img/item1_off.png')";
      document.getElementById("item2").style.backgroundImage = "url('assets/img/item2_on.png')";
      document.getElementById("item3").style.backgroundImage = "url('assets/img/item3_off.png')";
      document.getElementById("item4").style.backgroundImage = "url('assets/img/item4_off.png')";
      break;
      case (val==3):
      document.getElementById("item1").style.backgroundImage = "url('assets/img/item1_off.png')";
      document.getElementById("item2").style.backgroundImage = "url('assets/img/item2_off.png')";
      document.getElementById("item3").style.backgroundImage = "url('assets/img/item3_on.png')";
      document.getElementById("item4").style.backgroundImage = "url('assets/img/item4_off.png')";
      break;
      case (val==4):
      document.getElementById("item1").style.backgroundImage = "url('assets/img/item1_off.png')";
      document.getElementById("item2").style.backgroundImage = "url('assets/img/item2_off.png')";
      document.getElementById("item3").style.backgroundImage = "url('assets/img/item3_off.png')";
      document.getElementById("item4").style.backgroundImage = "url('assets/img/item4_on.png')";
      break;
    }
  }else{
    document.getElementById("item1").style.backgroundImage = "url('assets/img/item1_off.png')";
    document.getElementById("item2").style.backgroundImage = "url('assets/img/item2_off.png')";
    document.getElementById("item3").style.backgroundImage = "url('assets/img/item3_off.png')";
    document.getElementById("item4").style.backgroundImage = "url('assets/img/item4_off.png')";
  }
}
