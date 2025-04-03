import { execSync } from "child_process";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("❌ Especifique o nome do algoritmo (ex: alg001)");
  process.exit(1);
}

const scriptName = args[0];
// const scriptName = 'alg001' // mock usado pra debugger

try {
  console.log('---------------------')
  console.log('Iniciando o algoritmo')
  console.log('---------------------')
  execSync(`ts-node-dev src/algorithms/${scriptName}.ts`, { stdio: "inherit" });
} catch (error) {
  console.error(`❌ Erro ao executar '${scriptName}.ts':`, error);
}
