const { HypercertClient } = require("@hypercerts-org/sdk");

const client = new HypercertClient({
  chain: { id: 11155111 }, // optimism
});

console.log(client.config.chain.id);
console.log(client.config.graphUrl);
