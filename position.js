
class Position{

  
 currentPosition = function(top, bottom, left, right, cPice){
  if(bottom === 0 && right === 0){
  document.querySelector(`.${cPice}`).style.top = `${top}px`;
  document.querySelector(`.${cPice}`).style.left = `${left}px`;
  } else if(top === 0 && right === 0){
  
  document.querySelector(`.${cPice}`).style.left = `${left}px`;
  document.querySelector(`.${cPice}`).style.bottom = `${bottom}px`;
  } else if(bottom === 0 || left === 0){
  document.querySelector(`.${cPice}`).style.right = `${right}px`;
  document.querySelector(`.${cPice}`).style.top = `${top}px`;
  }
 
}

//Initial pice position on the starting box

 initB2P1 = function(cPice){
  
  this.currentPosition(70, 0, 0, 50, cPice);
  return {
    top: 70,
    bottom: 0,
    left: 0,
    right: 50
  }  
} 

initB2P2 = function(cPice){
  
  this.currentPosition(70, 0, 0, 130, cPice);
  return {
    top: 70,
    bottom: 0,
    left: 0,
    right: 130
  }  
} 

initB2P3 = function(cPice){
  
  this.currentPosition(130, 0, 0, 50, cPice);
  return {
    top: 130,
    bottom: 0,
    left: 0,
    right: 50
  }  
} 

initB2P4 = function(cPice){
  
  this.currentPosition(130, 0, 0, 130, cPice);
  return {
    top: 130,
    bottom: 0,
    left: 0,
    right: 130
  }  
} 



initB3P1 = function(cPice){
  
  this.currentPosition(0, 70, 50, 0, cPice);
  return {
    top: 0,
    bottom: 70,
    left: 70,
    right: 0
  }  
} 

initB3P2 = function(cPice){
  
  this.currentPosition(0, 70, 130, 0, cPice);
  return {
    top: 0,
    bottom: 70,
    left: 130,
    right: 130
  }  
} 

initB3P3 = function(cPice){
  
  this.currentPosition(0, 130, 50, 0, cPice);
  return {
    top: 0,
    bottom: 130,
    left: 50,
    right: 0
  }  
} 

initB3P4 = function(cPice){
  
  this.currentPosition(0, 130, 130, 0, cPice);
  return {
    top: 0,
    bottom: 130,
    left: 130,
    right: 0
  }  
} 

endB5P1 = function(cPice){
  
  this.currentPosition(310, 0, 0, 229, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 229
  }  
} 
endB5P2 = function(cPice){
  
  this.currentPosition(310, 0, 0, 265, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 265
  }  
} 
endB5P3 = function(cPice){
  
  this.currentPosition(310, 0, 0, 301, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 301
  }  
} 
endB5P4 = function(cPice){
  
  this.currentPosition(310, 0, 0, 337, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 337
  }  
} 

endB5P5 = function(cPice){
  
  this.currentPosition(238, 0, 0, 229, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 229
  }  
} 
endB5P6 = function(cPice){
  
  this.currentPosition(238, 0, 0, 265, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 265
  }  
} 
endB5P7 = function(cPice){
  
  this.currentPosition(238, 0, 0, 301, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 301
  }  
} 
endB5P8 = function(cPice){
  
  this.currentPosition(238, 0, 0, 337, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 337
  }  
} 


 mbox1 = function(cPice){
  
  this.currentPosition(13, 0, 238, 0, cPice);
  return {
    top: 13,
    bottom: 0,
    left: 238,
    right: 0
  }  
}


 mbox2 = function(cPice){
  
  this.currentPosition(49, 0, 238, 0, cPice);
  return {
    top: 49,
    bottom: 0,
    left: 238,
    right: 0
  }  
}


 mbox3 = function(cPice){
  
  this.currentPosition(85, 0, 238, 0, cPice);
  return {
    top: 85,
    bottom: 0,
    left: 238,
    right: 0
  }  
}


