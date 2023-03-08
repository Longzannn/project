document.getElementById("next").onclick = function () {
    const widthItem = document.querySelector(".swipper-slide").offsetWidth;
    document.querySelector(".swipper").scrollLeft += (widthItem * 4);
};
document.getElementById("prev").onclick = function () {
    const widthItem = document.querySelector(".swipper-slide").offsetWidth;
    document.querySelector(".swipper").scrollLeft -= (widthItem * 4);
};