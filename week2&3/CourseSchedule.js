/*
 * There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

样例
Example 1:

Input: n = 2, prerequisites = [[1,0]] 
Output: true
Example 2:

Input: n = 2, prerequisites = [[1,0],[0,1]] 
Output: false
 */

// topological sort
var courseSchedule = function (n, prerequisites) {
    let indegrees = new Array(n);
    for (let i = 0; i < n; i++) {
        indegrees[i] = 0;
    }
    let graph = {};
    for (let pair of prerequisites) {
        let [course, pre] = pair;
        if (!(course in graph)) {
            graph[course] = [];
        }
        graph[course].push(pre);
        indegrees[pre] += 1;
    }
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
        }
    }
    let taken = 0;
    while (queue.length > 0) {
        let curr_course = queue.pop();
        taken += 1;
        if (!(curr_course in graph)) {
            continue;
        }
        for (let pre of graph[curr_course]) {
            indegrees[pre] -= 1;
            if (indegrees[pre] === 0) {
                queue.push(pre);
            }
        }
    }
    return taken === n;
}