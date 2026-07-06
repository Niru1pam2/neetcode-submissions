class Solution {
  /**
   * @param {number} k
   * @param {number[][]} rowConditions
   * @param {number[][]} colConditions
   * @return {number[][]}
   */
  buildMatrix(k, rowConditions, colConditions) {
    const rowOrder = this.topoSort(k, rowConditions);
    if (!rowOrder.length) return [];
    const colOrder = this.topoSort(k, colConditions);
    if (!colOrder.length) return [];

    const valToRow = {};
    rowOrder.forEach((num, i) => (valToRow[num] = i));

    const valToCol = {};
    colOrder.forEach((num, i) => (valToCol[num] = i));

    const res = Array.from({ length: k }, () => Array(k).fill(0));

    for (let num = 1; num <= k; num++) {
      const r = valToRow[num];
      const c = valToCol[num];
      res[r][c] = num;
    }

    return res;
  }

  topoSort(k, edges) {
    const indegree = Array(k + 1).fill(0);
    const map = new Map();

    for (const [u, v] of edges) {
      if (!map.has(u)) map.set(u, []);
      map.get(u).push(v);
      indegree[v]++;
    }

    const queue = [];
    const order = [];

    for (let i = 1; i <= k; i++) {
      if (indegree[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
      const node = queue.shift();
      order.push(node);

      // ✅ Prevent error when map.get(node) is undefined
      for (const nei of map.get(node) || []) {
        indegree[nei]--;
        if (indegree[nei] === 0) queue.push(nei);
      }
    }

    return order.length === k ? order : [];
  }
}
