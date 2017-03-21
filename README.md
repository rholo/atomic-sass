NT Layout
=========

Proyecto base para iniciar nuevos proyectos, estructura HTML5 y CSS3 con SASS, Puedes ver un ejemplo del proyecto base en [rholo]
Incluidas en esta version:
- headings
- paragraph
- link
- list
- button
- inputs
- table
- grids

Además incluye:
- Tres tipos de grids flex IE11+, table y por defecto (float) IE9+
- Esquema de colores UI pre establecidos utilizando [Flat UI Colors]
- Iconografía por defecto [Font Awesome]

#### Variables SASS

| variable | descripción | Valor defecto
| ------ | ------ | ------ |
| $max-width-layout | ancho máximo del layout contenedor | 90%
| $layout-spacing | margen del layout | 0 2%
| $flex-columns | N° de columnas en la grilla flex | 16
| $custom-columns | N° de columnas en la grilla por defecto | 12
| $fix-columns | N° de columnas en la grilla tipo tabla | 12
| $grid-space | margen en columnas custom y flex | .5%
| $font-size-global | % relativo al html | 62.5%
| $font-size | tamaño base para la fuente | 1.4rem

#### SASS (Colours)

| variable | descripción
| ------ | ------ |
| $colour-text | color de textos, paragraph
| $colour-link-default | color de links
| $colour-btn-default | color de fondo por defecto en un boton
| $colour-btn-primary | background para data-button primary
| $colour-btn-safe | background para data-button safe
| $colour-btn-warning | background para data-button warning
| $colour-btn-risk | background para data-button risk
| $colour-btn-minimal | background para data-button minimal
| $colour_nav-burger | color para el menú tipo burger

#### NT Classes

| Clase | Descripción |
| ------ | ------ |
| .nt_layout | define layout contenedor <main> o <div> | <main class="nt_layout">
| .nt_article | define <article> | <article class="nt_layout">
| .nt_section | define <section> y su <header> | <section class="nt_section">
| .nt_input | standard para inputs de tipo texto | <input type="text" class="nt_input">
| .nt_select | standard para <select> | <select class="nt_select">
| .nt_table | add this class to parent's <table> | <div class="nt_table"><table>...



#### Estructura Base HTML

Por definición se ha utilizado y respetado la definición de estructura de HTML5:

#### Main

```sh
<body>
    <main class="nt_layout"></main>
</body>
```
#### Article
```sh
<article class="nt_article">
    <header>...
        <section>...
    <footer>...
</article>
```
#### Section
```sh
<section class="nt_section">
    <header>...
        <div class="nt_section-content">...
    <footer>...
</section>
```
#### Navigation
```sh
<nav class="nt_main-nav-h">
	<ul>
		<li><a href="javascript:;">link</a></li>
		<!-- con iconos -->
		<li><a href="javascript:;"><i class="fa fa-*"></i>link</a></li>
		...
	</ul>
</nav>
```
#### Buttons
```sh
<button class="nt_button" data-button="default">Default</button>
<button class="nt_button" data-button="primary">Primary</button>
<button class="nt_button" data-button="safe">Confirm</button>
<button class="nt_button" data-button="warning">Atention</button>
<button class="nt_button" data-button="risk">Risk</button>
<button class="nt_button" data-button="minimal">Minimal</button>
```
#### table
```sh
<div class="nt_table">
  <table>
    ...
  </table>
<div>
```


[rholo]: <http://rholo.cl/labs/nt_layout>
[Font Awesome]: <http://fontawesome.io/get-started/>
[Flat UI Colors]: <http://flatuicolors.com/>
