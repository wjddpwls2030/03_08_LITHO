;(function($){
    var litho = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        headerFn:function(){
            

            

                    //메인메뉴, 서브메뉴 객체와 배열
                    var lithoNav = {
                        sub1:[
                            {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                            {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                            {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                            {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                            
                        ],
                        sub2:[
                            {sub:"About",subsub:["About me","About us","Our story","Who we are"]},
                            {sub:"Services",subsub:["Our services","What we offer","Our process"]},
                            {sub:"Contact",subsub:["Contact simple","Contact classic","Contact modern"]},
                            {sub:"Additional pages",subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}

                            
                        ],
                        sub3:[
                            {sub:"Portfolio classic",subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                            {sub:"Portfolio boxed",subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                            {sub:"Portfolio colorful",subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                            {sub:"Portfolio bordered",subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                            {sub:"Portfolio overlay",subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                            {sub:"Portfolio switch image",subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                            {sub:"Portfolio other",subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                            {sub:"Single project page",subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                            ],
                        sub4:[
                            {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                            {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                            {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                            {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                        ],
                        sub5:[
                            {
                                sub:"Header and menu",
                                subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                                subsubsub:{
                                    subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu half"],
                                    subsubsub2:["Left menu classic","Left menu modern"],
                                    subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                                    subsubsub4:["Classic","Modern","Full screen"]
                                }
                            },
                            {
                                sub:"Footer",
                                subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                            },
                            {
                                sub:"Page title",
                                subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                            },
                            {
                                sub:"Modal popup",
                                subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                            },
                            {
                                sub:"Icon packs",
                                subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                            },
                            {sub:"Animations"}
                        ],
                        sub6:[
                            {sub:"Blog grid"},
                            {sub:"Blog masonry"},
                            {sub:"Blog classic"},
                            {sub:"Blog simple"},
                            {sub:"Blog side image"},
                            {sub:"Blog metro"},
                            {sub:"Blog overlay image"},
                            {sub:"Blog modern"},
                            {sub:"Blog clean"},
                            {sub:"Blog widget"},
                            {sub:"Blog standard",},
                            {sub:"Post layout",subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                            {sub:"Post types",subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
                        ],
                        sub7:[
                            {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                            {sub:["menu-banner-01.jpg"]},
                            {sub:["menu-banner-02.jpg"]}
                        ]

                    }
                    //서브1 코딩
                    var $col = $('#nav .col');
                    var txt = '';

                        //서브1
                        for(var i in lithoNav.sub1){
                        for(var j in lithoNav.sub1[i].sub){
                            if(j==0){
                            txt =  "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>";
                            }
                            else{
                            txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>"; 
                            }
                        }
                        $col.eq(i).html( txt );
                        txt ='';
                        }


                       //서브2
                        var $subBtn = $('.sub2 .sub-btn');  
                        var $subsubUl = $('.sub2 .subsub'); 

                        //서브2-서브메뉴
                        for(var i in lithoNav.sub2){ 
                        txt = lithoNav.sub2[i].sub;
                        $subBtn.eq(i).html(txt);
                        txt = '';
                        }


                        //서브2-서브서브메뉴
                        
                        for(var i in lithoNav.sub2){
                        for(var j in lithoNav.sub2[i].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>"
                        }
                        $subsubUl.eq(i).html(txt);
                        txt = "";  
                        }

                        //서브3 
                        var $sub3Btn =  $('.sub3 .sub-btn');
                        var $sub3Sub =  $('.sub3 .subsub'); 
                        var imsi = '';

                            //서브3 > 서브메뉴
                            for(var i in lithoNav.sub3){
                            txt = lithoNav.sub3[i].sub; 
                            imsi = $sub3Btn.eq(i).html(); 
                            txt += imsi;
                            $sub3Btn.eq(i).html( txt );
                            txt = '';  
                            }

                            //서브3 > 서브서브메뉴 8개
                            for(var i in lithoNav.sub3){ 
                            for(var j in lithoNav.sub3[i].subsub){ 
                                txt += "<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
                            }
                            $sub3Sub.eq(i).html(txt);
                            txt = '';
                            }
                            

                        //서브4
                        var $sub4Menu = $('.sub4 .sub-menu');

                            for(var i in lithoNav.sub4){
                            for(var j in lithoNav.sub4[i].sub){
                                if(j==0){
                                txt += "<dt>" + lithoNav.sub4[i].sub[j] + "</dt>";
                                }
                                else{
                                txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>";
                                }
                            }
                            $sub4Menu.eq(i).html( txt );
                            txt ='';
                            }
                        
                        //서브5
                        var $sub5Btn = $('.sub5 .sub-btn');    
                        var $sub5Menu = $('.sub5 .sub-menu');    

                            for(idx in lithoNav.sub5){
                                txt = lithoNav.sub5[idx].sub; 
                                imsi = $sub5Btn.eq(idx).html(); 
                                txt += imsi;
                                $sub5Btn.eq(idx).html(txt);
                                txt = '';
      
                                if(idx==0){
                                 

                                    for(i in lithoNav.sub5[idx].subsub){
                                        if(i < 9){ 
                                          txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                                        }
                                        else{
                                          txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"<i class='fas fa-angle-right'></i></a></li>"; //서브서브 가져오기
                                        }
                                        
                                      }                   
                                      $sub5Menu.eq(idx).html(txt);
                                      txt = '';
                                    
                                    //4뎁스
                                    //서브서브서브메뉴 10번째
                                    txt = $('.sub5-sub1>div>ul>li').eq(9).html();   
                                    txt += "<div class='sub-sub-sub sub5-sub1-sub10'>";
                                    txt += "    <div class='sub-sub-sub-gap'>";
                                    txt += "        <ul>";
                                    txt += "            <li><a href='#'>Hamburger menu</a></li>";
                                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                                    txt += "            <li><a href='#'>Hamburger menu half</a></li>";
                                    txt += "        </ul>";
                                    txt += "    </div>";
                                    txt += "</div>";
                                    //10번 째에 서브서브서브 추가하기
                                    $('.sub5-sub1>div>ul>li').eq(9).html(txt);
                                    txt = '';
                                    //서브서브서브메뉴 11번째
                                    txt = $('.sub5-sub1>div>ul>li').eq(10).html(); 
                                    txt += "<div class='sub-sub-sub sub5-sub1-sub11'>";
                                    txt += "    <div class='sub-sub-sub-gap'>";
                                    txt += "        <ul>";
                                    txt += "            <li><a href='#'>Left menu classic</a></li>";
                                    txt += "            <li><a href='#'>Left menu modern</a></li>";
                                    txt += "        </ul>";
                                    txt += "    </div>";
                                    txt += "</div>";
                                    //11번 째에 서브서브서브 추가하기
                                    $('.sub5-sub1>div>ul>li').eq(10).html(txt);
                                    txt = '';
                                    //서브서브서브메뉴 12번째
                                    txt = $('.sub5-sub1>div>ul>li').eq(11).html(); 
                                    txt += "<div class='sub-sub-sub sub5-sub1-sub12'>";
                                    txt += "    <div class='sub-sub-sub-gap'>";
                                    txt += "        <ul>";
                                    txt += "            <li><a href='#'>Always fixed</a></li>";
                                    txt += "            <li><a href='#'>Disable fixed</a></li>";
                                    txt += "            <li><a href='#'>Reverse scroll</a></li>";
                                    txt += "            <li><a href='#'>Responsive sticky</a></li>";
                                    txt += "        </ul>";
                                    txt += "    </div>";
                                    txt += "</div>";
                                    //12번 째에 서브서브서브 추가하기
                                    $('.sub5-sub1>div>ul>li').eq(11).html(txt);
                                    txt = '';
                                    //서브서브서브메뉴 13번째
                                    txt = $('.sub5-sub1>div>ul>li').eq(12).html(); 
                                    txt += "<div class='sub-sub-sub sub5-sub1-sub13'>";
                                    txt += "    <div class='sub-sub-sub-gap'>";
                                    txt += "        <ul>";
                                    txt += "            <li><a href='#'>Classic</a></li>";
                                    txt += "            <li><a href='#'>Modern</a></li>";
                                    txt += "            <li><a href='#'>Full screen</a></li>";
                                    txt += "        </ul>";
                                    txt += "    </div>";
                                    txt += "</div>";
                                    //13번 째에 서브서브서브 추가하기
                                    $('.sub5-sub1>div>ul>li').eq(12).html(txt);
                                    txt = '';
                                    //sub5-sub1 끝
                                }
                                else if(idx>0 && idx<5){  //1 ~ 4
                                    for(i in lithoNav.sub5[idx].subsub){
                                      txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                                    }
                                    $sub5Menu.eq(idx).html(txt);
                                    txt = '';    
                                  }
        
                                }
                            //sub6
                            var $sub6Btn = $('.sub6 .sub-btn'); 
                            var $ul12 = $('.sub6 .sub6-sub12 ul'); 
                            var $ul13 = $('.sub6 .sub6-sub13 ul');   
                                //서브6
                                for(i in lithoNav.sub6){
                                  if(i<11){            
                                    $sub6Btn.eq(i).html(lithoNav.sub6[i].sub);
                                  }
                                  else{
                                    $sub6Btn.eq(i).html(lithoNav.sub6[i].sub + "<i class='fas fa-angle-right'></i>");
                                  }
                                }
                                //서브6-서브서브서브
                                for (i in  lithoNav.sub6[11].subsub){
                                  txt +="<li><a href='#'>" + lithoNav.sub6[11].subsub[i] + "</a></li>";
                                }
                                $ul12.html(txt);
                                txt = '';
                                for (i in  lithoNav.sub6[12].subsub){
                                  txt +="<li><a href='#'>" + lithoNav.sub6[12].subsub[i] + "</a></li>";
                                }
                                $ul13.html(txt);
                                txt = '';

                            //서브7
                            var $sub7Dl1  = $('.sub7 dl').eq(0);
                            var $sub7Img = $('.sub7 dl img');

                                for(i in lithoNav.sub7[0].sub){

                                  if(i==0 || i==6 ){ 
                                    txt += "<dt>" + lithoNav.sub7[0].sub[i] +"</dt>";
                                  }
                                  else{ 
                                    txt += "<dd><a href='#'>" + lithoNav.sub7[0].sub[i] +"</a></dd>";
                                  }
                                  
                                }
                                $sub7Dl1.html(txt);
                                txt = '';

                                //서브7-이미지
                                for(var i=0; i<$sub7Img.length; i++){  
                                  txt =  $sub7Img.eq(i).attr('src'); 
                                  txt += lithoNav.sub7[i+1].sub[0];   
                                  $sub7Img.eq(i).attr('src',txt);  
                                  txt = '';
                                }
                            
                            //네비게이션
                            //메인버튼(메뉴) - 1뎁스 이벤트
                            //서브메뉴
                            var $mainBtn = $('.main-btn');
                            var $sub = $('.sub');
                            var $navUlLi = $('#nav>ul>li');
                                
                                $mainBtn.on({
                                    mouseenter:function(){
                                        $(this).next().show();
                                    }
                                });
                                
                                $navUlLi.on({
                                    mouseleave:function(){
                                        $sub.stop().hide();
                                    }
                                });
                            //2뎁스 이벤트
                        
                            var $subBtn = $('.sub-btn');
                            var $subSub = $('.sub-sub');

                                
                                $subBtn.on({
                                    mouseenter:function(){
                                        $subSub.stop().hide();
                                        $(this).next().stop().show();
                                    }    
                                });

                                $navUlLi.on({
                                    mouseleave:function(){
                                        $subSub.stop().hide();
                                    }
                                });
                                //3뎁스 이벤트
                                //서브-서브-서브 메뉴 4 Depth
                                var $subSubBtn = $('.sub-sub-btn');
                                var $subSubSub = $('.sub-sub-sub');
                                var $subSubGapUlLi = $('.sub-sub');

                                    $subSubBtn.on({
                                        mouseenter:function(){
                                            $subSubSub.stop().hide(); 
                                            $(this).next().stop().show(); 
                                        }
                                    });

                                    $subSubGapUlLi.on({
                                        mouseleave:function(){
                                            $subSubSub.stop().hide();
                                        }
                                    });
        },
        
        section1Fn:function(){

            var $slide     = $('#section1 .slide');
            var $window    = $(window);
            var $winW      = $(window).width();
            var $winH      = $(window).height();
            var $nextBtn   = $('#section1 .next-btn');
            var $prevBtn   = $('#section1 .prev-btn');
            var $pageBtn   = $('#section1 .page-btn');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slideView = $('#section1 .slide-view');
            var $section1  = $('#section1');
            var cnt        = 0;
            var n          = $('#section1 .slide').length-2;
            var setId      = null;
  
                function resizeFn(){
                  $winW    = $(window).width();
                  $winH    = $(window).height();
                  $slide.css({width:$winW});
                  //가로형 모드 반응형
                  console.log(window.orientation);
                  if(window.orientation == 0 ){
                    alert('window.orientation == 0');
                  }
                  else if(window.orientation == 90 ){
                    alert('window.orientation == 90');
                  }
                  else if(window.orientation == 180 ){
                    alert('window.orientation == 180');
                  }
                  else if(window.orientation == -90 ){
                    alert('window.orientation == -90');
                  }

                  //세로형 모드 반응형

                  $section1.css({width:$winW,height:$winH});
                  mainSlideFn();
                  
                }
  
                resizeFn();
  
                $window.resize(function(){ 
                  resizeFn();
                });
                
  
                //메인슬라이드
                //1. 메인슬라이드함수
                function mainSlideFn(){
                  $slideWrap.stop().animate({left:- $winW*cnt }, 600,'easeInOutExpo',function(){
                    if(cnt>n-1){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:- $winW*cnt }, 0);
                  });
                  pageBtnColorEventFn(); 
                }
  
                //2-1. 다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn(); 
                }
                
                //2-2. 이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn(); 
                }
                
                //3-1. 다음 화살 버튼 클릭 이벤트
                $nextBtn.on({
                  click:  function(){
                    timerFn();
                    if( !$slideWrap.is(':animated')){
                      nextSlideCountFn();
                    }
                  }
                });
  
                //3-2. 이전 화살 버튼 클릭 이벤트
                $prevBtn.on({
                  click:  function(){
                    timerFn();
                    if( !$slideWrap.is(':animated')){
                    prevSlideCountFn();
                    }
                  }
                });
  
  
                //4-1 페이지 버튼 이벤트 : 해당 슬라이드에 버튼에 색상 변경
                //페이지 버튼 색상변경 이벤트 함수
                function pageBtnColorEventFn(){
 
                  $pageBtn.removeClass('addPage');
                  $pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage');
                }
                pageBtnColorEventFn(); 
                //4-2 페이지 버튼 클릭 이벤트
                 
                  $pageBtn.each(function(idx){
                    $(this).on({ 
                      click:function(){
                        cnt = idx;
                        mainSlideFn() 
                      }
                    });
                  });

                //5.터치 스와이프

                  $slideView.swipe({
                    swipeLeft:function(e){ 
                      timerFn();
                      e.preventDefault();
                      if( !$slideWrap.is(':animated')){
                        nextSlideCountFn();
                      }
                    },
                    swipeRight:function(e){
                      timerFn();
                      e.preventDefault();
                      if( !$slideWrap.is(':animated')){
                        prevSlideCountFn();
                      }
                    }
                  });
                  //6.자동슬라이드
                  function autoPlay(){
                    setId = setInterval(nextSlideCountFn,3000);

                  }
                  autoPlay();
                  //7.
                  var t = 0;
                  var setId2 = null;

                  function timerFn(){
                    clearInterval(setId);
                    clearInterval(setId2);
                    setId2 = setInterval(function(){
                      t++; 
                      console.log(t);
                      if( t>=4 ){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoPlay();
                      }
                    }, 1000);
                  }


              
        },
        section2Fn:function(){
         
            
        },
        section3Fn:function(){
          var $prevBtn   = $('#section3 .prev-btn');
          var $nextBtn   = $('#section3 .next-btn');
          var $slideWrap = $('#section3 .slide-wrap');
          var $slideView = $('#section3 .slide-view');
          var cnt        = 0;
          var setId      = null;
          var n          = $('#section3 .slide').length-(4+4)-1; //n=전체 슬라이드 갯수 : 4개(0,1,2,3)
              console.log('총 슬라이드 갯수 : ' + n);
          //1. 메인슬라이드함수
          function mainSlideFn(){
            console.log(cnt);
            $slideWrap.stop().animate({left:-390*cnt},600,function(){
              if(cnt>n){cnt=0}
              if(cnt<0){cnt=n}
              console.log(cnt);
              $slideWrap.stop().animate({left:-390*cnt},0);
            });
          }

          //2-1. 다음 슬라이드 카운트 함수
          function nextSlideCountFn(){
            cnt++;
            mainSlideFn()
          }
          //2-2. 이전 슬라이드 카운트 함수
          function prevSlideCountFn(){
            cnt--;
            mainSlideFn()
          }
          //3-1. 다음 화살 버튼 클릭 이벤트
          $nextBtn.on({
            click:  function(){
              timerFn();
              if( !$slideWrap.is(':animated')){
                nextSlideCountFn();
              }
            }
          });
          //3-2. 이전 화살 버튼 클릭 이벤트
          $prevBtn.on({
            click:  function(){
              timerFn();
              if( !$slideWrap.is(':animated')){
              prevSlideCountFn(); 
              }
            }
          });
          //4.터치이벤트
          $slideView.swipe({
            swipeLeft:function(){
              timerFn();
              if( !$slideWrap.is(':animated')){
                nextSlideCountFn();
              }
            },
            swipeRight:function(){
              timerFn();
              if( !$slideWrap.is(':animated')){
                prevSlideCountFn(); 
                }
            }
          });

          //5.자동슬라이드
          function autoPlay(){
            setId = setInterval(nextSlideCountFn,3000);

          }
          autoPlay();

          //6.
            var t = 0;
            var setId2 = null;

            function timerFn(){
              clearInterval(setId);
              clearInterval(setId2);//기존에 있는 타이머 중지
              setId2 = setInterval(function(){
                t++; //1 2 3 4 카운트 1초(1000)로 설정했으면 1 2 3 4, 2초(2000)로 설정했으면 2,4,6,8 이런 식
                if( t>=4 ){ //총 4초까지 해라(1000이었을때.)
                  clearInterval(setId);
                  clearInterval(setId2);//기존에 있는 타이머 중지
                  nextCountFn();
                  autoPlay();
                }
              }, 1000);
            }  
          
        },
        section4Fn:function(){
            
        },
        section5Fn:function(){
            
        },
        section6Fn:function(){
            
        },
        section7Fn:function(){
            
        },
        section8Fn:function(){
            
        },
        section9Fn:function(){
            
        },
        section10Fn:function(){
            
        },
        footerFn:function(){
            
        }
    }
    litho.init();
})(jQuery);