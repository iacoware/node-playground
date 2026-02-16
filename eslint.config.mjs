import eslintConfigPrettier from "eslint-config-prettier"
import typescriptEslint from "typescript-eslint"

export default [
    eslintConfigPrettier,
    ...typescriptEslint.configs.recommendedTypeChecked,
    ...typescriptEslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        ignores: ["**/node_modules", "**/.eslint.config.mjs"],
    },
    {
        rules: {
            "no-empty-function": 0,
            "@typescript-eslint/no-empty-function": 0,
        },
    },
]
