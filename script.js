$(document).ready(function () {
  async function addCharacter() {
    let data = await fetch('data/character.json')
    let charList = await data.json()
    charList.characters.forEach(function(element) {
      $('.charList').append('<div class="charactertile" img=' + element.img + ' charname="' + element.name + '" attack="' + element.attack + '" agility="' + element.agility + '" energy="' + element.energy + '" damage="' + element.damage + '" charge="' + element.charge + '" dodgerate="' + element.dodgeRate + '" style="background-image: url(\'img/' + element.img + '.png\')"></div>')
    })
  }

  function setCharImgSize(element, dx, dy, x, y, extend = 0) {
    let h = element.height(), w = h / y * x
    element.css('width', w + 'px')
    element.css('background-size', (1541 / x * 100) + '%')
    element.css('background-position', 'left -' + (w / x * dx) + 'px top -' + (h / y * dy) + 'px')
  }

  function setDefaultChar() {
    $('.charimg1').css('background-image', 'url("img/s_' + $('.charlist1 > .charactertile:first-child').attr('img') + '.png")')
    setCharImgSize($('.charimg1'), 3, 12, 49, 88)
    $('.charattr1').empty().append('Name: ' + $('.charlist1 > .charactertile:first-child').attr('charname') + '<br>Attack: ' + $('.charlist1 > .charactertile:first-child').attr('attack') + '<br>Agility: ' + $('.charlist1 > .charactertile:first-child').attr('agility') + '<br>Burst Energy: ' + $('.charlist1 > .charactertile:first-child').attr('energy') + '<br>Burst Damage: ' + $('.charlist1 > .charactertile:first-child').attr('damage') + '<br>Charge Time: ' + $('.charlist1 > .charactertile:first-child').attr('charge') + 's')
    setCharImgSize($('.charattr1'), 3, 12, 49, 88)
    $('.charimg2').css('background-image', 'url("img/s_' + $('.charlist2 > .charactertile:first-child').attr('img') + '.png")')
    setCharImgSize($('.charimg2'), 3, 12, 49, 88)
    $('.charattr2').empty().append('Name: ' + $('.charlist2 > .charactertile:first-child').attr('charname') + '<br>Attack: ' + $('.charlist2 > .charactertile:first-child').attr('attack') + '<br>Agility: ' + $('.charlist2 > .charactertile:first-child').attr('agility') + '<br>Burst Energy: ' + $('.charlist2 > .charactertile:first-child').attr('energy') + '<br>Burst Damage: ' + $('.charlist2 > .charactertile:first-child').attr('damage') + '<br>Charge Time: ' + $('.charlist2 > .charactertile:first-child').attr('charge') + 's')
    setCharImgSize($('.charattr2'), 3, 12, 49, 88)
    $('.player1').css('background-image', 'url("img/s_' + $('.charlist1 > .charactertile:first-child').attr('img') + '.png")')
    setCharImgSize($('.player1'), 3, 12, 49, 88)
    $('.player2').css('background-image', 'url("img/s_' + $('.charlist2 > .charactertile:first-child').attr('img') + '.png")')
    setCharImgSize($('.player2'), 3, 12, 49, 88)
    characterAttribute1 = [$('.charlist1 > .charactertile:first-child').attr('charname'), $('.charlist1 > .charactertile:first-child').attr('attack'), $('.charlist1 > .charactertile:first-child').attr('agility'), $('.charlist1 > .charactertile:first-child').attr('energy'), $('.charlist1 > .charactertile:first-child').attr('damage'), $('.charlist1 > .charactertile:first-child').attr('charge'), $('.charlist1 > .charactertile:first-child').attr('dodgerate')]
    characterAttribute2 = [$('.charlist2 > .charactertile:first-child').attr('charname'), $('.charlist2 > .charactertile:first-child').attr('attack'), $('.charlist2 > .charactertile:first-child').attr('agility'), $('.charlist2 > .charactertile:first-child').attr('energy'), $('.charlist2 > .charactertile:first-child').attr('damage'), $('.charlist2 > .charactertile:first-child').attr('charge'), $('.charlist2 > .charactertile:first-child').attr('dodgerate')]
  }

  function addEvents() {
    $('.charlist1 > .charactertile').on('click', function() {
      $('.charimg1').css('background-image', 'url("img/s_' + $(this).attr('img') + '.png")')
      setCharImgSize($('.charimg1'), 3, 12, 49, 88)
      $('.charattr1').empty().append('Name: ' + $(this).attr('charname') + '<br>Attack: ' + $(this).attr('attack') + '<br>Agility: ' + $(this).attr('agility') + '<br>Burst Energy: ' + $(this).attr('energy') + '<br>Burst Damage: ' + $(this).attr('damage') + '<br>Charge Time: ' + $(this).attr('charge') + 's')
      setCharImgSize($('.charattr1'), 3, 12, 49, 88)
      $('.player1').css('background-image', 'url("img/s_' + $(this).attr('img') + '.png")')
      setCharImgSize($('.player1'), 3, 12, 49, 88)
      characterAttribute1 = [$(this).attr('charname'), $(this).attr('attack'), $(this).attr('agility'), $(this).attr('energy'), $(this).attr('damage'), $(this).attr('charge'), $(this).attr('dodgerate')]
    })

    $('.charlist2 > .charactertile').on('click', function() {
      if (players == 2) {
        $('.charimg2').css('background-image', 'url("img/s_' + $(this).attr('img') + '.png")')
        setCharImgSize($('.charimg2'), 3, 12, 49, 88)
        $('.charattr2').empty().append('Name: ' + $(this).attr('charname') + '<br>Attack: ' + $(this).attr('attack') + '<br>Agility: ' + $(this).attr('agility') + '<br>Burst Energy: ' + $(this).attr('energy') + '<br>Burst Damage: ' + $(this).attr('damage') + '<br>Charge Time: ' + $(this).attr('charge') + 's')
        setCharImgSize($('.charattr2'), 3, 12, 49, 88)
        $('.player2').css('background-image', 'url("img/s_' + $(this).attr('img') + '.png")')
        setCharImgSize($('.player2'), 3, 12, 49, 88)
        characterAttribute2 = [$(this).attr('charname'), $(this).attr('attack'), $(this).attr('agility'), $(this).attr('energy'), $(this).attr('damage'), $(this).attr('charge'), $(this).attr('dodgerate')]
      }
    })
  }

  function addImgAnimation(element, i = 0) {
    if (clear) {
      if (element.hasClass('charimg')) {
        setCharImgSize(element, 3 + 49 * i, 12, 49, 88)
        i = (i + 1) % 4
        setTimeout(function() {
          addImgAnimation(element, i)
        }, 240)
      } else if (element.hasClass('jumping')) {
        let dx = 452
        if (i >= 1 && i < 4) {
          dx = 537
        } else if (i < 9) {
          dx = 575
        } else if (i < 12) {
          dx = 613
        } else if (i == 12) {
          dx = 696
        }
        setCharImgSize(element, dx, 8, 43, 91)
        i += 1
        setTimeout(function() {
          addImgAnimation(element, i)
        }, 40)
      } else if (element.hasClass('attack')) {
        let dx = 3, wx = 43
        if (i >= 1 && i < 4) {
          dx = 52
          wx = 57
        } else if (i < 5) {
          dx = 117
        }
        setCharImgSize(element, dx, 123, wx, 91)
        i += 1
        setTimeout(function() {
          if (i < 5) {
            addImgAnimation(element, i)
          }
        }, 50)
      } else if (element.hasClass('stunned')) {
        let dx = 5, wx = 43
        if (i >= 1 && i < 2) {
          dx = 53
          wx = 47
        } else if (i < 7) {
          dx = 106
          wx = 49
        } else if (i < 10) {
          dx = 163
        }
        setCharImgSize(element, dx, 744, wx, 91)
        i += 1
        setTimeout(function() {
          if (i < 11) {
            addImgAnimation(element, i)
          }
        }, 50)
      } else if (element.hasClass('block')) {
        setCharImgSize(element, 1211, 7, 43, 91)
      } else if (element.hasClass('walking')) {
        let dx = 205
        if (i == 1) {
          dx = 252
        } else if (i == 2) {
          dx = 301
        } else if (i == 3) {
          dx = 351
        } else if (i == 4) {
          dx = 401
        }
        setCharImgSize(element, dx, 7, 43, 91)
      } else if (element.hasClass('player')) {
        let dx = 6
        if (i == 1) {
          dx = 55
        } else if (i == 2) {
          dx = 105
        } else {
          dx = 154
        }
        setCharImgSize(element, dx, 7, 43, 91)
      }
    }
  }

  function setDefaultState() {
    let docWidth = $(document).width(), oriWidth = $('.healthbar1').width()
    $('.healthtemp1').css('width', (oriWidth - 6) + 'px')
    $('.healthtemp2').css('width', (oriWidth - 6) + 'px')
    $('.health1').css('width', (oriWidth - 6) + 'px')
    $('.health2').css('width', (oriWidth - 6) + 'px')
    $('.player1').css('left', (docWidth / 100 * 10) + 'px')
    $('.player2').css('left', (docWidth / 100 * 90) + 'px')
    $('.player1').css('bottom', 0)
    $('.player2').css('bottom', 0)
    $('.player1').css('transform', 'matrix(1, 0, 0, 1, 0, 0)')
    $('.player2').css('transform', 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)')
  }

  function dropHealth(element) {
    let barWidth = element.width(), nowHealth = element.children().width()
    if (barWidth > nowHealth) {
      element.css('width', (barWidth - Math.max((barWidth - nowHealth) / 50, barWidth / 1000)) + 'px')
    }
    setTimeout(function() {
      if (clear) {
        dropHealth(element)
      }
    }, 10)
  }

  function hslToRgb(hue, saturation, lightness) {
    const k =function(n) {
      return (n + hue / 30) % 12
    }
    const a = saturation * Math.min(lightness, 1 - lightness)
    const f = function(n) {
      return lightness - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    }

    return [255 * f(0), 255 * f(8), 255 * f(4)]
  }

  function setEnergy(element, current, addition, maximum = 1) {
    element.attr('energy', Math.max(0, Math.min(current + addition, maximum)))
    let cur = parseFloat(element.attr('energy'))
    element.css('width', (($('.energy1').width() - 6) / maximum * cur) + 'px')
    if (cur == maximum) {
      element.addClass('fullenergy')
    } else {
      element.removeClass('fullenergy')
      element.css('background', 'rgb(67, 102, 215)')
    }
  }

  function chargeEnergy(element, setDefault = false) {
    if (!setDefault) {
      if (element.hasClass('player1')) {
        setEnergy($('.energybar1'), parseFloat($('.energybar1').attr('energy')), 5, characterAttribute1[3])
      } else if (element.hasClass('player2')){
        setEnergy($('.energybar2'), parseFloat($('.energybar2').attr('energy')), 5, characterAttribute2[3])
      }
    } else {
      $('.energybar1').removeClass('fullenergy')
      $('.energybar1').css('background', 'rgb(67, 102, 215)')
      $('.energybar2').removeClass('fullenergy')
      $('.energybar2').css('background', 'rgb(67, 102, 215)')
      setEnergy($('.energybar1'), 0, 0)
      setEnergy($('.energybar2'), 0, 0)
    }
  }

  function chargeUlt(element, energy, chargeTime) {
    energy.removeClass('fullenergy')
    energy.css('background', 'rgb(67, 102, 215)')
    setEnergy(energy, 0, 0)
    element.addClass('charging')
    setTimeout(function() {
      element.removeClass('charging')
    }, chargeTime * 1000)
  }

  function energyColorChange(element, i = 0) {
    if (element.hasClass('fullenergy')) {
      let color = hslToRgb(i, 0.86, 0.57)
      element.css('background-color', 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] +')')
      i = (i + 3) % 360
    } else {
      i = 0
    }
    setTimeout(function() {
      if (clear) {
        energyColorChange(element, i)
      }
    }, 10);
  }

  async function startPage() {
    await addCharacter()
    setDefaultChar()
    addEvents()
    clear = true
    addImgAnimation($('.charimg1'))
    addImgAnimation($('.charimg2'))
    setDefaultState()
    dropHealth($('.healthtemp1'))
    dropHealth($('.healthtemp2'))
    chargeEnergy($('.player1'), true)
    chargeEnergy($('.player2'), true)
  }

  function setComputer() {
    let charListRandom = $('.charlist2 > .charactertile')
    let computerChoseCharNum = Math.floor(Math.random() * charListRandom.length)
    let computerChoseChar = charListRandom[computerChoseCharNum]
    $('.charimg2').css('background-image', 'url("img/s_' + $(computerChoseChar).attr('img') + '.png")')
    setCharImgSize($('.charimg2'), 3, 12, 49, 88)
    $('.charattr2').empty().append('Name: ' + $(computerChoseChar).attr('charname') + '<br>Attack: ' + $(computerChoseChar).attr('attack') + '<br>Agility: ' + $(computerChoseChar).attr('agility') + '<br>Burst Energy: ' + $(computerChoseChar).attr('energy') + '<br>Burst Damage: ' + $(computerChoseChar).attr('damage') + '<br>Charge Time: ' + $(computerChoseChar).attr('charge') + 's')
    setCharImgSize($('.charattr2'), 3, 12, 49, 88)
    $('.player2').css('background-image', 'url("img/s_' + $(computerChoseChar).attr('img') + '.png")')
    setCharImgSize($('.player2'), 3, 12, 49, 88)
    characterAttribute2 = [$(computerChoseChar).attr('charname'), $(computerChoseChar).attr('attack'), $(computerChoseChar).attr('agility'), $(computerChoseChar).attr('energy'), $(computerChoseChar).attr('damage'), $(computerChoseChar).attr('charge'), $(computerChoseChar).attr('dodgerate')]
  }
  function clearBlock() {
    setTimeout(function() {
      $('.player2').removeClass('block')
    }, 500)
  }

  function startComputer() {
    let pos1Text = $('.player1').css('left')
    let pos1 = parseFloat(pos1Text.substring(0, pos1Text.length - 2))
    let pos2Text = $('.player2').css('left')
    let pos2 = parseFloat(pos2Text.substring(0, pos2Text.length - 2))
    let distance = pos2 - pos1

    if ($('.energybar2').attr('energy') >= characterAttribute2[3] && !($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping')) && !($('.player2').hasClass('charging'))) {
      chargeUlt($('.player2'), $('.energybar2'), characterAttribute2[5])
    }

    if (distance >= $('.player2').width() * 2) {
      if (!($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping')) && !($('.player2').hasClass('charging'))) {
        moveLeft($('.player2'), $('.player1'))
      }
    } else if (distance <= $('.player2').width() * -2) {
      if (!($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping')) && !($('.player2').hasClass('charging'))) {
        moveRight($('.player2'), $('.player1'))
      }
    } else {
      let dodge = Math.random()
      if (dodge < characterAttribute2[6]) {
        if (dodge < characterAttribute2[6] / 2) {
          blockAttack($('.player2'))
          clearBlock()
        } else {
          if (!($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping')) && !($('.player2').hasClass('charging'))) {
            $('.player2').removeClass('walking')
            charJump($('.player2'))
          }
        }
      }

      let attack = Math.random()
      if (attack <= 0.8) {
        if (distance >= 0) {
          $('.player2').css('transform', 'rotateY(180deg)')
        } else {
          $('.player2').css('transform', 'rotateY(0deg)')
        }
        if (!($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping'))) {
          attackFront($('.player2'), $('.player1'), characterAttribute2[1], characterAttribute2[4])
        }
      }
    }

    setTimeout(function() {
      if (clear) {
        startComputer()
      }
    }, 50)
  }

  function charIdle(element, i = 0) {
    if (!(element.hasClass('stunned')) && !(element.hasClass('walking')) && !(element.hasClass('attack')) && !(element.hasClass('jumping')) && !(element.hasClass('charging'))) {
      addImgAnimation(element, i)
      i = (i + 1) % 4
    } else if (element.hasClass('walking')) {
      addImgAnimation(element, i)
      i = (i + 1) % 5
    } else {
      i = 0
    }
    setTimeout(function() {
      if (clear) {
        charIdle(element, i)
      }
    }, 200)
  }
  
  let characterAttribute1 = new Array(7), characterAttribute2 = new Array(7)
  let players = 0, gameStart = false, health1 = 200, health2 = 200, clear = true
  startPage()

  function restartGame() {
    characterAttribute1 = new Array(7)
    characterAttribute2 = new Array(7)
    players = 0
    gameStart = false
    health1 = 200
    health2 = 200
    startPage()
  }

  $('.startbutton').on('click', function() {
    $('.homepage').addClass('now')
    $('.charpage').removeClass('now')
    setDefaultChar()
    gameStart = false
    if ($(this).hasClass('pve')) {
      players = 1
      setComputer()
      startComputer()
    } else {
      players = 2
    }
  })

  $('.charstart').on('click', function() {
    $('.charpage').addClass('now')
    $('.gamepage').removeClass('now')
    gameStart = true
    charIdle($('.player1'))
    charIdle($('.player2'))
    energyColorChange($('.energybar1'))
    energyColorChange($('.energybar2'))
  })

  $('.replaybutton').on('click', function() {
    $('.endpage').addClass('now')
    $('.homepage').removeClass('now')
    gameStart = false
    restartGame()
  })

  function endGame(element) {
    $('.gamepage').addClass('now')
    $('.endpage').removeClass('now')
    if (element.hasClass('player1')) {
      $('.winnertext').empty().append('Player 2 Wins !!!')
    } else {
      $('.winnertext').empty().append('Player 1 Wins !!!')
    }
    gameStart = false
    clear = false
  }

  function moveRight(element, enemy) {
    if (gameStart && !(element.hasClass('block')) && !(element.hasClass('stunned')) && !(element.hasClass('charging')) && !(element.hasClass('attack'))) {
      if (!(element.hasClass('jumping'))) {
        element.addClass('walking')
      } else {
        element.removeClass('walking')
      }
      let pos1Text = element.css('left')
      let pos1 = parseFloat(pos1Text.substring(0, pos1Text.length - 2))
      let pos2Text = enemy.css('left')
      let pos2 = parseFloat(pos2Text.substring(0, pos2Text.length - 2))
      element.css('transform', 'rotateY(0deg)')
      element.css('left', (pos1 + parseFloat(characterAttribute1[2]) * $(document).width() / 500) + 'px')
      if (pos1 >= $(document).width() - element.width() / 40) {
        element.css('left', ($(document).width() - element.width() / 40) + 'px')
      }
      if (!((element.hasClass('jumping')) || (enemy.hasClass('jumping'))) && pos1 < pos2 && pos2 - pos1 <= element.width() * 1.5) {
        element.css('left', (pos2 - element.width()) + 'px')
      }
    }
  }

  function moveLeft(element, enemy) {
    if (gameStart && !(element.hasClass('block')) && !(element.hasClass('stunned')) && !(element.hasClass('charging')) && !(element.hasClass('attack'))) {
      if (!(element.hasClass('jumping'))) {
        element.addClass('walking')
      } else {
        element.removeClass('walking')
      }
      let pos1Text = element.css('left')
      let pos1 = parseFloat(pos1Text.substring(0, pos1Text.length - 2))
      let pos2Text = enemy.css('left')
      let pos2 = parseFloat(pos2Text.substring(0, pos2Text.length - 2))
      element.css('transform', 'rotateY(180deg)')
      element.css('left', (pos1 - parseFloat(characterAttribute1[2]) * $(document).width() / 500) + 'px')
      if (pos1 <= $(document).width() / 40) {
        element.css('left', ($(document).width() / 40) + 'px')
      }
      if (!((element.hasClass('jumping')) || (enemy.hasClass('jumping'))) && pos1 > pos2 && pos1 - pos2 <= element.width() * 1.5) {
        element.css('left', (pos2 + element.width()) + 'px')
      }
    }
  }

  function blockAttack(element) {
    if (gameStart && !(element.hasClass('stunned')) && !(element.hasClass('jumping')) && !(element.hasClass('charging')) && !(element.hasClass('attack'))) {
      element.addClass('block')
    }
  }

  function nextJumpPos(element, nowHeight, k, i, dy) {
    element.css('bottom', (nowHeight + dy * i + 1 / 2 * (-dy * 2 / k) * Math.pow(i, 2)) + 'px')
    element.css('bottom')
    if (i < k) {
      setTimeout(function() {
        nextJumpPos(element, nowHeight, k, i + 1, dy)
      }, 12)
    } else {
      element.css('bottom', '')
      element.removeClass('jumping')
    }
  }

  function charJump(element) {
    element.addClass('jumping')
    addImgAnimation(element)
    let k = 50
    let nowHeightText = element.css('bottom')
    let nowHeight = parseFloat(nowHeightText.substring(0, nowHeightText.length - 2)), dy = 2 * $(document).width() / 100
    nextJumpPos(element, nowHeight, k, 0, dy)
  }

  function applyStun(element) {
    element.addClass('stunned')
    addImgAnimation(element)
    setTimeout(function() {
      element.removeClass('stunned')
    }, 500)
  }

  function damageChar(element, attack) {
    let oriWidth = $('.healthbar1').width()
    if (element.hasClass('player2')) {
      if (element.hasClass('block')) {
        health2 -= Math.ceil(attack * 0.3)
      } else {
        applyStun(element)
        setEnergy($('.energybar2'), parseFloat($('.energybar2').attr('energy')), -2, characterAttribute2[3])
        health2 -= attack
      }
      $('.health2').css('width', ((oriWidth - 6) / 200 * health2) + 'px')
      if (health2 <= 0) {
        endGame(element)
      }
    } else if (element.hasClass('player1')) {
      if (element.hasClass('block')) {
        health1 -= Math.ceil(attack * 0.3)
      } else {
        applyStun(element)
        setEnergy($('.energybar1'), parseFloat($('.energybar1').attr('energy')), -2, characterAttribute1[3])
        health1 -= attack
      }
      $('.health1').css('width', ((oriWidth - 6) / 200 * health1) + 'px')
      if (health1 <= 0) {
        endGame(element)
      }
    }
  }

  function attackFront(element, enemy, attack, multiplier) {
    let ult = element.hasClass('charging')
    if (ult) {
      attack *= 1 + (multiplier / 100)
    }
    element.addClass('attack')
    addImgAnimation(element)
    let distance = parseFloat(element.css('left')) - parseFloat(enemy.css('left')), face = element.css('transform')
    if (face == 'matrix(1, 0, 0, 1, 0, 0)' && !(enemy.hasClass('jumping')) && distance < 0 && distance >= -element.width() * 2) {
      enemy.css('transform', 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)')
      damageChar(enemy, attack)
      if (!ult) {
        chargeEnergy(element)
      }
    } else if (face == 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)' && !(enemy.hasClass('jumping')) && distance > 0 && distance <= element.width() * 2){
      enemy.css('transform', 'matrix(1, 0, 0, 1, 0, 0)')
      damageChar(enemy, attack)
      if (!ult) {
        chargeEnergy(element)
      }
    }
    setTimeout(function() {
      element.removeClass('attack')
    }, ult ? 50 : 500)
  }
    
  $(document).on('keydown', function(event) {
    if (gameStart) {
      if (event.code == 'KeyW' && !($('.player1').hasClass('block')) && !($('.player1').hasClass('stunned')) && !($('.player1').hasClass('attack')) && !($('.player1').hasClass('jumping')) && !($('.player1').hasClass('charging'))) {
        charJump($('.player1'))
      }
      if (players == 2 && event.code == 'Numpad8' && !($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping')) && !($('.player2').hasClass('charging'))) {
        charJump($('.player2'))
      }
      if (event.code == 'KeyE' && !($('.player1').hasClass('block')) && !($('.player1').hasClass('stunned')) && !($('.player1').hasClass('attack')) && !($('.player1').hasClass('jumping'))) {
        attackFront($('.player1'), $('.player2'), characterAttribute1[1], characterAttribute1[4])
      }
      if (players == 2 && event.code == 'Numpad9' && !($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping'))) {
        attackFront($('.player2'), $('.player1'), characterAttribute2[1], characterAttribute2[4])
      }
      if (event.code == 'KeyQ' && $('.energybar1').attr('energy') >= characterAttribute1[3] && !($('.player1').hasClass('block')) && !($('.player1').hasClass('stunned')) && !($('.player1').hasClass('attack')) && !($('.player1').hasClass('jumping')) && !($('.player1').hasClass('charging'))) {
        chargeUlt($('.player1'), $('.energybar1'), characterAttribute1[5])
      }
      if (players == 2 && event.code == 'Numpad7' && $('.energybar2').attr('energy') >= characterAttribute2[3] && !($('.player2').hasClass('block')) && !($('.player2').hasClass('stunned')) && !($('.player2').hasClass('attack')) && !($('.player2').hasClass('jumping')) && !($('.player2').hasClass('charging'))) {
        chargeUlt($('.player2'), $('.energybar2'), characterAttribute2[5])
      }
    }
  })

  $(document).on('keyup', function(event) {
    if (event.code == 'KeyD' || event.code == 'KeyA') {
      $('.player1').removeClass('walking')
    } else if (players == 2 && event.code == 'Numpad6' || event.code == 'Numpad4') {
      $('.player2').removeClass('walking')
    } else if (event.code == 'KeyS') {
      $('.player1').removeClass('block')
    } else if (players == 2 && event.code == 'Numpad5') {
      $('.player2').removeClass('block')
    }
  })

  function KeyboardController(keys, repeat) {
    let timers = {}

    $(document).on('keydown', function(event) {
      let key = event.code
      if (!(key in keys)) {
        return true
      }
      if (!(key in timers)) {
        timers[key] = null
        keys[key]()
        if (repeat !== 0) {
          timers[key] = setInterval(keys[key], repeat)
        }
      }
      return false
    })

    $(document).on('keyup', function(event) {
      let key = event.code
      if (key in timers) {
        if (timers[key] !== null) {
          clearInterval(timers[key])
        }
        delete timers[key]
      }
    })

    window.onblur = function() {
      for (let key in timers) {
        if (timers[key] !== null) {
          clearInterval(timers[key])
        }
      }
      timers = {}
    }
  }

  KeyboardController({
    'KeyD': function() {
      moveRight($('.player1'), $('.player2'))
    },
    'KeyA': function() {
      moveLeft($('.player1'), $('.player2'))
    },
    'KeyS': function() {
      blockAttack($('.player1'))
    },
    'Numpad6': function() {
      if (players == 2) {
        moveRight($('.player2'), $('.player1'))
      }
    },
    'Numpad4': function() {
      if (players == 2) {
        moveLeft($('.player2'), $('.player1'))
      }
    },
    'Numpad5': function() {
      if (players == 2) {
        blockAttack($('.player2'))
      }
    }
  }, 20)
})