"use strict"

const RuleTester = require("../../tester")
const path = require("path")
const assert = require("assert")
const { ESLint } = require("eslint")
const plugin = require("../../..")

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

if (!RuleTester.isSupported(2019)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of define-regexp-handler.")
    return
}

const TEST_CWD = path.join(__dirname, "../fixtures/integrations/eslint-plugin")

describe("define-regexp-handler", () => {
    it("should lint with errors", () =>
        lint(String.raw`
        /* eslint es-x/no-regexp-unicode-property-escapes: error, es-x/no-regexp-unicode-property-escapes-2019: error, */
        /\p{Extended_Pictographic}/u;
`).then((result) => {
            assert.strictEqual(result.messages.length, 2)
            assert.deepStrictEqual(
                result.messages.map((m) => m.ruleId),
                [
                    "es-x/no-regexp-unicode-property-escapes",
                    "es-x/no-regexp-unicode-property-escapes-2019",
                ],
            )
        }))
})

function lint(text) {
    if (ESLint) {
        const eslint = new ESLint({
            cwd: TEST_CWD,
            plugins: { "eslint-plugin-es-x": plugin },
            useEslintrc: false,
            overrideConfig: {
                parserOptions: {
                    ecmaVersion: 2019,
                },
                plugins: ["es-x"],
            },
        })
        return eslint
            .lintText(text, { filePath: "test.js" })
            .then((results) => results[0])
    }
    const engine = new (require("eslint").CLIEngine)({
        cwd: TEST_CWD,
        useEslintrc: false,
        plugins: ["es-x"],
        parserOptions: {
            ecmaVersion: 2019,
        },
    })
    engine.addPlugin("eslint-plugin-es-x", plugin)
    return Promise.resolve(engine.executeOnText(text, "test.js").results[0])
}
