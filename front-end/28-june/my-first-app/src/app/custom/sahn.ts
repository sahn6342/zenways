import { Component ,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: '.sahn',
  templateUrl: './sahn.html',
  styleUrls: ['./my-css.css','../../assets/bootstrap/bootstrap.css'],
  inputs:['haha'],
  outputs:[]
})
export class sahn{
    imgUrl="https://media.wired.com/photos/599dcfe8d6c80105bd749ea7/master/w_582,c_limit/joker-TA.jpg";
    size="100";
    imgWidth;
    game=[{
      gameName:"Joker1",
      gameImg:"https://media.wired.com/photos/599dcfe8d6c80105bd749ea7/master/w_582,c_limit/joker-TA.jpg"  ,
      player:["sahn","parashar","s","a"]  
    },{ gameName:"Joker2",
    gameImg:"https://i.pinimg.com/564x/46/28/6c/46286c62cfc22bc12c72bb643368bd72.jpg"  ,
    player:["sahn","parashar","s","a"]  
  },{ gameName:"Joker3",
  gameImg:"https://media.wired.com/photos/599dcfe8d6c80105bd749ea7/master/w_582,c_limit/joker-TA.jpg",
  player:["sahn","parashar","s","a"]  
}];
select=false
}