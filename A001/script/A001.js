function slide(){
    var pos=0;        // 현재 슬라이드의 위치
    function play(){   
                     // 0+1 ==> 1%3===>1 
                     // 1+1 ==> 2%3===>2 
                     // 2+1 ==> 3%3===>0 
    pos=(pos+1)%3   // 0,1,2 들어감
    $('.slide ul')  // 슬라이드 대상
    .animate({      // 아래에서 위로 애니메이션 
       marginTop: -300*pos+"px"  //-0px, -300px, -600px 들어감
    }, 500)     // 0.5초간 애니메이션 진행
  }
    setInterval(play, 2000)  //2초마다 슬라이드 애니메이션
}


function layerToggle(){
    $('.layer').toggle()    // 레이어팝업이
                            //열린상태 ==> 닫힌상태
                            //닫힌상태 ==> 열린상태  토글
}

function menu(){
    $('ul', this).stop().slideToggle(300)
    // .gnb 클래스에 마우스가 진입하거나 벗어나갔을 때,
    // ul과 this의 상태가 열려 있으면 닫고
    // 닫혀있으면 연다.
    // 이때 애니메이션이 진행중일때 이벤트가 발동되면 속성값을 고정시키고,
    // 현재 속성에서 그대로 진행된다.
}

$(document)
.on('ready', slide)
.on('click', '.notice li:eq(0), .layer__close', layerToggle)
//공지사항 첫번째 게시물을 클릭하면 팝업이 열리고,
// 레이어 팝업에 있는 닫기버튼을 누르면 팝업이 사라진다.
.on('mouseenter mouseleave', '.gnb>ul>li', menu)