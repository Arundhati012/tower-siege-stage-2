class block{
    constructor(bodyA,pointB)
    var options = {
        bodyA:bodyA;
     pointB:pointB;
     stiffness:0.04;
     length:10;
    }
    
}

block1 = new Block (330,235,30,40);
block2 = new Block (400,105,30,40);
block3 = new Block (420,335,30,40);
block4 = new Block (380,215,30,40);
block5 = new Block (410,100,30,40);
block6 = new Block (390,115,30,40);
block8= new Block (330,235,30,40);
block9 = new Block (400,105,30,40);
block10 = new Block (420,335,30,40);
block11 = new Block (232,150,30,40);
block12 = new Block (480,215,30,40);
block13 = new Block (470,333,30,40);
block14 = new Block (320,285,30,40);
block15 = new Block (400,222,30,40);
block16 = new Block (321,132,30,40);

display()
console.log(this.body.speed);
if((this.body.speed)<3){
    }
    super.display(){

    }else
   { World.remove(world,this.body)}

   function keyPressed(){
       if(keyCode===32){
           slingShot.attach(this.polygon);
       }
   }


    
    