# Available Rules

This plugin provides the following rules.

- 🔧 mark means that the `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by the rule.

## ES2022

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2022`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, `plugin:es-x/restrict-to-es2017`, `plugin:es-x/restrict-to-es2018`, `plugin:es-x/restrict-to-es2019`, `plugin:es-x/restrict-to-es2020`, and `plugin:es-x/restrict-to-es2021`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-arbitrary-module-namespace-names](./no-arbitrary-module-namespace-names.md) | disallow arbitrary module namespace names. |  |
| [es-x/no-array-string-prototype-at](./no-array-string-prototype-at.md) | disallow the `{Array,String}.prototype.at()` methods. |  |
| [es-x/no-class-fields](./no-class-fields.md) | disallow class fields. |  |
| [es-x/no-class-static-block](./no-class-static-block.md) | disallow class static block. |  |
| [es-x/no-object-hasown](./no-object-hasown.md) | disallow the `Object.hasOwn` method. |  |
| [es-x/no-private-in](./no-private-in.md) | disallow `#x in obj`. |  |
| [es-x/no-regexp-d-flag](./no-regexp-d-flag.md) | disallow RegExp `d` flag. |  |
| [es-x/no-top-level-await](./no-top-level-await.md) | disallow top-level `await`. |  |

## ES2021

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2021`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, `plugin:es-x/restrict-to-es2017`, `plugin:es-x/restrict-to-es2018`, `plugin:es-x/restrict-to-es2019`, and `plugin:es-x/restrict-to-es2020`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-logical-assignment-operators](./no-logical-assignment-operators.md) | disallow logical assignment operators. | 🔧 |
| [es-x/no-numeric-separators](./no-numeric-separators.md) | disallow numeric separators. | 🔧 |
| [es-x/no-promise-any](./no-promise-any.md) | disallow `Promise.any` function and `AggregateError` class. |  |
| [es-x/no-string-prototype-replaceall](./no-string-prototype-replaceall.md) | disallow the `String.prototype.replaceAll` method. |  |
| [es-x/no-weakrefs](./no-weakrefs.md) | disallow the `WeakRef` and `FinalizationRegistry` class. |  |

## ES2020

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2020`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, `plugin:es-x/restrict-to-es2017`, `plugin:es-x/restrict-to-es2018`, and `plugin:es-x/restrict-to-es2019`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-bigint](./no-bigint.md) | disallow `bigint` syntax and built-ins. |  |
| [es-x/no-dynamic-import](./no-dynamic-import.md) | disallow `import()` syntax. |  |
| [es-x/no-export-ns-from](./no-export-ns-from.md) | disallow `export * as ns`. |  |
| [es-x/no-global-this](./no-global-this.md) | disallow the `globalThis` variable. |  |
| [es-x/no-import-meta](./no-import-meta.md) | disallow `import.meta` meta property. |  |
| [es-x/no-nullish-coalescing-operators](./no-nullish-coalescing-operators.md) | disallow nullish coalescing operators. |  |
| [es-x/no-optional-chaining](./no-optional-chaining.md) | disallow optional chaining. |  |
| [es-x/no-promise-all-settled](./no-promise-all-settled.md) | disallow `Promise.allSettled` function. |  |
| [es-x/no-regexp-unicode-property-escapes-2020](./no-regexp-unicode-property-escapes-2020.md) | disallow the new values of RegExp Unicode property escape sequences in ES2020. |  |
| [es-x/no-string-prototype-matchall](./no-string-prototype-matchall.md) | disallow the `String.prototype.matchAll` method. |  |

