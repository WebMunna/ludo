//make dice rotation
//active 1st pice automatic if dice give  six in first time 
//give chance for make dice rotation again if six
//for the first pice after activated it will move automatic for every dice rotation value
//for the second time dice six value giving option for active pice or move already activated pice
//making function for move pice to its 56 microbox path according to dice value




//Intentiated Variables
const ide = new Position();
const ui = new UI();
const dise = new Dise();



//Initial Positions of pices
ide.initB2P1('pice-1');
ide.initB2P2('pice-2');
ide.initB2P3('pice-3');
ide.initB2P4('pice-4');


ide.initB3P1('pice-5');
ide.initB3P2('pice-6');
ide.initB3P3('pice-7');
ide.initB3P4('pice-8');

//Initials values
let activePice = [];


const pathForEight = [];


// document.querySelector('.dise').addEventListener('click', function(){
//   console.log('box-9 is clicked');
//   const diseValue = Math.floor(Math.random() * 6 + 1);
//   console.log(diseValue);
//   // if(diseValue === 6){
//   //   ide.mbox40('pice-9');
//   // }
// if(diseValue === 5 && pathCount === 0){
  
//   document.querySelector('.pice-9').addEventListener('mouseup', function(){
//     pathForEight.pop('1', '2', '3', '4', '5');
//     pathCount += 5;
//     ide.mbox6('pice-9');
//   })
  
  
// }
// else if(diseValue === 5 && pathCount === 5){
 
//   document.querySelector('.pice-9x').addEventListener('click', function(){
//     ide.mbox1('pice-9');
//     pathForEight.splice(5, 10);
//     pathForEight.pop('6', '7', '8', '9', '10');
//     pathCount += 5;
//   })
  
// }
// else if(diseValue === 5 && pathCount === 10){
  
//   document.querySelector('.pice-9xx').addEventListener('mousedown', function(){
//     ide.mbox16('pice-9');
//     // pathForEight.splice(1, 15);
//   pathForEight.pop('11', '12', '13', '14', '15');
//   pathCount += 5;
//   })
// }
// else if(diseValue === 5 && pathCount === 15){
  
//   document.querySelector('.pice-9xx').addEventListener('click', function(){
//     ide.mbox61('pice-9');
//   pathForEight.pop('16', '17', '18', '19', '20');
//   })
// }
// else if(diseValue === 5 && pathCount === 20){
  
//   document.querySelector('.pice-9xx').addEventListener('click', function(){
//     ide.mbox72('pice-9');
//   pathForEight.pop('21', '22', '23', '24', '25');
//   pathCount += 5;
//   })
// }
// else if(diseValue === 5 && pathCount === 25){
  
//   document.querySelector('.pice-9xx').addEventListener('click', function(){
//     ide.mbox57('pice-9');
//   pathForEight.push('26', '27', '28', '29', '30');
//   pathCount += 5;
//   })
// }
// else if(diseValue === 5 && pathCount === 30){
  
//   document.querySelector('.pice-9xx').addEventListener('click', function(){
//     ide.mbox35('pice-9');
//   pathForEight.pop('31', '32', '33', '34', '35');
//   pathCount += 5;
//   })
// }

// })


 






let piceSixPath = [22,21,20,19,54,51,58,45,42,39,38,27,40,43,46,49,52,6,5,4,3,2,1,7,13,14,15,16,17,18,55,58,61,64,67,70,71,72,69,66,63,60,57,31,32,33,34,35,36,30,29,28,27,26,25];
let piceSixIncrease = 0;
const fiveCounter = [];
let position;
const pathForSix = [];


function movingPice(num, pice){
piceSixIncrease += num;

console.log(piceSixIncrease);
}



// const movingSix = function(movingNumber){
//   if(movingNumber === 5 && pathForSix.length === 0 && fiveCounter.length === 5){
   
//     position = ide.mbox54('pice-6');
//     if(position != ''){
//       pathForSix.push('m22', 'm21', 'm20', 'm19', 'm54');
//     }
//     console.log('condition for 0 length is true');
    
//   } else if (movingNumber === 5 && pathForSix.length !== 0){
//     if(pathForSix.length === 1){
      
//       console.log('condition for 1 length is true');
//       position = ide.mbox51('pice-6');
//       if(position != ''){
//       pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
//       }
      
