export default [
  {
    rules: {
      // "no-console": "error", não deixa console.log no código
      indent: ["error", 2], // não deixa pouco espaço no começo da linha
      "keyword-spacing": "error", // não deixa espaços desnecesários
      "no-multiple-empty-lines": "error", // não deixa criar múltiplas linhas sem código
      "eol-last": ["error", "always"], // cria uma última linha vazia no fim do código
      semi: ["error", "always"], // cria sempre vírgulas e ponto e vírgula no fim para identar
      "no-trailing-spaces": "error", //
      "operator-assignment": "error",
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];
