export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    const queue: number[] = [];

    queue.push(source); // starting at zero
    seen[source] = true;
    do {
        const current = queue.shift() as number;
        if (current == needle) {
            break;
        }
        seen[current] = true;
        const adjacencies = graph[current];
        for (let i = 0; i < adjacencies.length; i++) {
            if (adjacencies[i] !== 0 && !seen[i]) {
                seen[i] = true;
                prev[i] = current;
                queue.push(i);
            }
        }
    } while (queue.length);

    let curr = needle;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    if (out.length) {
        return [source].concat(out.reverse());
    }
    return null;
}