const html = document.querySelector("html");
const body = document.querySelector("body");
const container = document.querySelector("#container");

const data1 = [html, body, container];
data1.forEach((item) => {
    if (item === html) {
        item.setAttribute("style", "margin: 0; padding: 0; font-family: 'Roboto', sans-serif; background-color: black; height: 100%;");
    } else if (item === body) {
        item.setAttribute("style", "margin: 0; padding: 0; font-family: 'Roboto', sans-serif; background-color: black; height: 100%; display: flex; justify-content: center; align-items: stretch;");
    } else {
        item.setAttribute("style", "display: grid; width: 65%; height: 100vh; background-color: white;");
    }
});

const sidebarContainer = document.createElement("section");
sidebarContainer.classList.add("sidebar-container");
sidebarContainer.setAttribute("style", "background-color:#60a5fa;");
container.appendChild(sidebarContainer);

const mainbarContainer = document.createElement("section");
mainbarContainer.classList.add("mainbar-container");
container.appendChild(mainbarContainer);

fetch('icons.json')
    .then(response => response.json())
    .then(iconsData => {
        iconsData.forEach(iconObj => {
            const sidebarIcon = document.createElement("div");
            sidebarIcon.classList.add("sidebar-icon");
            sidebarIcon.innerHTML = iconObj.icon;
            
            const labelText = document.createElement("span");
            labelText.textContent = iconObj.label;
            labelText.setAttribute("style", "margin-left: 10px; font-weight: bold; color: white;");
            
            sidebarIcon.appendChild(labelText);
            sidebarContainer.appendChild(sidebarIcon);
        });
    });