 mbox4 = function(cPice){
  
  this.currentPosition(121, 0, 238, 0, cPice);
  return {
    top: 121,
    bottom: 0,
    left: 238,
    right: 0
  }  
}


 mbox5 = function(cPice){
  
  this.currentPosition(157, 0, 238, 0, cPice);
  return {
    top: 157,
    bottom: 0,
    left: 238,
    right: 0
  }  
}


 mbox6 = function(cPice){
  
  this.currentPosition(193, 0, 238, 0, cPice);
  return {
    top: 193,
    bottom: 0,
    left: 238,
    right: 0
  }  
}

 mbox7 = function(cPice){
  
  this.currentPosition(13, 0, 274, 0, cPice);
  return {
    top: 13,
    bottom: 0,
    left: 274,
    right: 0
  }  
}


 mbox8 = function(cPice){
  
  this.currentPosition(49, 0, 274, 0, cPice);
  return {
    top: 49,
    bottom: 0,
    left: 274,
    right: 0
  }  
}

 mbox9 = function(cPice){
  
  this.currentPosition(85, 0, 274, 0, cPice);
  return {
    top: 85,
    bottom: 0,
    left: 274,
    right: 0
  }  
}

 mbox10 = function(cPice){
  
  this.currentPosition(121, 0, 274, 0, cPice);
  return {
    top: 121,
    bottom: 0,
    left: 274,
    right: 0
  }  
}
 mbox11 = function(cPice){
  
  this.currentPosition(157, 0, 274, 0, cPice);
  return {
    top: 157,
    bottom: 0,
    left: 274,
    right: 0
  }  
}

 mbox12 = function(cPice){
  
  this.currentPosition(193, 0, 274, 0, cPice);
  return {
    top: 193,
    bottom: 0,
    left: 276,
    right: 0
  }  
}


 mbox13 = function(cPice){
  
  this.currentPosition(13, 0, 310, 0, cPice);
  return {
    top: 13,
    bottom: 0,
    left: 310,
    right: 0
  }  
}

 mbox14 = function(cPice){
  
  this.currentPosition(49, 0, 310, 0, cPice);
  return {
    top: 49,
    bottom: 0,
    left: 310,
    right: 0
  }  
}

 mbox15 = function(cPice){
  
  this.currentPosition(85, 0, 310, 0, cPice);
  return {
    top: 85,
    bottom: 0,
    left: 310,
    right: 0
  }  
}
 mbox16 = function(cPice){
  
  this.currentPosition(121, 0, 310, 0, cPice);
  return {
    top: 121,
    bottom: 0,
    left: 310,
    right: 0
  }  
}

 mbox17 = function(cPice){
  
  this.currentPosition(157, 0, 310, 0, cPice);
  return {
    top: 157,
    bottom: 0,
    left: 310,
    right: 0
  }  
}

 mbox18 = function(cPice){
  
  this.currentPosition(193, 0, 310, 0, cPice);
  return {
    top: 193,
    bottom: 0,
    left: 310,
    right: 0
  }  
}

 mbox19 = function(cPice){
  
  this.currentPosition(0, 193, 238, 0, cPice);
  return {
    top: 0,
    bottom: 193,
    left: 238,
    right: 0
  }  
}


 mbox20 = function(cPice){
  
  this.currentPosition(0, 157, 238, 0, cPice);
  return {
    top: 0,
    bottom: 157,
    left: 238,
    right: 0
  }  
}

 mbox21 = function(cPice){
  
  this.currentPosition(0, 121, 238, 0, cPice);
  return {
    top: 0,
    bottom: 121,
    left: 238,
    right: 0
  }  
}

 mbox22 = function(cPice){
  
  this.currentPosition(0, 85, 238, 0, cPice);
  return {
    top: 0,
    bottom: 85,
    left: 238,
    right: 0
  }  
}

 mbox23 = function(cPice){
  
  this.currentPosition(0, 49, 238, 0, cPice);
  return {
    top: 0,
    bottom: 49,
    left: 238,
    right: 0
  }  
}

