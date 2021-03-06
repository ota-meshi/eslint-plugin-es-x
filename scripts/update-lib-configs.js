/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { ESLint } = require("eslint")
const { categories } = require("./rules")
const Root = path.resolve(__dirname, "../lib/configs")

function configNameToDisallowNewIn(revision) {
    const year = revision <= 5 ? revision : 2009 + revision
    return `no-new-in-es${year}`
}

function configNameToRestrictToPreviousOf(revision) {
    const prevRev = revision === 5 ? 3 : revision - 1
    const year = prevRev <= 5 ? prevRev : 2009 + prevRev
    return `restrict-to-es${year}`
}

function wrapCode(code) {
    return `/**
 * DON'T EDIT THIS FILE.
 * This file was generated by "scripts/update-lib-configs.js" script.
 */
"use strict"

module.exports = ${code}
`
}

for (const { experimental, revision, rules, ignorePreset } of Object.values(
    categories,
)) {
    if (ignorePreset) {
        continue
    }
    const ruleSetting = rules.map((r) => `"es-x/${r.ruleId}":"error"`).join(",")
    const extendSetting = Object.values(categories)
        .filter((c) => c.revision >= revision && !c.experimental)
        .map(
            (c) =>
                `require.resolve("./${configNameToDisallowNewIn(c.revision)}")`,
        )
        .join(",")

    if (experimental) {
        fs.writeFileSync(
            path.join(Root, "no-new-in-esnext.js"),
            wrapCode(`{ plugins: ["es-x"], rules: { ${ruleSetting} } }`),
        )
    } else {
        fs.writeFileSync(
            path.join(Root, `${configNameToDisallowNewIn(revision)}.js`),
            wrapCode(`{ plugins: ["es-x"], rules: { ${ruleSetting} } }`),
        )
        fs.writeFileSync(
            path.join(Root, `${configNameToRestrictToPreviousOf(revision)}.js`),
            wrapCode(`{ extends: [${extendSetting}] }`),
        )
    }
}

format()

async function format() {
    ESLint.outputFixes(
        await new ESLint({ fix: true }).lintFiles(["lib/configs"]),
    )
}
