const toSplit = document.querySelectorAll(".split");
for (let i = 0; i < toSplit.length; i++) {
    let parentElement = toSplit[i].parentElement;
    let text = toSplit[i].innerHTML;
    text = text.split("");
    let string = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") text[i] = "&nbsp;";
        string += `<span class="blast">${text[i]}</span>`;
    }
    parentElement.innerHTML = string;
    parentElement.style.display = "flex";
}
const blastElement = document.querySelectorAll(".blast");
blastElement.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("animated");
        setTimeout(() => {
            element.classList.remove("animated");
        }, 1000);
    });
});
const container = ".skills";
const texts = [
    "Html",
    "CSS3",
    "JavaScript",
    "JQuery",
    "Bootstrap",
    "Sass",
    "React",
    "Next Js",
    "Node Js",
    "Java",
    "Python",
    "Git",
    "Json",
    "npm",
    "C++",
];
let radius = "300";
window.addEventListener("resize", resize);
function resize() {
    const skills = document.querySelector(".section-about .skills");
    skills.innerHTML = "";
    if (innerWidth > 992) {
        radius = "300";
    } else if (innerWidth <= 992 && innerWidth > 600) {
        radius = "225";
    } else if (innerWidth <= 600) {
        radius = "175";
    }
    const options = { radius, itemClass: "tagcloud-item" };
    TagCloud(container, texts, options);
}
resize();
const menu = document.querySelector(".menu");
const menuSwitch = document.querySelector(".menu-switch");
menuSwitch.addEventListener("click", () => {
    menu.classList.toggle("active");
});
