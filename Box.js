class Box {
    constructor(x,y,width,height) {
        var options = { isStatic:true,}
        this.body =Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        //this.angle = 0;
        World.add(world,this.body);

    }
    display(){
        //var angle = this.body.angle;
        var pos = this.body.position;
        push();
        //translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        //angleMode(RADIANS);
        //console.log(angle);
        //rotate(angle);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
