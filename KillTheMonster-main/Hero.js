class Hero {
    constructor(x,y,width,height){
        var opts ={
           isStatic:true
            
        }
        
        this.body = Bodies.rectangle(x,y,width,height,opts);
        this.width = width ;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("Images/Superhero-01.png");
    }
     
    display() {

        var pos;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        
        pop();
    }
}