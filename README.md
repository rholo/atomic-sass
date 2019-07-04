Atomic Sass
=========
Atomic is a baseline SCSS to start your own CSS Library, define just that your project need and make your own lightweight, clean and scalable css.

#### Features
- Define your own prefix to all classname if you need it!
- UI Colors defined by Color Names
- Flexbox Grid for modern browsers or Float Grid and Table Grid for olders
- Mixins and placeholders ready to use!
- Normalize or reset not needed

#### How to start

install by npm
```
npm i atomic-sass
```

install by yarn
```
yarn add atomic-sass
```
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
$optional-font  : '';

$font-primary   : $your-font;
$font-secondary : $optional-font;
$font-color     : Black;
$link-color     : MediumSlateBlue;

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
$fix-grid       : false;

$flex-columns   : 16;
$grid-space     : 0.5%;

@import 'atomic-sass/scss/atomic';

```

##### Prefix
You can define your own prefix to all classname, get more at http://getbem.com/naming/

##### NamedColors
By default we define a palette colors with named colors, modern browsers support 140 named colors, get more colors https://htmlcolorcodes.com/color-names/
