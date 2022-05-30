function createDivider(level) {
    let headerDiv = document.createElement("div");
    let line = document.createElement("hr");
    let header = document.createElement("h3");

    header.className = "divident"
    header.innerHTML = `adım=${level}`;

    headerDiv.appendChild(header);
    headerDiv.appendChild(line);

    let mainDiv = document.getElementById("nodes");

    mainDiv.appendChild(headerDiv);
}