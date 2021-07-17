class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = []
    this.image2 = loadImage("sprites/smoke.png")
  }

  display() {
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(bird.body.velocity.x > 3 && this.body.position.x > 200){
      var path2 = [this.body.position.x,this.body.position.y]
      this.path.push(path2)

    }

    
    for(var i = 0; i< this.path.length  ; i++){
      image(this.image2, this.path[i][0],this.path[i][1]);
    }
    
  }
}