//     } else if (pathForSix.length === 2){
//       console.log('condition for 2 length is true');
//       pathForSix.push('m20', 'm19', 'm54', 'm51', 'm48' );
//        ide.mbox58('pice-6');
//     } else if (pathForSix.length === 3){
//       console.log('condition for 3 length is true');
//       pathForSix.push('m19', 'm54', 'm51', 'm48', 'm45');
//        ide.mbox45('pice-6');
//     } else if (pathForSix.length === 4){
//       console.log('condition for 4 length is true');
//       pathForSix.push('m54', 'm51', 'm48', 'm45', 'm42');
//        ide.mbox42('pice-6');
//     } else if (pathForSix.length === 5 ){
//       position =  ide.mbox39('pice-6');
//       console.log('condition for 5  length is true');
//       if(position != ''){
//       pathForSix.push('m51', 'm48', 'm45', 'm42', 'm39');
//       }
//       }
   
//     else if (pathForSix.length === 6){
//       console.log('condition for 6  length is true');
//       pathForSix.push('m48', 'm45', 'm42', 'm39', 'm38');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 7){
//       pathForSix.push('m45', 'm42', 'm39', 'm38', 'm37');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 8){
//       pathForSix.push('m42', 'm39', 'm38', 'm37', 'm40');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 9){
//       pathForSix.push('m39', 'm38', 'm37', 'm40', 'm43');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 10){
//       ide.mbox46('pice-6');
//       pathForSix.push('m38', 'm37', 'm40', 'm43', 'm46');
       
//     } 
//     else if (pathForSix.length === 11){
//       pathForSix.push('m37', 'm40', 'm43', 'm46', 'm49');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 12){
//       pathForSix.push('m40', 'm43', 'm46', 'm49', 'm52');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 13){
//       pathForSix.push('m43', 'm46', 'm49', 'm52', 'm6');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 14){
//       pathForSix.push('m46', 'm49', 'm52', 'm6', 'm5');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 15){
//       pathForSix.push('m49', 'm52', 'm6', 'm5', 'm4');
//        ide.mbox4('pice-6');
//     } else if (pathForSix.length === 16){
//       pathForSix.push('m52', 'm6', 'm5', 'm4', 'm3');
//        ide.mbox55('pice-6');
//     }
//      else if (pathForSix.length === 17){
//       pathForSix.push('m6', 'm5', 'm4', 'm3', 'm2');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 18){
//       pathForSix.push('m5', 'm4', 'm3', 'm2', 'm1');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 19){
//       pathForSix.push('m4', 'm3', 'm2', 'm1', 'm7');
//        ide.mbox55('pice-6');
//     } else if (pathForSix.length === 20){
//       pathForSix.push('m3', 'm2', 'm1', 'm7', 'm13');
//        ide.mbox13('pice-6');
//     } 
    // else if (pathForSix.length === 21){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 22){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 23){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 24){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 25){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 26){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 27){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 28){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 29){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 30){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 31){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // }else if (pathForSix.length === 32){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 33){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 34){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 35){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 36){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // }else if (pathForSix.length === 37){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 38){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 39){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 40){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 41){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // }  else if (pathForSix.length === 42){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 43){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 44){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 45){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 46){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 47){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 48){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 49){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 50){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 51){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 52){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 53){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 54){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 55){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 56){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 57){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 58){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 59){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 60){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 61){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 62){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 63){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // }else if (pathForSix.length === 64){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 65){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 66){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 67){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 68){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // }else if (pathForSix.length === 69){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 70){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 71){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 72){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // } else if (pathForSix.length === 73){
    //   pathForSix.push('m21', 'm20', 'm19', 'm54', 'm51');
    //    ide.mbox55('pice-6');
    // }
// }
// }












