const hasUnvisited = (seen: boolean[], distances: number[]): boolean => {
    return seen.some((s, i) => !s && distances[i] < Infinity);
};
const getLowest = (seen: boolean[], distances: number[]): number => {
    let lowestIndex = -1;
    let lowestDistance = Infinity;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }
        if (distances[i] < lowestDistance) {
            lowestDistance = distances[i];
            lowestIndex = i;
        }
    }
    return lowestIndex;
};
export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const distances: number[] = new Array(arr.length).fill(Infinity);

    distances[source] = 0;

    while (hasUnvisited(seen, distances)) {
        const lowest = getLowest(seen, distances);
    }
    return [];
}
