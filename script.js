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
