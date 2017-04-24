Base Layout
=========
Base layout is a initial clean SASS proyecto based on standard HTML5 structure, stay for more... [rholo]

Included:
- headings
- paragraph
- link
- list
- button
- inputs
- table
- grids

and more:
- three kind of grids, flex included for IE11+, and two standard grids for older
- UI pallette colours defined by [Flat UI Colors]
- Icons ready to use with [Font Awesome]

#### Now add custom prefix to all classname
now you can edit your $prefix variable to add all classname!

#### three type's grid (flex included!)
to define margin in float and flex grid $grid-space: .5%

| grid type | Number of columns
| ------ | ------ |
| $flex-columns | 16
| $custom-columns | 12
| $fix-columns | 12

#### Layout Variables
| variable | description | default value
| ------ | ------ | ------ |
| $max-width-layout | max-width of your Main Layout | 90%
| $layout-spacing | margin layout | 0 2%

#### Fonts
| variable | description | default value
| ------ | ------ | ------ |
| $font-size-global | relative to HTML | 62.5%
| $font-size | Base size | 1.4rem

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

#### Default classname
| Clase | Description |
| ------ | ------ |
| .main-layout | define main content layour <main> or <div> element|
| .article | define <article> |
| .section | define <section> and its childs <header> and <footer> |
| .input | default input type text |
| .select | default for <select> |
| .table | add this class to parent's <table> <div class="table"><table>...

#### Layout Base HTML
Standard HTML5 definition, remind if you define $prefix you need add this name to your markup: if your prefix is 'myPrefix' then classname will be myPrefix-main-layout

#### Main
add class "layout" to define your main layout
```sh
<body>
    <main class="main-layout"></main>
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
<button class="button" data-button="default">Default</button>
<button class="button" data-button="primary">Primary</button>
<button class="button" data-button="safe">Confirm</button>
<button class="button" data-button="warning">Atention</button>
<button class="button" data-button="risk">Risk</button>
<button class="button" data-button="minimal">Minimal</button>
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
