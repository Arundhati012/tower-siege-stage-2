class slindshot{
    constructor(bodyA,pointB)
    var options = {
        bodyA:bodyA;
     pointB:pointB;
     stiffness:0.04;
     length:10;
    }
    
}

this.sling1 = loadImage(sprites/sling1.png);
this.sling2 = loadImage(sprites/sling2.png);
this.sling3 = loadImage(sprites/sling3.png);

fly {
    this.sling1.bodyA=null

}

display(){
    if(this.sling1.bodyA){
        var pointA = this.sling1.bodyA.position
        var pointB= this.bodyA
        strokeweight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}