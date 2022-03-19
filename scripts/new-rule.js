/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const cp = require("child_process")
const fs = require("fs")
const path = require("path")
const logger = console

// main
;((ruleId) => {
    if (ruleId == null) {
        logger.error("Usage: npm run new <RuleID>")
        process.exitCode = 1
        return
    }
    if (!/^[a-z0-9-]+$/u.test(ruleId)) {
        logger.error("Invalid RuleID '%s'.", ruleId)
        process.exitCode = 1
        return
    }

    const ruleFile = path.resolve(__dirname, `../lib/rules/${ruleId}.js`)
    const testFile = path.resolve(__dirname, `../tests/lib/rules/${ruleId}.js`)
    const docFile = path.resolve(__dirname, `../docs/rules/${ruleId}.md`)

    fs.writeFileSync(
        ruleFile,
        `"use strict"

module.exports = {
    meta: {
        docs: {
            description: "",
            category: "",
            recommended: false,
            url: "",
        },
        fixable: null,
        messages: {
            forbidden: "",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {}
    },
}
`,
    )
    fs.writeFileSync(
        testFile,
        `"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/${ruleId}.js")

if (!RuleTester.isSupported(2022)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of ${ruleId}.")
    return
}

new RuleTester().run("${ruleId}", rule, {
    valid: [],
    invalid: [],
})
`,
    )
    fs.writeFileSync(
        docFile,
        `# es-x/${ruleId}
> 

This rule reports ??? as errors.

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad">

\`\`\`js
/*eslint es-x/${ruleId}: error */

\`\`\`

</eslint-playground>
`,
    )

    cp.execSync(`code "${ruleFile}"`)
    cp.execSync(`code "${testFile}"`)
    cp.execSync(`code "${docFile}"`)

    const yellow = "\u001b[33m"

    const reset = "\u001b[0m"

    console.log(`Test Command:

${yellow}npx mocha "tests/**/${ruleId}.js" --reporter dot --timeout 60000${reset}

`)
})(process.argv[2])
