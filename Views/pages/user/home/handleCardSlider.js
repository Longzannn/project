document.getElementById("next").onclick = function () {
    const widthItem = document.querySelector(".swipper-slide").offsetWidth;
    document.querySelector(".swipper").scrollLeft += (widthItem * 4);
};
document.getElementById("prev").onclick = function () {
    const widthItem = document.querySelector(".swipper-slide").offsetWidth;
    document.querySelector(".swipper").scrollLeft -= (widthItem * 4);
};

document.getElementById("next-2").onclick = function () {
    const widthItem2 = document.querySelector(".swipper-slide-2").offsetWidth;
    document.querySelector(".swipper-2").scrollLeft += (widthItem2 * 4);
};
document.getElementById("prev-2").onclick = function () {
    const widthItem2 = document.querySelector(".swipper-slide-2").offsetWidth;
    document.querySelector(".swipper-2").scrollLeft -= (widthItem2 * 4);
};