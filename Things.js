
class Teksten{
  constructor(movies){
    this.rwsize = random(width/8,width/3)
    this.rhsize = random(height/7,height/3)
    this.x = random(width)
    this.y=random(height)
    this.z=random(height/2)
    let tekst = createGraphics(this.rwsize,this.rhsize)
    tekst.fill(color(random(255),random(255),random(255),random(255)))
    tekst.textAlign(CENTER)
    tekst.noStroke()
    tekst.textFont("Roboto Mono")
    tekst.textSize(random(5,25))
    let size = 1500
    let movie_number = round(random(size-1))
    let movie = movies[movie_number]
    let titel = movie.title
    tekst.text(titel,this.rwsize/2,this.rhsize/2)
    this.texture = tekst

  }

  display(){
    texture(this.texture)
    push()
    translate(this.x-width/2,this.y-height/2,this.z-height/2)
    plane(this.rwsize*2,this.rhsize*2)
    pop()
  }

}



class Things{
  constructor(skins){
    this.x = random(width)
    this.y = random(height)
    this.z_range = height/4
    this.z = random(this.z_range)
    this.size = random(1,5)
    this.stroke_color = color(random(255),random(255),random(255),random(255))
    this.stroke_weight = random(0,15)
    this.angle = random(0,0.2)
    this.skin_number = round(random(skins.length-1))
    this.skin = skins[this.skin_number]
    this.perlin = random(0.0001,0.001)
  }

  move(){

  }

  display(volume){
    push()
    translate(this.x-width/2,this.y-height/2,this.z-this.z_range/6)
    rotateX(this.angle)
    rotateY(this.angle*0.3)
    rotateZ(this.angle*0.2)
    stroke(this.stroke_color)
    texture(this.skin)
    strokeWeight(this.stroke_weight/(this.size*3))
    box(sqrt(volume)*20/this.size)
    this.angle+=0.005
    pop()

  }

  change_skin(skins){
    let random_number = round(random(skins.length-1))
    this.skin = skins[random_number]
  }


}




/*



class Things{
  constructor(skins){
    this.x = random(width)
    this.y = random(height)
    this.z_range = height/2
    this.z = random(this.z_range)
    this.offx = random(1000)
    this.offy = random(20,6000)
    this.offz = random(5000,100000)
    this.size = random(1,10)

    this.fill_color = color(random(255),random(255),random(255),random(255))
    this.stroke_color = color(random(255),random(255),random(255),random(255))
    this.stroke_weight = random(0,15)
    this.angle = random(0,0.2)
    this.skin_number = round(random(skins.length-1))
    this.skin = skins[this.skin_number]
    this.perlin = random(0.0001,0.001)
  }

  move(){
    this.offx+=this.perlin*2
    this.offy+=this.perlin*3
    this.offz+=this.perlin
    this.x = noise(this.offx)*width
    this.y = noise(this.offy)*height
    this.z = noise(this.offz)*this.z_range
  }

  display(volume){
    translate(this.x-width/2,this.y-height/2,this.z-this.z_range/2)
    rotateX(this.angle)
    rotateY(this.angle*0.3)
    stroke(this.stroke_color)
    texture(this.skin)
    strokeWeight(this.stroke_weight/(this.size*3))
    box(volume/this.size)
    this.angle+=0.01
  }

  change_skin(skins){
    let random_number = round(random(skins.length-1))
    this.skin = skins[random_number]
  }


}
*/
