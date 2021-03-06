/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { RegExpValidator } = require("regexpp")
const { getRegExpCalls } = require("../utils")

/**
 * Verify a given regular expression.
 * @param {RuleContext} context The rule context to report.
 * @param {Node} node The AST node to report.
 * @param {string} pattern The pattern part of a RegExp.
 * @param {string} flags The flags part of a RegExp.
 * @returns {void}
 */
function verify(context, node, pattern, flags) {
    try {
        let found = false

        new RegExpValidator({
            onCapturingGroupEnter(_start, name) {
                if (name) {
                    found = true
                }
            },
            onBackreference(_start, _end, ref) {
                if (typeof ref === "string") {
                    found = true
                }
            },
        }).validatePattern(pattern, 0, pattern.length, flags.includes("u"))

        if (found) {
            context.report({ node, messageId: "forbidden" })
        }
    } catch (error) {
        //istanbul ignore else
        if (error.message.startsWith("Invalid regular expression:")) {
            return
        }
        //istanbul ignore next
        throw error
    }
}

module.exports = {
    meta: {
        docs: {
            description: "disallow RegExp named capture groups.",
            category: "ES2018",
            recommended: false,
            url: "http://ota-meshi.github.io/eslint-plugin-es-x/rules/no-regexp-named-capture-groups.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2018 RegExp named capture groups are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "Literal[regex]"(node) {
                const { pattern, flags } = node.regex
                verify(context, node, pattern || "", flags || "")
            },

            "Program:exit"() {
                const scope = context.getScope()
                for (const { node, pattern, flags } of getRegExpCalls(scope)) {
                    verify(context, node, pattern || "", flags || "")
                }
            },
        }
    },
}
