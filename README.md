Rocket
=========
Rocket is a baseline SCSS to start your own CSS Framework.

Included:
- headings
- paragraph
- link
- list
- buttons
- inputs
- table
- grids

and more:
- three kind of grids, flex included for IE11+, and two standard grids for older
- UI pallette colours using [Flat UI Colors]
- Icons ready to use [Font Awesome]

#### Now add custom prefix to all classname
now you can make your own $prefix for all classname

#### three type's grid (flex included!)
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

#### Layout
by definition this is make under a standard HTML5 structure

#### Main
add class "layout" to define your main layout
```sh
<body>
    <main class="layout"></main>
</body>
```
#### Article
```sh
<article class="article">
    <header>...
        <section>...
    <footer>...
</article>
```

#### Section
```sh
<section class="section">
    <header>...
        <div class="section-content">...
    <footer>...
</section>
```

#### Navigation
```sh
<nav class="main-nav-h">
	<ul>
		<li><a href="javascript:;">link</a></li>
		<!-- include font-awesome icon -->
		<li><a href="javascript:;"><i class="fa fa-*"></i>link</a></li>
		...
	</ul>
</nav>
```

#### Buttons
```sh
<!-- default color -->
<button class="button button-default" data-button="default">Default</button>
<button class="button button-primary" data-button="primary">Primary</button>
<button class="button button-safe" data-button="safe">Confirm</button>
<button class="button button-warning" data-button="warning">Atention</button>
<button class="button button-risk" data-button="risk">Risk</button>
<button class="button button-minimal" data-button="minimal">Minimal</button>
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
[Font Awesome]: <http://fontawesome.io/get-started/>
[Flat UI Colors]: <http://flatuicolors.com/>
