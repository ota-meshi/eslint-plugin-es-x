/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-regexp-unicode-property-escapes-2022.js")

if (!RuleTester.isSupported(2022)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of no-regexp-unicode-property-escapes-2022.")
    return
}

new RuleTester().run("no-regexp-unicode-property-escapes-2022", rule, {
    valid: [
        String.raw`/\p{Script=Cpmn}/u`,
        String.raw`/\p{Letter}/u`,
        String.raw`/\P{Letter}/u`,
        String.raw`/\p{Script=Hiragana}/u`,
        String.raw`/\P{Script=Hiragana}/u`,
        String.raw`/\p{Extended_Pictographic}/`,
        String.raw`/\P{Extended_Pictographic}/`,
        String.raw`/\p{Script=Dogr}/`,
        String.raw`/\P{Script=Dogr}/`,
        String.raw`new RegExp('\\p{Extended_Pictographic}')`,
        String.raw`new RegExp('\\\\p{Extended_Pictographic}', 'u')`,
        String.raw`/\p{Extended_Pictographic}/u`,
        String.raw`/\p{Script=Dogr}/u`,
        String.raw`/\p{Script=Elym}/u`,
        String.raw`/\p{EBase}/u`,
        String.raw`/\p{Script=Chorasmian}/u`,
    ],
    invalid: [
        {
            code: String.raw`/\p{Script=Cpmn}/u`,
            errors: ["ES2022 '\\p{Script=Cpmn}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Cypro_Minoan}/u`,
            errors: ["ES2022 '\\p{Script=Cypro_Minoan}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Old_Uyghur}/u`,
            errors: ["ES2022 '\\p{Script=Old_Uyghur}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Ougr}/u`,
            errors: ["ES2022 '\\p{Script=Ougr}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Tangsa}/u`,
            errors: ["ES2022 '\\p{Script=Tangsa}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Tnsa}/u`,
            errors: ["ES2022 '\\p{Script=Tnsa}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Toto}/u`,
            errors: ["ES2022 '\\p{Script=Toto}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Vith}/u`,
            errors: ["ES2022 '\\p{Script=Vith}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Vithkuqi}/u`,
            errors: ["ES2022 '\\p{Script=Vithkuqi}' is forbidden."],
        },
    ],
})
