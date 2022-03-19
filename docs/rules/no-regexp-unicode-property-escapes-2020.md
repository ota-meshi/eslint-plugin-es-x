---
title: "es-x/no-regexp-unicode-property-escapes-2020"
description: "disallow the new values of RegExp Unicode property escape sequences in ES2020"
---

# es-x/no-regexp-unicode-property-escapes-2020
> disallow the new values of RegExp Unicode property escape sequences in ES2020

- ❗ <badge text="This rule has not been released yet." vertical="middle" type="error"> ***This rule has not been released yet.*** </badge>
- ✅ The following configurations enable this rule: `plugin:es-x/no-new-in-es2020`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, `plugin:es-x/restrict-to-es2017`, `plugin:es-x/restrict-to-es2018`, and `plugin:es-x/restrict-to-es2019`

This rule reports the new values of ES2018 [RegExp Unicode property escape sequences](https://github.com/tc39/proposal-regexp-unicode-property-escapes#readme) which were added in ES2020.

For example, the following patterns are valid in ES2020, but syntax error in ES2019 environments:

- `\p{Script=Elym}`
- `\p{Script=Elymaic}`
- `\p{Script=Hmnp}`
- `\p{Script=Nand}`
- `\p{Script=Nandinagari}`
- `\p{Script=Nyiakeng_Puachue_Hmong}`
- `\p{Script=Wancho}`
- `\p{Script=Wcho}`

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad">

```js
/*eslint es-x/no-regexp-unicode-property-escapes-2020: error */
const r1 = /\p{Script=Elym}/u
const r2 = /\p{Script=Elymaic}/u
```

</eslint-playground>

## 📚 References

- [Rule source](https://github.com/ota-meshi/eslint-plugin-es-x/blob/master/lib/rules/no-regexp-unicode-property-escapes-2020.js)
- [Test source](https://github.com/ota-meshi/eslint-plugin-es-x/blob/master/tests/lib/rules/no-regexp-unicode-property-escapes-2020.js)
