//uma var que traz coisa do Matter 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var obj;

function setup() {
  createCanvas(400,400);

  //recebe o poder de criar n coisas
  engine = Engine.create();
  //crio meu mundo particular 
  world = engine.world;

  var obj_option = {
    isStatic: true
  }
  //crio o objeto 
  obj = Bodies.rectangle(200,100,50,50, obj_option);
  //
  World.add(world,obj);

  console.log(obj.position)

  
}

//faz tudo a cada frame 
function draw() {
  background(0);  

  //coloco as engrenagens pra funcionar
  Engine.update(engine);

  
  rectMode(CENTER)
  rect(obj.position.x, obj.position.y, 50, 50);
}