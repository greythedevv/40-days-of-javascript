// 3. Object Mutation Trap

const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  return { ...config, ...newConfig };
}

console.log (updateConfig({ version: "2.0" }))