const architecture = document.getElementById("archi");
const design = document.getElementById("des");
const programming = document.getElementById("program");
const architectureTab = document.getElementById("architecture");
const designTab = document.getElementById("design");
const programmingTab = document.getElementById("programming");

architecture.addEventListener("click", () => {
    if (architectureTab.classList = "hidden") {
        architectureTab.classList = "visible";
        designTab.classList.remove("visible");
        programmingTab.classList.remove("visible");
    }
});

design.addEventListener("click", () => {
    if (designTab.classList = "hidden") {
        designTab.classList = "visible";
        architectureTab.classList = "hidden";
        programmingTab.classList = "hidden";
    }
});

programming.addEventListener("click", () => {
    if (programmingTab.classList = "hidden") {
        programmingTab.classList = "visible";
        architectureTab.classList = "hidden";
        designTab.classList = "hidden";
    }
});