 mbox24 = function(cPice){
  
  this.currentPosition(0, 13, 238, 0, cPice);
  return {
    top: 0,
    bottom: 13,
    left: 238,
    right: 0
  }  
}


 mbox25 = function(cPice){
  
  this.currentPosition(0, 193, 274, 0, cPice);
  return {
    top: 0,
    bottom: 193,
    left: 274,
    right: 0
  }  
}


 mbox26 = function(cPice){
  
  this.currentPosition(0, 157, 274, 0, cPice);
  return {
    top: 0,
    bottom: 157,
    left: 274,
    right: 0
  }  
}

 mbox27 = function(cPice){
  
  this.currentPosition(0, 121, 274, 0, cPice);
  return {
    top: 0,
    bottom: 121,
    left: 274,
    right: 0
  }  
}

 mbox28 = function(cPice){
  
  this.currentPosition(0, 85, 274, 0, cPice);
  return {
    top: 0,
    bottom: 85,
    left: 274,
    right: 0
  }  
}

 mbox29 = function(cPice){
  
  this.currentPosition(0, 49, 274, 0, cPice);
  return {
    top: 0,
    bottom: 49,
    left: 274,
    right: 0
  }  
}

 mbox30 = function(cPice){
  
  this.currentPosition(0, 13, 274, 0, cPice);
  return {
    top: 0,
    bottom: 13,
    left: 274,
    right: 0
  }  
}

 mbox31 = function(cPice){
  
  this.currentPosition(0, 193, 310, 0 , cPice);
  return {
    top: 0,
    bottom: 193,
    left: 310,
    right: 0
  }  
}

 mbox32 = function(cPice){
  
  this.currentPosition(0, 157, 310, 0, cPice);
  return {
    top: 0,
    bottom: 157,
    left: 310,
    right: 0
  }  
}

 mbox33 = function(cPice){
  
  this.currentPosition(0, 121, 310, 0, cPice);
  return {
    top: 0,
    bottom: 121,
    left: 310,
    right: 0
  }  
}

 mbox34 = function(cPice){
  
  this.currentPosition(0, 85, 310, 0, cPice);
  return {
    top: 0,
    bottom: 85,
    left: 310,
    right: 0
  }  
}

 mbox35 = function(cPice){
  
  this.currentPosition(0, 49, 310, 0, cPice);
  return {
    top: 0,
    bottom: 49,
    left: 310,
    right: 0
  }  
}
 mbox36 = function(cPice){
  
  this.currentPosition(0, 13, 310, 0, cPice);
  return {
    top: 0,
    bottom: 13,
    left: 310,
    right: 0
  }  
}

 mbox37 = function(cPice){
  
  this.currentPosition(238, 0, 13, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 13,
    right: 0
  }  
}


 mbox38 = function(cPice){
  
  this.currentPosition(274, 0, 13, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 13,
    right: 0
  }  
}

 mbox39 = function(cPice){
  
  this.currentPosition(310, 0, 13, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 85,
    right: 0
  }  
}

 mbox40 = function(cPice){
  
  this.currentPosition(238, 0, 49, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 49,
    right: 0
  }  
}
 mbox41 = function(cPice){
  
  this.currentPosition(274, 0, 49, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 49,
    right: 0
  }  
}

 mbox42 = function(cPice){
  
  this.currentPosition(310, 0, 49, 0, cPice);
  return {
    top: 13,
    bottom: 0,
    left: 238,
    right: 0
  }  
}

 mbox43 = function(cPice){
  
  this.currentPosition(238, 0, 85, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 85,
    right: 0
  }  
}

 mbox44 = function(cPice){
  
  this.currentPosition(274, 0, 85, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 85,
    right: 0
  }  
}

 mbox45 = function(cPice){
  
  this.currentPosition(310, 0, 85, 0, cPice);
  return {
    top: 13,
    bottom: 0,
    left: 238,
    right: 0
  }  
}
 mbox46 = function(cPice){
  
  this.currentPosition(238, 0, 121, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 121,
    right: 0
  }  
}

