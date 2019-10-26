var xmlns="http://www.w3.org/2000/svg",
    select = function(s) {
        return document.querySelector(s);
    },
    selectAll = function(s) {
        return document.querySelectorAll(s);
    },
    road = select('#road'),        
    car15 = select('#car15'),
    car14 = select('#car14'),
    house05 = select('#house05'),
    house04 = select('#house04'),
    house03 = select('#house03'),
    car13 = select('#car13'),
    car12 = select('#car12'),
    car11 = select('#car11'),
    car10 = select('#car10'),
    car09 = select('#car09'),
    car08 = select('#car08'),
    car07 = select('#car07'),
    car06 = select('#car06'),
    building03 = select('#building03'),
    building02 = select('#building02'),
    car05 = select('#car05'),
    car04 = select('#car04'),
    car03 = select('#car03'),
    building01 = select('#building01'),
    car02 = select('#car02'),
    car01 = select('#car01'),
    house01 = select('#house01');

    //transformの基準点を中心にする
    TweenMax.set([road, car15, car14, house05, house04, house03, car13, car12, car10, car09, car08 ,car07 ,car06, building03, building02, car05, car04, car03, building01, car02 , car01, house01], {
        transformOrigin : '50% 50%'
    });
    
    //タイムライン1を作成する
    var timeline1 = new TimelineMax({repeat:0, delay:1, yoyo:false, paused:false});

    //家とビルが生えるアニメーション
    timeline1.from(road, 0.5, {
        scale: 0,
        ease: Power1.easeOut
    }),
    timeline1.fromTo(house01, 0.5, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '0.5'),
    timeline1.fromTo(house02, 0.5, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '0.75'),
    timeline1.fromTo(house03, 0.5, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '1'),
    timeline1.fromTo(house04, 0.5, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '1.25'),
    timeline1.fromTo(house05, 0.5, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '1.5'),
    timeline1.fromTo(building01, 1, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '2.5'),
    timeline1.fromTo(building02, 1, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '3'),
    timeline1.fromTo(building03, 1, 
        {scaleY: '0', transformOrigin: '50% 100%'},
        {scaleY: '1', ease: Bounce.easeOut},
        '3.5');
    
    //タイムライン2(車用)を作成する
    var timeline2 = new TimelineMax({repeat:-1, delay:3, yoyo:false, paused:false});

    //車が走るアニメーション
    timeline2.fromTo(car01, 5, 
        {x: '-400',y: -250},
        {x: '800',y:450},
        '2'),
    timeline2.fromTo(car02, 5, 
        {x: '800',y: 450},
        {x: '-400',y:-200},
        '3'),
    timeline2.fromTo(car10, 5, 
        {x: '-700',y: -400},
        {x: '600',y:325},
        '4'),
    timeline2.fromTo(car13, 5, 
        {x: '-400',y: -200},
        {x: '1100',y:575},
        '6'),
    timeline2.fromTo(car08, 5, 
        {x: '-1000',y: -550},
        {x: '300',y:175},
        '8'),
    timeline2.fromTo(car12, 5, 
        {x: '800',y: 425},
        {x: '-400',y:-225},
        '5'),
    timeline2.fromTo(car11, 5, 
        {x: '600',y: 330},
        {x: '-700',y:-350},
        '7'),
    timeline2.fromTo(car09, 5, 
        {x: '500',y: 250},
        {x: '-800',y:-400},
        '9'),
    timeline2.fromTo(car04, 5, 
        {x: '-1300',y: 800},
        {x: '700',y:-400},
        '1'),
    timeline2.fromTo(car03, 9, 
        {x: '600',y: -335},
        {x: '-2100',y:1185},
        '1'),
    timeline2.fromTo(car05, 9, 
        {x: '600',y: -335},
        {x: '-2100',y:1185},
        '5'),
    timeline2.fromTo(car07, 5, 
        {x: '-1400',y: 800},
        {x: '700',y:-400},
        '1'),
    timeline2.fromTo(car06, 9, 
        {x: '1150',y: -635},
        {x: '-1550',y:885},
        '2'),
    timeline2.fromTo(car14, 9, 
        {x: '600',y: -335},
        {x: '-2100',y:1185},
        '4'),
    timeline2.fromTo(car15, 9, 
        {x: '600',y: -335},
        {x: '-2100',y:1185},
        '7');
    
    
    
    
    
    
    

    
    

    
        
        
    
    
    


