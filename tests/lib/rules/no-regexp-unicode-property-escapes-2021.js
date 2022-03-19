/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-regexp-unicode-property-escapes-2021.js")

if (!RuleTester.isSupported(2021)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of no-regexp-unicode-property-escapes-2021.")
    return
}

new RuleTester().run("no-regexp-unicode-property-escapes-2021", rule, {
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
        String.raw`/\p{Script=Elym}/u`,
    ],
    invalid: [
        {
            code: String.raw`/\p{EBase}/u`,
            errors: ["ES2021 '\\p{EBase}' is forbidden."],
        },
        {
            code: String.raw`/\p{EComp}/u`,
            errors: ["ES2021 '\\p{EComp}' is forbidden."],
        },
        {
            code: String.raw`/\p{EMod}/u`,
            errors: ["ES2021 '\\p{EMod}' is forbidden."],
        },
        {
            code: String.raw`/\p{EPres}/u`,
            errors: ["ES2021 '\\p{EPres}' is forbidden."],
        },
        {
            code: String.raw`/\p{ExtPict}/u`,
            errors: ["ES2021 '\\p{ExtPict}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Chorasmian}/u`,
            errors: ["ES2021 '\\p{Script=Chorasmian}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Chrs}/u`,
            errors: ["ES2021 '\\p{Script=Chrs}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Diak}/u`,
            errors: ["ES2021 '\\p{Script=Diak}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Dives_Akuru}/u`,
            errors: ["ES2021 '\\p{Script=Dives_Akuru}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Khitan_Small_Script}/u`,
            errors: ["ES2021 '\\p{Script=Khitan_Small_Script}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Kits}/u`,
            errors: ["ES2021 '\\p{Script=Kits}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Yezi}/u`,
            errors: ["ES2021 '\\p{Script=Yezi}' is forbidden."],
        },
        {
            code: String.raw`/\p{Script=Yezidi}/u`,
            errors: ["ES2021 '\\p{Script=Yezidi}' is forbidden."],
        },
    ],
})