## ES2019

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2019`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, `plugin:es-x/restrict-to-es2017`, and `plugin:es-x/restrict-to-es2018`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-array-prototype-flat](./no-array-prototype-flat.md) | disallow the `Array.prototype.{flat,flatMap}` method. |  |
| [es-x/no-json-superset](./no-json-superset.md) | disallow `\u2028` and `\u2029` in string literals. | 🔧 |
| [es-x/no-object-fromentries](./no-object-fromentries.md) | disallow the `Object.fromEntries` method. |  |
| [es-x/no-optional-catch-binding](./no-optional-catch-binding.md) | disallow optional `catch` binding. |  |
| [es-x/no-regexp-unicode-property-escapes-2019](./no-regexp-unicode-property-escapes-2019.md) | disallow the new values of RegExp Unicode property escape sequences in ES2019. |  |
| [es-x/no-string-prototype-trimstart-trimend](./no-string-prototype-trimstart-trimend.md) | disallow the `String.prototype.{trimStart,trimEnd}` methods. |  |
| [es-x/no-symbol-prototype-description](./no-symbol-prototype-description.md) | disallow the `Symbol.prototype.description` property. |  |

## ES2018

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2018`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, `plugin:es-x/restrict-to-es2016`, and `plugin:es-x/restrict-to-es2017`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-async-iteration](./no-async-iteration.md) | disallow async iteration. |  |
| [es-x/no-malformed-template-literals](./no-malformed-template-literals.md) | disallow template literals with invalid escape sequences. |  |
| [es-x/no-promise-prototype-finally](./no-promise-prototype-finally.md) | disallow the `Promise.prototype.finally` method. |  |
| [es-x/no-regexp-lookbehind-assertions](./no-regexp-lookbehind-assertions.md) | disallow RegExp lookbehind assertions. |  |
| [es-x/no-regexp-named-capture-groups](./no-regexp-named-capture-groups.md) | disallow RegExp named capture groups. |  |
| [es-x/no-regexp-s-flag](./no-regexp-s-flag.md) | disallow RegExp `s` flag. |  |
| [es-x/no-regexp-unicode-property-escapes](./no-regexp-unicode-property-escapes.md) | disallow RegExp Unicode property escape sequences. |  |
| [es-x/no-rest-spread-properties](./no-rest-spread-properties.md) | disallow rest/spread properties. |  |

## ES2017

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2017`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, `plugin:es-x/restrict-to-es2015`, and `plugin:es-x/restrict-to-es2016`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-async-functions](./no-async-functions.md) | disallow async function declarations. |  |
| [es-x/no-atomics](./no-atomics.md) | disallow the `Atomics` class. |  |
| [es-x/no-object-entries](./no-object-entries.md) | disallow the `Object.entries` method. |  |
| [es-x/no-object-getownpropertydescriptors](./no-object-getownpropertydescriptors.md) | disallow the `Object.getOwnPropertyDescriptors` method. |  |
| [es-x/no-object-values](./no-object-values.md) | disallow the `Object.values` method. |  |
| [es-x/no-shared-array-buffer](./no-shared-array-buffer.md) | disallow the `SharedArrayBuffer` class. |  |
| [es-x/no-string-prototype-padstart-padend](./no-string-prototype-padstart-padend.md) | disallow the `String.prototype.{padStart,padEnd}` methods. |  |
| [es-x/no-trailing-function-commas](./no-trailing-function-commas.md) | disallow trailing commas in parameter/argument lists. | 🔧 |

## ES2016

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2016`, `plugin:es-x/restrict-to-es3`, `plugin:es-x/restrict-to-es5`, and `plugin:es-x/restrict-to-es2015`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-array-prototype-includes](./no-array-prototype-includes.md) | disallow the `Array.prototype.includes` method. |  |
| [es-x/no-exponential-operators](./no-exponential-operators.md) | disallow exponential operators. |  |

