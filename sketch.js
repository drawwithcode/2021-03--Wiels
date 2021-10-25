let mySong;
let duifje;
let kdb
let bg
let hh
let kdb2
let kdb3
let kdb4
let kdb5
let kdb6
let kdb7
let kdb8
let lup
let lup2
let pidg
let pidg2
let pidg3
let zeb
let zeb2
let analyzer;
let angle=0
let skins
let am_skins
let things=[]
let teksten=[]
let n = 15
let bool = 0
let movies
let titles
let counter=0

function preload(){
  duifje = loadImage("./assets/duifjewow.jpg")
  kdb = loadImage("./assets/kerkdakbloem1.2.jpg")
  mySong = loadSound("./assets/SW_icarus_short.mp3")
  bg = loadImage("./assets/betongoeie.jpg")
  hh = loadImage("./assets/hockneyhupla.jpg")
  kdb2 = loadImage("./assets/kerkdakbloem1.11.jpg")
  kdb3 = loadImage("./assets/kerkdakbloem1.13.jpg")
  kdb4 = loadImage("./assets/kerkdakbloem1.16.jpg")
  kdb5 = loadImage("./assets/kerkdakbloem1.19.jpg")
  kdb6 = loadImage("./assets/kerkdakbloem1.20.jpg")
  kdb7 = loadImage("./assets/kerkdakbloem1.26.jpg")
  kdb8 = loadImage("./assets/kerkdakbloem1.29.jpg")
  lup = loadImage("./assets/luperd1.6.jpg")
  lup2 = loadImage("./assets/luperd1.9.jpg")
  pidg = loadImage("./assets/pidgeon2.7.jpg")
  pidg2 = loadImage("./assets/pidgeon2.14.jpg")
  pidg3 = loadImage("./assets/pidgeon2.20.jpg")
  zeb = loadImage("./assets/zebravent1.6.jpg")
  zeb2 = loadImage("./assets/zebravent1.11.jpg")

  movies = loadJSON("./assets/movies.json")
}

function setup(){

  createCanvas(windowWidth,windowHeight,WEBGL)
  analyzer = new p5.Amplitude()
  analyzer.setInput(mySong)
  skins = [duifje,kdb,kdb2,kdb3,kdb4,kdb5,kdb6,kdb7,kdb8,lup,lup2,pidg,pidg2,pidg3,zeb,zeb2]
  am_skins = skins.length

  for(let ii=0;ii<n;ii++){
    things.push(new Things(skins))
  }

}




function draw(){
  background(0)
  //pointLight(200,0 ,200,200,windowWidth/2,0,0)
  //pointLight(20,150 ,200,200,0,0,0)
  var volume = 0



  mySong.loop()
  analyzer.toggleNormalize(0)
  volume = analyzer.getLevel()

  volume = map(volume,0,5,10,80)


  for (var jj = 0; jj < n; jj++) {
    if(volume>72){
      things[jj].change_skin(skins)
      counter+=1
    }
    if((counter%10) ==1){
      teksten.push(new Teksten(movies))
    }
    for (var kk = 0; kk < teksten.length; kk++) {
      teksten[kk].display()
    }

    //things[jj].move()
    things[jj].display(volume)
  }


  /*rotateX(angle)
  rotateY(angle*0.3)
  //fill(frameCount%255,frameCount%255,50)
  noStroke()
  texture(skins[1])
  box(volume)

  angle+=0.01
*/
}
