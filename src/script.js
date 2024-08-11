function movingParticals(){
    var cog = document.querySelector('#cog');
    var cylinder = document.querySelector('#cylinder');
    var noodle = document.querySelector('#noodle');
    gsap.from(cog,{
        rotate: "360deg",
        duration: 550,
        repeat:-1,
    })
    gsap.from(cylinder,{
        rotate:"360deg",
        duration:600,
        repeat:-1,

    })
    gsap.from(noodle,{
        rotate:"360deg",
        duration:600,
        repeat:-1,

    })
    gsap.to('.scrollerWrapper',{
        x:"2000vh",
        duration:200,
        repeat:-1,
    })
    gsap.to('.pyramid',{
        y:"50vh",
        duration:200,
        repeat:-1,
        yoyo:true,
    })
    gsap.to('.tube',{
        y:"50vh",
        duration:200,
        repeat:-1,
        yoyo:true,
    })
    gsap.from('.star',{
        rotate:"360deg",
        duration:500,
        repeat:-1,
    })
    gsap.from('.spring',{
        rotate:"360deg",
        duration: 600,
        repeat:-1,
    })
}
movingParticals();