## ES2015

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es2015`, `plugin:es-x/restrict-to-es3`, and `plugin:es-x/restrict-to-es5`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-array-from](./no-array-from.md) | disallow the `Array.from` method. |  |
| [es-x/no-array-of](./no-array-of.md) | disallow the `Array.of` method. |  |
| [es-x/no-array-prototype-copywithin](./no-array-prototype-copywithin.md) | disallow the `Array.prototype.copyWithin` method. |  |
| [es-x/no-array-prototype-entries](./no-array-prototype-entries.md) | disallow the `Array.prototype.entries` method. |  |
| [es-x/no-array-prototype-fill](./no-array-prototype-fill.md) | disallow the `Array.prototype.fill` method. |  |
| [es-x/no-array-prototype-find](./no-array-prototype-find.md) | disallow the `Array.prototype.find` method. |  |
| [es-x/no-array-prototype-findindex](./no-array-prototype-findindex.md) | disallow the `Array.prototype.findIndex` method. |  |
| [es-x/no-array-prototype-keys](./no-array-prototype-keys.md) | disallow the `Array.prototype.keys` method. |  |
| [es-x/no-array-prototype-values](./no-array-prototype-values.md) | disallow the `Array.prototype.values` method. |  |
| [es-x/no-arrow-functions](./no-arrow-functions.md) | disallow arrow function expressions. | 🔧 |
| [es-x/no-binary-numeric-literals](./no-binary-numeric-literals.md) | disallow binary numeric literals. |  |
| [es-x/no-block-scoped-functions](./no-block-scoped-functions.md) | disallow block-scoped function declarations. |  |
| [es-x/no-block-scoped-variables](./no-block-scoped-variables.md) | disallow block-scoped variable declarations. |  |
| [es-x/no-classes](./no-classes.md) | disallow class declarations. |  |
| [es-x/no-computed-properties](./no-computed-properties.md) | disallow computed properties. |  |
| [es-x/no-default-parameters](./no-default-parameters.md) | disallow default parameters. |  |
| [es-x/no-destructuring](./no-destructuring.md) | disallow destructuring. |  |
| [es-x/no-for-of-loops](./no-for-of-loops.md) | disallow `for-of` statements. |  |
| [es-x/no-generators](./no-generators.md) | disallow generator function declarations. |  |
| [es-x/no-map](./no-map.md) | disallow the `Map` class. |  |
| [es-x/no-math-acosh](./no-math-acosh.md) | disallow the `Math.acosh` method. |  |
| [es-x/no-math-asinh](./no-math-asinh.md) | disallow the `Math.asinh` method. |  |
| [es-x/no-math-atanh](./no-math-atanh.md) | disallow the `Math.atanh` method. |  |
| [es-x/no-math-cbrt](./no-math-cbrt.md) | disallow the `Math.cbrt` method. |  |
| [es-x/no-math-clz32](./no-math-clz32.md) | disallow the `Math.clz32` method. |  |
| [es-x/no-math-cosh](./no-math-cosh.md) | disallow the `Math.cosh` method. |  |
| [es-x/no-math-expm1](./no-math-expm1.md) | disallow the `Math.expm1` method. |  |
| [es-x/no-math-fround](./no-math-fround.md) | disallow the `Math.fround` method. |  |
| [es-x/no-math-hypot](./no-math-hypot.md) | disallow the `Math.hypot` method. |  |
| [es-x/no-math-imul](./no-math-imul.md) | disallow the `Math.imul` method. |  |
| [es-x/no-math-log10](./no-math-log10.md) | disallow the `Math.log10` method. |  |
| [es-x/no-math-log1p](./no-math-log1p.md) | disallow the `Math.log1p` method. |  |
| [es-x/no-math-log2](./no-math-log2.md) | disallow the `Math.log2` method. |  |
| [es-x/no-math-sign](./no-math-sign.md) | disallow the `Math.sign` method. |  |
| [es-x/no-math-sinh](./no-math-sinh.md) | disallow the `Math.sinh` method. |  |
| [es-x/no-math-tanh](./no-math-tanh.md) | disallow the `Math.tanh` method. |  |
| [es-x/no-math-trunc](./no-math-trunc.md) | disallow the `Math.trunc` method. |  |
| [es-x/no-modules](./no-modules.md) | disallow modules. |  |
| [es-x/no-new-target](./no-new-target.md) | disallow `new.target` meta property. |  |
| [es-x/no-number-epsilon](./no-number-epsilon.md) | disallow the `Number.EPSILON` property. |  |
| [es-x/no-number-isfinite](./no-number-isfinite.md) | disallow the `Number.isFinite` method. |  |
| [es-x/no-number-isinteger](./no-number-isinteger.md) | disallow the `Number.isInteger` method. |  |
| [es-x/no-number-isnan](./no-number-isnan.md) | disallow the `Number.isNaN` method. |  |
| [es-x/no-number-issafeinteger](./no-number-issafeinteger.md) | disallow the `Number.isSafeInteger` method. |  |
| [es-x/no-number-maxsafeinteger](./no-number-maxsafeinteger.md) | disallow the `Number.MAX_SAFE_INTEGER` property. |  |
| [es-x/no-number-minsafeinteger](./no-number-minsafeinteger.md) | disallow the `Number.MIN_SAFE_INTEGER` property. |  |
| [es-x/no-number-parsefloat](./no-number-parsefloat.md) | disallow the `Number.parseFloat` method. |  |
| [es-x/no-number-parseint](./no-number-parseint.md) | disallow the `Number.parseInt` method. |  |
| [es-x/no-object-assign](./no-object-assign.md) | disallow the `Object.assign` method. |  |
| [es-x/no-object-getownpropertysymbols](./no-object-getownpropertysymbols.md) | disallow the `Object.getOwnPropertySymbols` method. |  |
| [es-x/no-object-is](./no-object-is.md) | disallow the `Object.is` method. |  |
| [es-x/no-object-setprototypeof](./no-object-setprototypeof.md) | disallow the `Object.setPrototypeOf` method. |  |
| [es-x/no-object-super-properties](./no-object-super-properties.md) | disallow `super` property accesses in object literals. |  |
| [es-x/no-octal-numeric-literals](./no-octal-numeric-literals.md) | disallow octal numeric literals. |  |
| [es-x/no-promise](./no-promise.md) | disallow the `Promise` class. |  |
| [es-x/no-property-shorthands](./no-property-shorthands.md) | disallow property shorthands. | 🔧 |
| [es-x/no-proxy](./no-proxy.md) | disallow the `Proxy` class. |  |
| [es-x/no-reflect](./no-reflect.md) | disallow the `Reflect` class. |  |
| [es-x/no-regexp-prototype-flags](./no-regexp-prototype-flags.md) | disallow the `RegExp.prototype.flags` property. |  |
| [es-x/no-regexp-u-flag](./no-regexp-u-flag.md) | disallow RegExp `u` flag. |  |
| [es-x/no-regexp-y-flag](./no-regexp-y-flag.md) | disallow RegExp `y` flag. |  |
| [es-x/no-rest-parameters](./no-rest-parameters.md) | disallow rest parameters. |  |
| [es-x/no-set](./no-set.md) | disallow the `Set` class. |  |
| [es-x/no-spread-elements](./no-spread-elements.md) | disallow spread elements. |  |
| [es-x/no-string-fromcodepoint](./no-string-fromcodepoint.md) | disallow the `String.fromCodePoint` method. |  |
| [es-x/no-string-prototype-codepointat](./no-string-prototype-codepointat.md) | disallow the `String.prototype.codePointAt` method. |  |
| [es-x/no-string-prototype-endswith](./no-string-prototype-endswith.md) | disallow the `String.prototype.endsWith` method. |  |
| [es-x/no-string-prototype-includes](./no-string-prototype-includes.md) | disallow the `String.prototype.includes` method. |  |
| [es-x/no-string-prototype-normalize](./no-string-prototype-normalize.md) | disallow the `String.prototype.normalize` method. |  |
| [es-x/no-string-prototype-repeat](./no-string-prototype-repeat.md) | disallow the `String.prototype.repeat` method. |  |
| [es-x/no-string-prototype-startswith](./no-string-prototype-startswith.md) | disallow the `String.prototype.startsWith` method. |  |
| [es-x/no-string-raw](./no-string-raw.md) | disallow the `String.raw` method. |  |
| [es-x/no-subclassing-builtins](./no-subclassing-builtins.md) | disallow the subclassing of the built-in classes. |  |
| [es-x/no-symbol](./no-symbol.md) | disallow the `Symbol` class. |  |
| [es-x/no-template-literals](./no-template-literals.md) | disallow template literals. | 🔧 |
| [es-x/no-typed-arrays](./no-typed-arrays.md) | disallow ES2015 typed arrays. |  |
| [es-x/no-unicode-codepoint-escapes](./no-unicode-codepoint-escapes.md) | disallow Unicode code point escape sequences. | 🔧 |
| [es-x/no-weak-map](./no-weak-map.md) | disallow the `WeakMap` class. |  |
| [es-x/no-weak-set](./no-weak-set.md) | disallow the `WeakSet` class. |  |

## ES5

There are multiple configs that enable all rules in this category: `plugin:es-x/no-new-in-es5` and `plugin:es-x/restrict-to-es3`

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-accessor-properties](./no-accessor-properties.md) | disallow accessor properties. |  |
| [es-x/no-array-isarray](./no-array-isarray.md) | disallow the `Array.isArray` method. |  |
| [es-x/no-array-prototype-every](./no-array-prototype-every.md) | disallow the `Array.prototype.every` method. |  |
| [es-x/no-array-prototype-filter](./no-array-prototype-filter.md) | disallow the `Array.prototype.filter` method. |  |
| [es-x/no-array-prototype-foreach](./no-array-prototype-foreach.md) | disallow the `Array.prototype.forEach` method. |  |
| [es-x/no-array-prototype-indexof](./no-array-prototype-indexof.md) | disallow the `Array.prototype.indexOf` method. |  |
| [es-x/no-array-prototype-lastindexof](./no-array-prototype-lastindexof.md) | disallow the `Array.prototype.lastIndexOf` method. |  |
| [es-x/no-array-prototype-map](./no-array-prototype-map.md) | disallow the `Array.prototype.map` method. |  |
| [es-x/no-array-prototype-reduce](./no-array-prototype-reduce.md) | disallow the `Array.prototype.reduce` method. |  |
| [es-x/no-array-prototype-reduceright](./no-array-prototype-reduceright.md) | disallow the `Array.prototype.reduceRight` method. |  |
| [es-x/no-array-prototype-some](./no-array-prototype-some.md) | disallow the `Array.prototype.some` method. |  |
| [es-x/no-date-now](./no-date-now.md) | disallow the `Date.now` method. |  |
| [es-x/no-function-prototype-bind](./no-function-prototype-bind.md) | disallow the `Function.prototype.bind` method. |  |
| [es-x/no-json](./no-json.md) | disallow the `JSON` class. |  |
| [es-x/no-keyword-properties](./no-keyword-properties.md) | disallow reserved words as property names. |  |
| [es-x/no-object-create](./no-object-create.md) | disallow the `Object.create` method. |  |
| [es-x/no-object-defineproperties](./no-object-defineproperties.md) | disallow the `Object.defineProperties` method. |  |
| [es-x/no-object-defineproperty](./no-object-defineproperty.md) | disallow the `Object.defineProperty` method. |  |
| [es-x/no-object-freeze](./no-object-freeze.md) | disallow the `Object.freeze` method. |  |
| [es-x/no-object-getownpropertydescriptor](./no-object-getownpropertydescriptor.md) | disallow the `Object.getOwnPropertyDescriptor` method. |  |
| [es-x/no-object-getownpropertynames](./no-object-getownpropertynames.md) | disallow the `Object.getOwnPropertyNames` method. |  |
| [es-x/no-object-getprototypeof](./no-object-getprototypeof.md) | disallow the `Object.getPrototypeOf` method. |  |
| [es-x/no-object-isextensible](./no-object-isextensible.md) | disallow the `Object.isExtensible` method. |  |
| [es-x/no-object-isfrozen](./no-object-isfrozen.md) | disallow the `Object.isFrozen` method. |  |
| [es-x/no-object-issealed](./no-object-issealed.md) | disallow the `Object.isSealed` method. |  |
| [es-x/no-object-keys](./no-object-keys.md) | disallow the `Object.keys` method. |  |
| [es-x/no-object-preventextensions](./no-object-preventextensions.md) | disallow the `Object.preventExtensions` method. |  |
| [es-x/no-object-seal](./no-object-seal.md) | disallow the `Object.seal` method. |  |
| [es-x/no-string-prototype-trim](./no-string-prototype-trim.md) | disallow the `String.prototype.trim` method. |  |
| [es-x/no-trailing-commas](./no-trailing-commas.md) | disallow trailing commas in array/object literals. |  |

## Legacy

Rules in this category disallow the syntax contained in [Annex B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) or Legacy.  
The rules are not included in any preset.

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [es-x/no-date-prototype-getyear-setyear](./no-date-prototype-getyear-setyear.md) | disallow the `Date.prototype.{getYear,setYear}` methods. |  |
| [es-x/no-date-prototype-togmtstring](./no-date-prototype-togmtstring.md) | disallow the `Date.prototype.toGMTString` method. | 🔧 |
| [es-x/no-escape-unescape](./no-escape-unescape.md) | disallow `escape` and `unescape`. |  |
| [es-x/no-function-declarations-in-if-statement-clauses-without-block](./no-function-declarations-in-if-statement-clauses-without-block.md) | disallow function declarations in if statement clauses without using blocks. | 🔧 |
| [es-x/no-initializers-in-for-in](./no-initializers-in-for-in.md) | disallow initializers in for-in heads. |  |
| [es-x/no-labelled-function-declarations](./no-labelled-function-declarations.md) | disallow labelled function declarations. |  |
| [es-x/no-legacy-object-prototype-accessor-methods](./no-legacy-object-prototype-accessor-methods.md) | disallow legacy `Object.prototype` accessor methods. |  |
| [es-x/no-regexp-prototype-compile](./no-regexp-prototype-compile.md) | disallow the `RegExp.prototype.compile` method. |  |
| [es-x/no-shadow-catch-param](./no-shadow-catch-param.md) | disallow identifiers from shadowing catch parameter names. |  |
| [es-x/no-string-create-html-methods](./no-string-create-html-methods.md) | disallow HTML creation methods of string instances. |  |
| [es-x/no-string-prototype-substr](./no-string-prototype-substr.md) | disallow the `String.prototype.substr` method. |  |
| [es-x/no-string-prototype-trimleft-trimright](./no-string-prototype-trimleft-trimright.md) | disallow the `String.prototype.{trimLeft,trimRight}` methods. | 🔧 |

