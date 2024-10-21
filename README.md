# age-calculator

> Age-calculator is an npm package I developed that offers a convenient way for users to determine their age in multiple formats. By simply entering a date of birth, users can view their age as a complete year count, in months, days, or even down to minutes. This package demonstrates my skills in JavaScript and npm package development, providing an easy-to-use solution for accurate age calculation across various formats.

<!-- <a href="https://www.npmjs.com/package/@asif92/age-calculator"><img alt="npm" src="https://img.shields.io/npm/v/@asif92/age-calculator?color=purple&label=age-calculator&style=plastic"></a> -->
<a href="https://www.npmjs.com/package/@asif92/age-calculator"><img alt="npm" src="https://img.shields.io/npm/v/age-calculator?color=lightgreen&label=age-calculator&style=plastic"></a>
<a href="https://github.com/asif92/age-calculator/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/asif92/age-calculator?style=plastic"></a>
<a href="https://github.com/asif92/age-calculator/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/asif92/age-calculator?style=plastic"></a>
<a href="https://github.com/asif92/age-calculator/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/asif92/age-calculator?style=social"></a>
<a href="https://github.com/asif92/age-calculator/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/asif92/age-calculator?style=social"></a>


<!-- [![npm](https://img.shields.io/npm/v/@asif92/age-calculator?color=green&label=%40asif92%2Fage-calculator&style=plastic)](https://www.npmjs.com/package/@asif92/age-calculator)
[![GitHub license](https://img.shields.io/github/license/asif92/age-calculator?style=plastic)](https://github.com/asif92/age-calculator/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/asif92/age-calculator?style=social)](https://github.com/asif92/age-calculator/issues)
[![GitHub forks](https://img.shields.io/github/forks/asif92/age-calculator?style=social)](https://github.com/asif92/age-calculator/network)
[![GitHub stars](https://img.shields.io/github/stars/asif92/age-calculator?style=social)](https://github.com/asif92/age-calculator/stargazers) -->

- [Installation](#install)
- [Usage](#usage)
- [License](#license)

## Install

```
$ npm install findage --save
```

## Usage


```js
const getAge = require("findage");

// Input Format (MM/DD/YYYY)

getAge.fullAge("01/01/2000");		// 19 years 7 months 16 days
getAge.inMonths("01/01/2000");		// 235 months 16 days
getAge.inHours("01/01/2000");		// 172032 hours
getAge.inMinutes("01/01/2000");		// 10321920 minutes
getAge.inSeconds("01/01/2000");		// 619315200 seconds

```

## License

License MIT. See [License File](LICENSE) for more information.