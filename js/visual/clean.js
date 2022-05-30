function clean() {
    let container = document.getElementById("nodesContainer");
    let nodes = container.appendChild(document.createElement('div'));
    nodes.id = 'nodes';

    container.removeChild(document.getElementById("nodes"));
    container.appendChild(nodes);
}