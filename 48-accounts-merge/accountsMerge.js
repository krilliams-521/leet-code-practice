/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  console.log(accounts);
  const graph = new Map();
  const emailToName = new Map();

  // 1. Build graph
  for (const account of accounts) {
    const firstEmail = account[1];

    if (!graph.has(firstEmail)) {
      graph.set(firstEmail, []);
    }

    emailToName.set(firstEmail, account[0]);

    for (let i = 2; i < account.length; i++) {
      const email = account[i];

      emailToName.set(email, account[0]);

      if (!graph.has(email)) {
        graph.set(email, []);
      }

      graph.get(firstEmail).push(email);
      graph.get(email).push(firstEmail);
    }
  }

  console.log(graph);

  const visited = new Set();
  const result = [];

  // 2. DFS
  function dfs(email, emails) {
    visited.add(email);
    emails.push(email);

    for (const neighbor of graph.get(email)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, emails);
      }
    }
  }

  // 3. Find connected components
  for (const [email] of graph) {
    if (!visited.has(email)) {
      const emails = [];

      dfs(email, emails);

      emails.sort();

      const name = emailToName.get(email);

      result.push([name, ...emails]);
    }
  }

  return result;
};

// 4. Test case
const accounts = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"]
];

console.log(accountsMerge(accounts));