const mainApp = function(diceValue){

      if(diceValue === 6 && activePice.length === 0){
          console.log('six regitered for 1st time');
          const currentPice = 'pice-6';
          activePice.push(currentPice);
          sixCount =+ 1;
          ide.mbox23('pice-6');
          
      } else if(diceValue === 6 && activePice.length === 1){
        console.log('six is registered 2nd time')
        //click for new pice active
        document.querySelector('.pice-8').addEventListener('click', function(){
          console.log('pice eight clicked for 2nd six')
          activePice.push('pice-8');
          clickDisable(true, 8)
        })
        //click for old active moving
        if(activePice.length !== 2) {
        document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6);
          movingPice(6, 'pice-6');
        })} 
      } else if(diceValue === 6 && activePice.length === 2){
        console.log('six is registered 3rd time')
        //click for new pice active
        document.querySelector('.pice-7').addEventListener('click', function(){
          console.log('pice seven clicked for active it for 3rd six')
          activePice.push('pice-7');
          clickDisable(true, 7);
        })
        //click for old active moving
       
        if(activePice.length !== 3) {
           //moving pice-6
        document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6);
          
        })
          //moving pice-8
          document.querySelector('.pice-8').addEventListener('click', function(){
            console.log('pice eight is clicked for moving it')
            clickDisable(true, 8)
          })
      } 
      }
      else if(diceValue === 6 && activePice.length === 3){
        console.log('six is registered 4rd time')
        //click for new pice active
        document.querySelector('.pice-5').addEventListener('click', function(){
          console.log('pice five clicked for active it for 4th six')
          activePice.push('pice-5');
          clickDisable(true, 5);
        })
        //click for old active moving
       
        if(activePice.length !== 3) {
           //moving pice-6
        document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6)
        })
          //moving pice-8
          document.querySelector('.pice-8').addEventListener('click', function(){
            console.log('pice eight is clicked for moving it')
            clickDisable(true, 8)
          })
          //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
      } 
      } else if(diceValue === 6 && activePice.length === 4){
        console.log('six is registered for 5th time')
         //moving pice-6
         document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6)
        })
          //moving pice-8
          document.querySelector('.pice-8').addEventListener('click', function(){
            console.log('pice eight is clicked for moving it')
            clickDisable(true, 8)
          })
          //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
          //moving pice-5
          document.querySelector('.pice-5').addEventListener('click', function(){
            console.log('pice five is clicked for moving it')
            clickDisable(true, 5)
          })
      }
       else if(diceValue === 5 && activePice.length === 1){
        console.log('five coming after one pice activated');
         //moving pice-6
         document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6);
         

          fiveCounter.push('1', '2', '3', '4', '5');
        })
          
      } else if(diceValue === 5 && activePice.length === 2){
        console.log('five coming after two pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
            
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
      } 
      else if(diceValue === 5 && activePice.length === 3){
        console.log('five coming after three pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6);
            
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
      } 
      else if(diceValue === 5 && activePice.length === 4){
        console.log('five coming after four pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6);
            
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
           //moving pice-5
           document.querySelector('.pice-5').addEventListener('click', function(){
            console.log('pice five is clicked for moving it')
            clickDisable(true, 5)
          })
      } 
      else if(diceValue === 4 && activePice.length === 1){
        console.log('four coming after one pice activated');
         //moving pice-6
         document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6)
        })
          
      } else if(diceValue === 4 && activePice.length === 2){
        console.log('four coming after two pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
      } 
      else if(diceValue === 4 && activePice.length === 3){
        console.log('four coming after three pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
      } 
      else if(diceValue === 4 && activePice.length === 4){
        console.log('four coming after four pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
           //moving pice-5
           document.querySelector('.pice-5').addEventListener('click', function(){
            console.log('pice five is clicked for moving it')
            clickDisable(true, 5)
          })
      } 
      else if(diceValue === 3 && activePice.length === 1){
        console.log('three coming after one pice activated');
         //moving pice-6
         document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6);
          // if(pathForSix.length === 0 && diceValue === 3 && activePice.length === 1){
          //   ui.lengthFor0();
           
          // }
          // if(pathForSix.length === 1){
          //   ui.lengthFor1();
          
          // }
          // if(pathForSix.length === 2){
          //   ui.lengthFor2();
         
          // }
          // if(pathForSix.length === 3){
          //   ui.lengthFor3();
            
          // }
          // if(pathForSix.length === 4){
          //   ui.lengthFor4();
            
          // }
          // if(pathForSix.length === 5){
          //   ui.lengthFor5();
            
          // }
          // if(pathForSix.length === 6){
          //   ui.lengthFor6();
            
          // }
          // if(pathForSix.length === 7){
          //   ui.lengthFor7();
          
          // }
          // if(pathForSix.length === 8){
          //   ui.lengthFor8();
           
          // }
          // if(pathForSix.length === 9){
          //   ui.lengthFor9();
            
          // }
        })
          
      } else if(diceValue === 3 && activePice.length === 2){
        console.log('three coming after two pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
      } 
      else if(diceValue === 3 && activePice.length === 3){
        console.log('three coming after three pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
      } 
      else if(diceValue === 3 && activePice.length === 4){
        console.log('three coming after four pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
           //moving pice-5
           document.querySelector('.pice-5').addEventListener('click', function(){
            console.log('pice five is clicked for moving it')
            clickDisable(true, 5)
          })
      } 
      else if(diceValue === 2 && activePice.length === 1){
        console.log('two coming after one pice activated');
         //moving pice-6
         document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6)
        })
          
      } else if(diceValue === 2 && activePice.length === 2){
        console.log('two coming after two pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
      } 
      else if(diceValue === 2 && activePice.length === 3){
        console.log('two coming after three pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
      } 
      else if(diceValue === 2 && activePice.length === 4){
        console.log('two coming after four pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
           //moving pice-5
           document.querySelector('.pice-5').addEventListener('click', function(){
            console.log('pice five is clicked for moving it')
            clickDisable(true, 5)
          })
      } 
      else if(diceValue === 1 && activePice.length === 1){
        console.log('one coming after one pice activated');
         //moving pice-6
         document.querySelector('.pice-6').addEventListener('click', function(){
          console.log('pice six is clicked for moving it')
          clickDisable(true, 6)
        })
          
      } else if(diceValue === 1 && activePice.length === 2){
        console.log('one coming after two pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
      } 
      else if(diceValue === 1 && activePice.length === 3){
        console.log('one coming after three pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
      } 
      else if(diceValue === 1 && activePice.length === 4){
        console.log('one coming after four pice activated');
          //moving pice-6
          document.querySelector('.pice-6').addEventListener('click', function(){
            console.log('pice six is clicked for moving it')
            clickDisable(true, 6)
          })
            //moving pice-8
            document.querySelector('.pice-8').addEventListener('click', function(){
              console.log('pice eight is clicked for moving it')
              clickDisable(true, 8)
            })
            //moving pice-7
          document.querySelector('.pice-7').addEventListener('click', function(){
            console.log('pice seven is clicked for moving it')
            clickDisable(true, 7)
          })
           //moving pice-5
           document.querySelector('.pice-5').addEventListener('click', function(){
            console.log('pice five is clicked for moving it')
            clickDisable(true, 5)
          })
      } 
        else {
        console.log('no six regitered yet');
      }

      }


//Event listener for diace rotation
document.querySelector('.box-3').addEventListener('click', function(){ console.log('box-3 is clicked');
  const diseValue = Math.floor(Math.random() * 6 + 1);
  console.log(diseValue);
  mainApp(diseValue);
  //click active for new action
  document.querySelector('.pice-5').style.pointerEvents = 'auto';
  document.querySelector('.pice-6').style.pointerEvents = 'auto';
  document.querySelector('.pice-7').style.pointerEvents = 'auto';
  document.querySelector('.pice-8').style.pointerEvents = 'auto';
})

//Function for other click disable
clickDisable = function(disable, piceClick){
if(disable === true && piceClick === 6){
  document.querySelector('.pice-5').style.pointerEvents = 'none';
  document.querySelector('.pice-7').style.pointerEvents = 'none';
  document.querySelector('.pice-8').style.pointerEvents = 'none';
  document.querySelector('.pice-6').style.pointerEvents = 'none';
  
 
}
if(disable === true && piceClick === 7){
  document.querySelector('.pice-5').style.pointerEvents = 'none';
  document.querySelector('.pice-6').style.pointerEvents = 'none';
  document.querySelector('.pice-8').style.pointerEvents = 'none';
  document.querySelector('.pice-7').style.pointerEvents = 'none';
 
}
if(disable === true && piceClick === 8){
  document.querySelector('.pice-7').style.pointerEvents = 'none';
  document.querySelector('.pice-6').style.pointerEvents = 'none';
  document.querySelector('.pice-5').style.pointerEvents = 'none';
  document.querySelector('.pice-8').style.pointerEvents = 'none';
 
}
if(disable === true && piceClick === 5){
  document.querySelector('.pice-6').style.pointerEvents = 'none';
  document.querySelector('.pice-7').style.pointerEvents = 'none';
  document.querySelector('.pice-8').style.pointerEvents = 'none';
  document.querySelector('.pice-5').style.pointerEvents = 'none';
 
}
if(disable === true && piceClick === 1){
  document.querySelector('.pice-6').style.pointerEvents = 'none';
  document.querySelector('.pice-7').style.pointerEvents = 'none';
  document.querySelector('.pice-8').style.pointerEvents = 'none';
  document.querySelector('.pice-5').style.pointerEvents = 'none';
  
 
}
}



