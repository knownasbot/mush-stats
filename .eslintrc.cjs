/* eslint-env node */

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: ["react-refresh", "@typescript-eslint", "prettier"],
    ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        quotes: ["error", "double"],
        indent: ["error", 4],
        semi: ["error", "always"],
    },
};
