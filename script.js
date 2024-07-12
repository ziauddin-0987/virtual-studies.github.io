const navBtn = document.getElementById("navIcon");
const navClass = document.getElementById("navList").classList;

let showBtn = 0;
navBtn.addEventListener("click", () => {
  if (showBtn === 0) {
    console.log("on btn");
    navClass.add("navList");
    showBtn = 1;
  } else if (showBtn === 1) {
    showBtn = 0;
  }
});
function zia() {
  const navClass = document.getElementById("navList");
  console.log("on btn");
  navClass.classList.toggle("navList");
}
function zia() {
  console.log("of btn");
  document.getElementById("navClass").classList.toggle("myStyle");
}
