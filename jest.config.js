export default {
    injectGlobals: false,
    testEnvironment: "node",
    preset: "ts-jest/presets/default-esm",
    rootDir: "src",
    transform: {
        // "^.+\\.m?[tj]s?$": ["ts-jest", { useESM: true }],
        "^.+\\.m?[tj]s?$": ["@swc/jest"],
    },
    coverageDirectory: "../.coverage",
    collectCoverageFrom: [
        "src/**/*.ts",
        "src/**/*.mts",
        "!src/**/*.d.ts",
        "!src/**/*.d.mts",
    ],
}