 mbox47 = function(cPice){
  
  this.currentPosition(274, 0, 121, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 121,
    right: 0
  }  
}

 mbox48 = function(cPice){
  
  this.currentPosition(310, 0, 121, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 121,
    right: 0
  }  
}

 mbox49 = function(cPice){
  
  this.currentPosition(238, 0, 157, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 157,
    right: 0
  }  
}

 mbox50 = function(cPice){
  
  this.currentPosition(274, 0, 157, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 157,
    right: 0
  }  
}
 mbox51 = function(cPice){
  
  this.currentPosition(310, 0, 157, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 157,
    right: 0
  }  
}

 mbox52 = function(cPice){
  
  this.currentPosition(238, 0, 193, 0, cPice);
  return {
    top:238,
    bottom: 0,
    left: 193,
    right: 0
  }  
}

 mbox53 = function(cPice){
  
  this.currentPosition(274, 0, 193, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 193,
    right: 0
  }  
}

 mbox54 = function(cPice){
  
  this.currentPosition(310, 0, 193, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 193,
    right: 0
  }  
}


 mbox55 = function(cPice){
  
  this.currentPosition(238, 0, 356, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 356,
    right: 0
  }  
}


 mbox56 = function(cPice){
  
  this.currentPosition(274, 0, 356, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 356,
    right: 0
  }  
}

 mbox57 = function(cPice){
  
  this.currentPosition(310, 0, 356, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 356,
    right: 0
  }  
}

 mbox58 = function(cPice){
  
  this.currentPosition(238, 0, 392, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 392,
    right: 0
  }  
}

 mbox59 = function(cPice){
  
  this.currentPosition(274, 0, 392, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 0,
    right: 157
  }  
}

 mbox60 = function(cPice){
  
  this.currentPosition(310, 0, 392, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 0,
    right: 157
  }  
}
 mbox61 = function(cPice){
  
  this.currentPosition(238, 0, 428, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 428,
    right: 0
  }  
}

 mbox62 = function(cPice){
  
  this.currentPosition(274, 0, 428, 0, cPice);
  return {
    top:274,
    bottom: 0,
    left: 428,
    right: 0
  }  
}

 mbox63 = function(cPice){
  
  this.currentPosition(310, 0, 428, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 428,
    right: 0
  }  
}

 mbox64 = function(cPice){
  
  this.currentPosition(238, 0, 464, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 464,
    right: 0
  }  
}

 mbox65 = function(cPice){
  
  this.currentPosition(274, 0, 464, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 464,
    right: 0
  }  
}
 mbox66 = function(cPice){
  
  this.currentPosition(310, 0, 464, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 464,
    right: 0
  }  
}

 mbox67 = function(cPice){
  
  this.currentPosition(238, 0, 500, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 500,
    right: 0
  }  
}

 mbox68 = function(cPice){
  
  this.currentPosition(274, 0, 500, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 500,
    right: 0
  }  
}

 mbox69 = function(cPice){
  
  this.currentPosition(310, 0, 500, 0, cPice);
  return {
    top: 13,
    bottom: 0,
    left: 500,
    right: 0
  }  
}

 mbox70 = function(cPice){
  
  this.currentPosition(238, 0, 536, 0, cPice);
  return {
    top: 238,
    bottom: 0,
    left: 536,
    right: 0
  }  
}

mbox71 = function(cPice){
  
  this.currentPosition(274, 0, 536, 0, cPice);
  return {
    top: 274,
    bottom: 0,
    left: 536,
    right: 0
  }  
}

mbox72 = function(cPice){
  
  this.currentPosition(310, 0, 536, 0, cPice);
  return {
    top: 310,
    bottom: 0,
    left: 536,
    right: 0
  }  
}

}



