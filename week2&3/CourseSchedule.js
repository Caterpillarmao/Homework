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
    let take = new Set();
    let graph = {};
    let indegrees = new Array(n);

    // build graph
    for (let prereq of prerequisites) {
        graph[prereq[1]] = prereq[0];
        indegrees[prereq[0]] += 1;
    }

    let queue = [];
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === undefined) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let course = queue.shift();
            take.add(course);
            for (let next of graph[course]) {
                if (!take.has(next)) {
                    indegrees[next] -= 1;
                    if (indegrees[next] == 0) {
                        queue.push(next);
                    }
                }
            }
        }

    }
    return take.length === n;

}