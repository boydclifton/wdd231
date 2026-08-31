const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

// DEFAULT: GRID VIEW 

function setView(view) {
    if (!membersContainer) return;
    const isGrid = view === "grid";
    membersContainer.classList.toggle("grid", isGrid);
    membersContainre.classList.toggle("list", !isGrid);
    gridBtn?.setAttribute("aria-pressed", String(isGrid));
    listBtn?.setAttribute("aria-pressed", String(!isGrid));
}

gridBtn?.addEventListener("click", () => setView("grid"));
listBtn?.addEventListener("click", () => setView("list"));


// INITIALIZE VIEW 

setView("grid");

// LEVEL HELPER 

function levelName(levelNum) {
    
}




