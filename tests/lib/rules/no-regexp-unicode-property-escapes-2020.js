/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-regexp-unicode-property-escapes-2020.js")

if (!RuleTester.isSupported(2020)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of no-regexp-unicode-property-escapes-2020.")
    return
}

new RuleTester().run("no-regexp-unicode-property-escapes-2020", rule, {
    valid: [
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
    ],
    invalid: [
        {
            code: String.raw`/\p{Script=Elym}/u`,
            errors: ["ES2020 '\\p{Script=Elym}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Elymaic}/u`,
            errors: ["ES2020 '\\p{Script=Elymaic}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Hmnp}/u`,
            errors: ["ES2020 '\\p{Script=Hmnp}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Nand}/u`,
            errors: ["ES2020 '\\p{Script=Nand}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Nandinagari}/u`,
            errors: ["ES2020 '\\p{Script=Nandinagari}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Nyiakeng_Puachue_Hmong}/u`,
            errors: [
                "ES2020 '\\p{Script=Nyiakeng_Puachue_Hmong}' is forbidden.",
            ],
        },
        {
            code: String.raw`/\p{Script=Wancho}/u`,
            errors: ["ES2020 '\\p{Script=Wancho}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Wcho}/u`,
            errors: ["ES2020 '\\p{Script=Wcho}' is forbidden."],
        },
    ],
})
