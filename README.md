Rocket
=========
Rocket is a baseline SCSS to start your own CSS Framework, define just that you need and make your own lightweight and clean CSS Framework.

Configurate your own theme to your project with your prefix, normalize or reset don't required.

#### How to start

create your config.scss file in your project, import rocket-builder.scss and done.
```
@import '~/rocket-sass/rocket-builder'
```
this is a sample you can copy and use to configurate your own theme really fast

```
// define your prefix
$prefix         : '';

// this font-size scale all headings and paragraph
$font-size      : 1.4rem;

// by default we use OS Font
$font-primary   : '';
$font-secondary : '';

// Modern browsers support 140 named colors!
$red            : Crimson;
$green          : DarkCyan;
$blue           : MediumBlue;
$orange         : DarkOrange;
$yellow         : Gold;
$violet         : DarkViolet;
$grey           : DarkGrey;

// here you can add or remove HTML Elements styles if you dont need it
$inputs         : true;
$buttons        : true;
$table          : false;

// Three kind of grids system
$grid-flex      : true;
$grid-float     : false;
$grid-table     : false;

// define your columns for grids
$flex-columns   : 16;
$float-columns  : 12;
$table-columns  : 12;


```


[rholo]: <http://rholo.cl/labs/layout-base>
