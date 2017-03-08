# NT Layout

Proyecto base para iniciar nuevos proyectos, basado en SASS
Puedes ver un ejemplo del proyecto base en [rholo]

### Incluidas en esta version
  - headings
  - paragraph
  - link
  - list
  - button
  - inputs
  - table
  - grids

tambien incluye:
- Tres tipos de grids flex IE11+, table y por defecto IE9+
- Configurado por defecto para utilizar iconografía desde [font-awesome]
#### npm package pronto

```sh
npm install [nt_layout]
```

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
| $colour-btn-primary | background para data-button primary
| $colour-btn-safe | background para data-button safe
| $colour-btn-warning | background para data-button warning
| $colour-btn-risk | background para data-button risk
| $colour-btn-minimal | background para data-button minimal
| $colour_nav-burger | color para el menú tipo burger

#### .nt_classes

| Clase | Descripción | Uso
| ------ | ------ | ------ |
| .nt_layout | define layout contenedor <main> o <div> | <main class="nt_layout">
| .nt_article | define <article> | <article class="nt_layout">
| .nt_section | define <section> y su <header> | <section class="nt_section">
| .nt_input | standard para inputs de tipo texto | <input type="text" class="nt_layout">
| .nt_select | standard para <select> | <select class="nt_select">

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
[rholo]: <http://rholo.cl/labs/nt_layout>
[font-awesome]: <http://fontawesome.io/get-started/>
