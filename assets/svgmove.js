var xmlns="http://www.w3.org/2000/svg",
    select = function(s) {
        return document.querySelector(s);
    },
    selectAll = function(s) {
        return document.querySelectorAll(s);
    },
    buildingall = select('#building01'),        
    background = select('#road'),
    building = select('#building'),
    rightwall = select('#rightwall'),
    rightglass = select('#rightglass'),
    leftwall = selectAll('#leftwall'),
    head = selectAll('#head'),
    shadow = selectAll('#shadow'),
    leftglass = selectAll('#leftglass');

    //transformの基準点を中心にする
    TweenMax.set([buildingall, background, building, rightwall, rightglass, leftwall, leftglass, head, shadow], {
        transformOrigin : '50% 50%'
    });
    
    //タイムラインを作成する
    var timeline1 = new TimelineMax({repeat:0, delay:1, yoyo:false, paused:false});

    //各自アニメーション
    timeline1.from(background, 0.5, {
        scale: 0,
        ease: Power1.easeOut
    })
    .from(rightwall, 0.5, {
        scale: 0
    })
    .from(rightglass, 0.5, {
        scale: 0
    })
    .staggerFrom(leftwall, 0.5, {
        scale: 0
    },0.5)
    .staggerFrom(leftglass, 0.5, {
        scale: 0
    },0.5)
    .from(head, 0.5, {
        scale: 0
    })
    .from(shadow, 0.5, {
        scale: 0
    });    

    //さいごにふわふわ
    var timeline2 = new TimelineMax({repeat:-1, delay:1, yoyo:true, paused:false});
timeline2.from(buildingall, 2, {
    y: 10,
    ease: Power1.easeInOut
});

var timeline3 = new TimelineMax({repeat:0, delay:8, yoyo:true, paused:false});
timeline3.to(buildingall, 3, {
    opacity: 0,
    ease: Power1.easeInOut
});
