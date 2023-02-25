var path;
var currentColor = "black";
var currentWidth = 25;

tool.onMouseDown = function (event) {
  //This code in this function is called whenever the mouse is clicked.
  path = new Path(); // Create a new path each time.
  path.add(event.point);
  path.strokeColor = currentColor;
  path.strokeWidth = currentWidth;
  console.log(event.point); //Just for Debugging
};
tool.onMouseDrag = function (event) {
  path.add(event.point); //Add points to the path as the user drags their mouse.
};

var slider = document.getElementById("myRange");
slider.oninput = function () {
  console.log(this.value);
  currentWidth = this.value;
};

$("#brush").on("click", function (e) {
  currentColor = "black";
});
$("#eraser").on("click", function (e) {
  currentColor = "white";
});

$(".red1").on("click", function (e) {
  currentColor = "#ff1414";
});
$(".red2").on("click", function (e) {
  currentColor = "#e60707";
});
$(".red3").on("click", function (e) {
  currentColor = "#ae0404";
});
$(".red4").on("click", function (e) {
  currentColor = "#8e0000";
});
$(".red5").on("click", function (e) {
  currentColor = "#6e0101";
});
$(".orange1").on("click", function (e) {
  currentColor = "#ffa500";
});
$(".orange2").on("click", function (e) {
  currentColor = "#ff9400";
});
$(".orange3").on("click", function (e) {
  currentColor = "#ff8201";
});
$(".orange4").on("click", function (e) {
  currentColor = "#ff7101";
});
$(".orange5").on("click", function (e) {
  currentColor = "#ff5f01";
});
$(".yellow1").on("click", function (e) {
  currentColor = "#fef65c";
});
$(".yellow2").on("click", function (e) {
  currentColor = "#fee745";
});
$(".yellow3").on("click", function (e) {
  currentColor = "#ffd82f";
});
$(".yellow4").on("click", function (e) {
  currentColor = "#ffc918";
});
$(".yellow5").on("click", function (e) {
  currentColor = "#ffba01";
});
$(".green1").on("click", function (e) {
  currentColor = "#5ecb75";
});
$(".green2").on("click", function (e) {
  currentColor = "#3dba57";
});
$(".green3").on("click", function (e) {
  currentColor = "#319246";
});
$(".green4").on("click", function (e) {
  currentColor = "#256b34";
});
$(".green5").on("click", function (e) {
  currentColor = "#194522";
});
$(".blue1").on("click", function (e) {
  currentColor = "#1974d2";
});
$(".blue2").on("click", function (e) {
  currentColor = "#1357be";
});
$(".blue3").on("click", function (e) {
  currentColor = "#0d3aa9";
});
$(".blue4").on("click", function (e) {
  currentColor = "#061d95";
});
$(".blue5").on("click", function (e) {
  currentColor = "#000080";
});
