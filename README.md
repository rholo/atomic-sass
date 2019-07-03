Atomic Sass
=========
Atomic is a baseline SCSS to start your own CSS Framework, define just that you need and make your own lightweight and clean CSS Framework.

Configurate your own theme to your project with your prefix, normalize or reset don't required.

define your own prefix to all classname if you need it!, learn more at http://getbem.com/naming/

#### How to start

import atomic-sass to your project and done.
```
@import 'atomic-sass/scss/atomic';
```

##### Options

this is a sample you can copy and use to configurate your own theme really fast

```
$prefix         : '';

$font-size      : 1.4rem;
$font-primary   : '';
$font-secondary : '';

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

$grid-flex      : true;
$grid-float     : false;
$grid-table     : false;

$flex-columns   : 16;
$float-columns  : 12;
$table-columns  : 12;

@import 'atomic-sass/scss/atomic';

```
