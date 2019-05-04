class Obstacle {
  constructor(ctx, canvasDom, playerH) { //como necesito más de 4 argumentos, le paso el objeto app entero
    this.ctx = ctx
    this.width = 138
    this.speed = {
      x: 5,
      y: 10
    }
    this.canvasDom = {
      w: canvasDom.w,
      h: canvasDom.h
    }
    this.gap = playerH * 2
    this.top = new Image()
    this.top.src = 'images/obstacle_top.png'
    this.top.width = this.width
    this.top.height = this.randomHeight()

    this.bottom = new Image()
    this.bottom.src = 'images/obstacle_bottom.png'
    this.bottom.width = this.width
    this.bottom.height = this.calculateBottomHeight()

    this.position = {
      x: this.canvasDom.w,
      y: 0
    }
  }
  draw() {


    this.drawTopObstacle()
    this.drawBottomObstacle()


    console.log('position y', this.position.y)
  }
  move() {
    this.position.x -= this.speed.x;
  }
  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }
  drawTopObstacle() {
    //this.top.height = this.randomHeight()
    this.ctx.drawImage(this.top, this.position.x, this.position.y, this.top.width, this.top.height)
  }
  drawBottomObstacle() {
    // this.bottom.height = this.calculateBottomHeight()
    this.ctx.drawImage(this.bottom, this.position.x, this.canvasDom.h - this.bottom.height, this.bottom.width, this.bottom.height)
  }
  randomHeight() {
    return this.randomNumber(100, this.canvasDom.h - 100)
  }
  calculateBottomHeight() {
    return this.canvasDom.h - this.top.height - this.gap
  }
}