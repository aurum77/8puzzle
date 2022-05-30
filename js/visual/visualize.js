function visualize(nodeArray) {
    clean();
    let oldDepth = 0;
    let len = 0;
    // let rootHVal = getHVal(getMatrix("init_matrix"), getMatrix("goal_matrix"));
    // createTable(new MyNode(getMatrix("init_matrix"), rootHVal, 0, rootHVal, 0));
    nodeArray.forEach(depth => {
        depth.forEach(node => {
            if (node.gval > oldDepth) {
                createDivider(node.gval);
                oldDepth++;
            }
            createTable(node);
            len++;
        });
    });
}