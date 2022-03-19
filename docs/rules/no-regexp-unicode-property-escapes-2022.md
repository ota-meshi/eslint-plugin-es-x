---
title: "es-x/no-regexp-unicode-property-escapes-2022"
description: "disallow the new values of RegExp Unicode property escape sequences in ES2022"
---

# es-x/no-regexp-unicode-property-escapes-2022
> disallow the new values of RegExp Unicode property escape sequences in ES2022

- ❗ <badge text="This rule has not been released yet." vertical="middle" type="error"> ***This rule has not been released yet.*** </badge>
- ✅ The following configurations enable this rule: `plugin:es-x/no-new-in-es2022`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, `plugin:es-x/restrict-to-es2017`, `plugin:es-x/restrict-to-es2018`, `plugin:es-x/restrict-to-es2019`, `plugin:es-x/restrict-to-es2020`, and `plugin:es-x/restrict-to-es2021`

This rule reports the new values of ES2018 [RegExp Unicode property escape sequences](https://github.com/tc39/proposal-regexp-unicode-property-escapes#readme) which were added in ES2022.

For example, the following patterns are valid in ES2022, but syntax error in ES2020 environments:

- `\p{Script=Cpmn}`
- `\p{Script=Cypro_Minoan}`
- `\p{Script=Old_Uyghur}`
- `\p{Script=Ougr}`
- `\p{Script=Tangsa}`
- `\p{Script=Tnsa}`
- `\p{Script=Toto}`
- `\p{Script=Vith}`
- `\p{Script=Vithkuqi}`

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad">

```js
/*eslint es-x/no-regexp-unicode-property-escapes-2022: error */
const r1 = /\p{Script=Cpmn}/u
const r2 = /\p{Script=Cypro_Minoan}/u
```

</eslint-playground>

## 📚 References

- [Rule source](https://github.com/ota-meshi/eslint-plugin-es-x/blob/master/lib/rules/no-regexp-unicode-property-escapes-2022.js)
- [Test source](https://github.com/ota-meshi/eslint-plugin-es-x/blob/master/tests/lib/rules/no-regexp-unicode-property-escapes-2022.js)
