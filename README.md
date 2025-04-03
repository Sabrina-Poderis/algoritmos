# Algoritmos

Este repositório contém uma coleção de algoritmos implementados em TypeScript. Cada algoritmo está em um arquivo separado dentro da pasta `src`.

## Estrutura do Projeto

```
algoritmos          
├─ src              
│  ├─ algorithms    
│  │  └─ alg001.ts  
│  └─ index.ts      
├─ package.json     
├─ README.md        
├─ tsconfig.json    
└─ yarn.lock       
```

## Configuração e Execução

### Requisitos
- Node.js
- yarn

### Instalação das Dependências
Execute o comando abaixo para instalar as dependências:
```sh
yarn
```

### Execução de Algoritmos
Para executar um algoritmo específico, utilize o comando:
```sh
yarn dev alg001.ts
```
Substitua `alg001.ts` pelo nome do arquivo desejado.

### Compilação do Projeto
Para compilar o projeto, utilize:
```sh
yarn build
```