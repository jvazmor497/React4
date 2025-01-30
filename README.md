# Práctica 4: React

En esta práctica, vamos a trabajar sobre los siguientes puntos de la documentación de react:

- [Renderizado condicional](https://es.react.dev/learn/conditional-rendering)
- [Video de lo que se pide](https://drive.google.com/file/d/1da8pTfwj6vVtNsMAbVjz7HXjoNxATBLp/view?usp=sharing)

En este práctica, se pide que crees una componente como la del video y la renderices 3 veces. En este caso, la componente tomará cuatro parámetros:

- ```colorfondo```
- ```status```
- ```src```
- ```nombreusuario```

> [!IMPORTANT]
> OJO, la componente no tomará solo parámetros de tipo `string`, si no que también podrá tomará parámetros de tipo `boolean`. En concreto, el parámetro **"status"** tomará un valor de tipo `boolean` (_p.e en la componente del medio del video status toma el valor `false` y por eso esa componente no tiene animación_). El resto de parámetros que tomará la componente serán de tipo `string`.

La componente también tendrá en cuenta lo siguiente en su definición:

Cuando se quiera renderizar y no se le pase el "src" de una imagen, se debe tomar la imagen por defecto `"anonimo.jpg"` que podéis encontrar en la descripción de esta práctica. (esto es lo que pasa justo en la componente de la derecha del video). Esto lo debéis implementar mediante dos tipos de sentencias if. Una sentencia if normal y una sentencia if de tipo ternario `? :`.

El primer tipo de sentencia if lo debéis dejarlo comentado. Debéis comentar también en una breve explicación cuál es la ventaja de utilizar el último tipo de sentencia if _(La respuesta se encuentra en la documentación)_.

Por último, como ya he comentado antes, el parámetro **status** deberá controlar con un operador de `if` si existe o no animación para la tarjeta de usuario. Esto se debe hacer también con una sentencia `if`,pero esta vez de tipo `&&`.

Por último, todos los estilos debe estar en la componente, **excepto la animación**, que **debe estar en la hoja de estilos** y a diferencia de lo que se pedía en la práctica anterior, la componente debe tomar como parámetro en su definición únicamente un objeto **(no desectructurado)**.
