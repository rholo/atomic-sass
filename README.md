Rocket
=========
Rocket is a baseline SCSS to start your own CSS Framework, define just that you need and make your own lightweight and clean CSS Framework.

#### How to start

create your config scss file in your project
```
config.scss
```
this is a sample you can copy and use

```
// define your prefix
$prefix         : '';

// this font-size scale all headings and paragraph
$font-size      : 1.4rem;

// by default we use OS Font
$font-primary   : '';
$font-secondary : '';

// Modern browsers support 140 named colors
$red            : Crimson;
$green          : DarkCyan;
$blue           : MediumBlue;
$orange         : DarkOrange;
$yellow         : Gold;
$violet         : DarkViolet;
$grey           : DarkGrey;

// here add or remove if you dont need it
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

#### add your own prefix to all classname
now you can make your own $prefix for all classname in just one variable!

#### three type's grids
to define margin in float and flex grid $grid-space: .5%

| grid type | Number of columns
| ------ | ------ |
| $grid-flex | 16
| $grid-float | 12
| $grid-fix | 12

#### Layout Variables
| variable | description | default value
| ------ | ------ |
| $layout-min-width |280px
| $layout-max-width | 100%
| $layout-padding | 0 2%
| $layout-margin | 0

#### Fonts
| variable | description | default value
| ------ | ------ | ------ |
| $font-size-global | relative to HTML | 62.5%
| $font-size | Base size | 1.2rem

#### Colour Variables

| variable | description
| ------ | ------ |
| $colour-text | text and paragraph
| $colour-link-default | default link colour
| $colour-btn-default | default button
| $colour-btn-primary | primary button
| $colour-btn-safe | safe button (usually use for save, accept, send interaction)
| $colour-btn-warning | warning button (to warning user)
| $colour-btn-risk | risk button (to advice user)
| $colour-btn-minimal | minimal button
| $colour_nav-burger | define color of your burger navigation

#### mixins

| mixin | use | variable
| ------ | ------ | ------ |
| circle | make a perfect circle | @include circle(size)
| float | add float left or right and clear elements | @include float(float)
| push-auto | center element | @include push-auto()
| opacity | use this to give opacity | @include opacity(opacity)
| background | set your background image | @include background(image,size,position,repeat)
| center-flex | automatically center a div | center-flex($height)
| absolute-center | make a element center on body | absolute-center(width,height)
| transition | add transitions to your element | transition(arguments)


#### Buttons
```sh
<!-- default color -->
<button class="button button-default">Default</button>
<button class="button button-primary">Primary</button>
<button class="button button-safe">Confirm</button>
<button class="button button-warning">Atention</button>
<button class="button button-risk">Risk</button>
<button class="button button-minimal">Minimal</button>
```

#### Basic Table
```sh
<div class="table">
  <table>...
```
#### Responsive Table
```sh
<div class="table table-responsive">
  <table>
    <thead>...
        <tr>...
            <th>title
    <tbody>...
        <tr>..
            <td data-label="title">
  </table>
<div>
```

[rholo]: <http://rholo.cl/labs/layout-base>
