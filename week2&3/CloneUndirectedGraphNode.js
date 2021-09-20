/*
 * Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors. Nodes are labeled uniquely.

You need to return a deep copied graph, which has the same structure as the original graph, and any changes to the new graph will not have any effect on the original graph.

样例
Example1

Input:
{1,2,4#2,1,4#4,1,2}
Output: 
{1,2,4#2,1,4#4,1,2}
Explanation:
1------2  
 \     |  
  \    |  
   \   |  
    \  |  
      4   
说明
How we serialize an undirected graph: http://www.lintcode.com/help/graph/

注意事项
You need return the node with the same label as the input node.
 */

var cloneUndirectedGraphNode = function (node) {
  if (node === null) {
    return null;
  }
  let queue = [node];
  let seen = new Map;
  seen.set(node, new Node(node.val, []));
  while (queue.length > 0) {
    let copy = queue.shift();

    for (let nei of copy.neighbors) {
      if (!seen.has(nei)) {
        queue.push(nei);
        seen.set(nei, new Node(nei.val, []));
      }
      seen.get(copy).neighbors.push(seen.get(nei));
    }
  }
  return seen.get(node);
}