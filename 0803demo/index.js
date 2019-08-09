
// (function () {
//   // 准备资源
//   const context = document.getElementById('content').getContext('2d')
//   const heroImg = new Image()
//   // 画图
//   heroImg.onload = function () {
//     var imgPos = {
//       x: 0,
//       y: 0,
//       width: 32,
//       height: 32,
//     }
//     var rect = {
//       x: 0,
//       y: 0,
//       width: 40,
//       height: 40,
//     }
//     context.drawImage(
//       heroImg,
//       imgPos.x,
//       imgPos.y,
//       imgPos.width,
//       imgPos.height,
//       rect.x,
//       rect.y,
//       rect.width,
//       rect.height,
//     )
//   }
//   heroImg.src = './hero.png'
// })()


// 重构上面的代码
(function () {
  // developer a
  function prepare() {
    const imgTask = (img, src) => {
      return new Promise(function (resolve, reject) {
        img.onload = resolve;
        img.onerror = reject;
        img.src = src
      })
    }
    const context = document.getElementById('content').getContext('2d')
    const allSpriteImg = new Image()
    const heroImg = new Image()

    const allresourceTask = Promise.all([
      imgTask(heroImg, './hero.png'),
      imgTask(allSpriteImg, './all.jpg')
    ])

    let loaded = false
    return {
      /* 
      * @param {functon} [callback] - 当准备好了之后要调用的回调函数
      */ 
      getResource(callback) {
        // if (loaded) {
        //   callback && callback(context, heroImg)
        //   return
        // }
        allresourceTask.then(function(){
          callback && callback(context, heroImg, allSpriteImg)
        })
        // heroImg.onload = function () {
        //   callback && callback(context, heroImg)
        //   loaded = true
        // }
        // heroImg.src = './hero.png'
      }
    }
  }
  // developer b
  function drawHero (context, heroImg, allSpriteImg) {
    var draw = function () {
      context.drawImage(
        this.img,
        this.imgPos.x,
        this.imgPos.y,
        this.imgPos.width,
        this.imgPos.height,
        this.rect.x,
        this.rect.y,
        this.rect.width,
        this.rect.height,
      )
    };
    var keyDown = function () {
      const _this = this
      document.addEventListener('keydown', function(e) { //38 39 40 37
        context.clearRect(_this.rect.x, _this.rect.y, _this.rect.width, _this.rect.height)
        const maxW = 40 * Math.floor(500 / 40) - 40
        const maxH = 40 * Math.floor(300 / 40) - 40
        console.log(maxW, maxH)
        switch (e.keyCode) {
          case 38:
            _this.rect.y <= 0 ? _this.rect.y = 0 :
              _this.rect.y === monster.rect.y + monster.rect.height && _this.rect.x === monster.rect.x ? _this.rect.y = _this.rect.y :
                _this.rect.y -= 40
            break;
          case 39:
            _this.rect.x >= maxW ? _this.rect.x = maxW :
              _this.rect.x + _this.rect.width === monster.rect.x && _this.rect.y === monster.rect.y ? _this.rect.x = _this.rect.x :
                _this.rect.x += 40
            break;
          case 40:
            _this.rect.y >= maxH ? _this.rect.y = maxH :
              _this.rect.x === monster.rect.x && _this.rect.y === monster.rect.y - monster.rect.height ? _this.rect.y = _this.rect.y :
                _this.rect.y += 40
            break;
          case 37:
            _this.rect.x <= 0 ? _this.rect.x = 0 :
              _this.rect.x - _this.rect.width === monster.rect.x && _this.rect.y === monster.rect.y ? _this.rect.x = _this.rect.x :
                _this.rect.x -= 40
            break;
        }
        hero.draw()
      });
    };
    var hero = {
      img: heroImg,
      context: context,
      imgPos: {
        x: 0,
        y: 0,
        width: 32,
        height: 32,
      },
      rect: {
        x: 0,
        y: 0,
        width: 40,
        height: 40,
      },
      draw: draw,
      keyDown: keyDown
    };
    var monster = {
      img: allSpriteImg,
      context: context,
      imgPos: {
        x: 858,
        y: 529,
        width: 32,
        height: 32,
      },
      rect: {
        x: 120,
        y: 120,
        width: 40,
        height: 40,
      },
      draw: draw,
      keyDown: keyDown
    };
    hero.draw()
    monster.draw();
    hero.keyDown()
  };
  var resourceManage = prepare();
  resourceManage.getResource(function (context, heroImg, allSpriteImg) {
    drawHero(context, heroImg, allSpriteImg);
  }) 
})();

