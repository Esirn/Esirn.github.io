/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'https://www.bilibili.com/video/BV1RJ411J7rR/',
      img_link: 'https://tse1-mm.cn.bing.net/th/id/OIP.OX78EkuLDyuf7ubrwwKCqAHaEK?w=298&h=167&c=7&o=5&pid=1.7',
      code_link: 'https://nomada.studio/',
      title: '【Esirn】《GRIS》',
      core_tech: '《GRIS》',
      description: 'GRIS是一款不会带来失败沮丧的平台跳跃类的独立游戏。游戏通篇无文字描述，旨在以图像表达故事。其独特的水彩艺术风格画面在视觉上有很大震撼力。'
    }, {
      demo_link: 'https://www.bilibili.com/video/BV1LJ41177hV/',
      img_link: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/3b/33/6b/3b336b00-2743-4f78-c14b-f233147895ab/AppIcon-0-1x_U007emarketing-0-0-85-220-10.png/246x0w.png',
      code_link: 'https://apps.apple.com/cn/app/cat-bird/id1213493742',
      title: '【Esirn】《Cat Bird》',
      core_tech: '《Cat Bird》',
      description: 'A cute-tastic journey across worlds.'
    }, {
      demo_link: 'https://www.bilibili.com/video/BV1Ex411C7td/',
      img_link: 'https://media.st.dl.pinyuncloud.com/steam/apps/529110/header.jpg?t=1568871341',
      code_link: 'http://www.stevenharmongames.com/',
      title: '【Esirn】《Awkward Dimensions Redux》',
      core_tech: '《Awkward Dimensions Redux》',
      description: 'They may be awkward dimensions, but they\'re my dreams...'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>名称：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">官方网站</a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
