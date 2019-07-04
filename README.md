Atomic Sass
=========
Atomic is a baseline SCSS to start your own CSS Framework, define just that your project need and make your own lightweight, clean and scalable css.

Normalize or reset don't required!

#### Features
    - Define your own prefix to all classname if you need it!, get more at http://getbem.com/naming/
    - Using ColorName, modern browsers support 140 named colors, get all of theme https://htmlcolorcodes.com/color-names/
    - Flexbox Grid for modern browsers or Float Grid and Table Grid for olders
    - mixins and placeholders ready to use!
#### How to start

import atomic-sass to your project and done.
```
@import 'atomic-sass/scss/atomic';
```

##### Create your own theme

this is a sample you can use to configurate your own theme really fast

```
$prefix         : 'at-';

$font-size      : 1.4rem;

$your-font      : '';
$other-font     : '';
$font-primary   : $your-font;
$font-secondary : $other-font;

$red            : Crimson;
$green          : DarkCyan;
$blue           : MediumBlue;
$orange         : DarkOrange;
$yellow         : Gold;
$violet         : DarkViolet;
$grey           : DarkGrey;

$inputs         : true;
$buttons        : true;
$table          : false;

$flex-grid      : true;
$float-grid     : false;
$fix-grid       : false

$flex-columns   : 16;
$grid-space     : 0.5%;

$red            : Crimson;
$green          : DarkCyan;
$blue           : MediumBlue;
$orange         : DarkOrange;
$yellow         : Gold;
$violet         : DarkViolet;
$grey           : DarkGrey;

@import 'atomic-sass/scss/atomic';

```