//  mbox2 = document.querySelector('.mbox-2');
//  mbox3 = document.querySelector('.mbox-3');
//  mbox4 = document.querySelector('.mbox-4');
//  mbox5 = document.querySelector('.mbox-5');
//  mbox6 = document.querySelector('.mbox-6');
//  mbox7 = document.querySelector('.mbox-7');
//  mbox8 = document.querySelector('.mbox-7');
//  mbox9 = document.querySelector('.mbox-9');
//  mbox10 = document.querySelector('.mbox-10');
//  mbox11 = document.querySelector('.mbox-11');
//  mbox12 = document.querySelector('.mbox-12');
//  mbox13 = document.querySelector('.mbox-13');
//  mbox14 = document.querySelector('.mbox-14');
//  mbox15 = document.querySelector('.mbox-15');
//  mbox16 = document.querySelector('.mbox-16');
//  mbox17 = document.querySelector('.mbox-17');
//  mbox18 = document.querySelector('.mbox-18');
//  mbox19 = document.querySelector('.mbox-19');
//  mbox20 = document.querySelector('.mbox-20');
//  mbox21 = document.querySelector('.mbox-21');
//  mbox22 = document.querySelector('.mbox-22');
//  mbox23 = document.querySelector('.mbox-23');
//  mbox24 = document.querySelector('.mbox-24');
//  mbox25 = document.querySelector('.mbox-25');
//  mbox26 = document.querySelector('.mbox-26');
//  mbox27 = document.querySelector('.mbox-27');
//  mbox28 = document.querySelector('.mbox-28');
//  mbox29 = document.querySelector('.mbox-29');
//  mbox30 = document.querySelector('.mbox-30');
//  mbox31 = document.querySelector('.mbox-31');
//  mbox32 = document.querySelector('.mbox-32');
//  mbox33 = document.querySelector('.mbox-33');
//  mbox34 = document.querySelector('.mbox-34');
//  mbox35 = document.querySelector('.mbox-35');
//  mbox36 = document.querySelector('.mbox-36');
//  mbox37 = document.querySelector('.mbox-37');
//  mbox38 = document.querySelector('.mbox-38');
//  mbox39 = document.querySelector('.mbox-39');
//  mbox40 = document.querySelector('.mbox-40');
//  mbox41 = document.querySelector('.mbox-41');
//  mbox42 = document.querySelector('.mbox-42');
//  mbox43 = document.querySelector('.mbox-43');
//  mbox44 = document.querySelector('.mbox-44');
//  mbox45 = document.querySelector('.mbox-45');
//  mbox46 = document.querySelector('.mbox-46');
//  mbox47 = document.querySelector('.mbox-47');
//  mbox48 = document.querySelector('.mbox-48');
//  mbox49 = document.querySelector('.mbox-49');
//  mbox50 = document.querySelector('.mbox-50');
//  mbox51 = document.querySelector('.mbox-51');
//  mbox52 = document.querySelector('.mbox-52');
//  mbox53 = document.querySelector('.mbox-53');
//  mbox54 = document.querySelector('.mbox-54');
//  mbox55 = document.querySelector('.mbox-55');
//  mbox56 = document.querySelector('.mbox-56');
//  mbox57 = document.querySelector('.mbox-57');
//  mbox58 = document.querySelector('.mbox-58');
//  mbox59 = document.querySelector('.mbox-59');
//  mbox60 = document.querySelector('.mbox-60');
//  mbox61 = document.querySelector('.mbox-61');
//  mbox62 = document.querySelector('.mbox-62');
//  mbox63 = document.querySelector('.mbox-63');
//  mbox64 = document.querySelector('.mbox-64');
//  mbox65 = document.querySelector('.mbox-65');
//  mbox66 = document.querySelector('.mbox-66');
//  mbox67 = document.querySelector('.mbox-67');
//  mbox68 = document.querySelector('.mbox-68');
//  mbox69 = document.querySelector('.mbox-69');
//  mbox70 = document.querySelector('.mbox-70');
//  mbox71 = document.querySelector('.mbox-71');
//  mbox72 = document.querySelector('.mbox-72');



