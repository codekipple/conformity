Conformity.js
=============

jQuery plugin for equal height elements based on row rather than set.

Conformity will resize elements based on the largest element in a row rather than all elements in a set, that way your elements will not be made any larger than they need to be.

just pass your collection of elements `$('.widget').conformity()`


Using RWD?
----------

Call the script on resize, it's advised to use some kind of [debouncer](https://github.com/louisremi/jquery-smartresize) though.

Module Support
--------------
Conformity supports both AMD and CommonJS modules.

Options
-------

**Mode** - Use a soft or hard height when the elements are resized (min-height/height).

Acknowledgments
---------------

Conformity.js is based on the work of [Micah Godbolt](http://codepen.io/micahgodbolt/details/FgqLc), [Chris Coyier](http://css-tricks.com/equal-height-blocks-in-rows/) and [Stephen Akins](http://stephenakins.blogspot.co.uk/2011/01/uniform-div-heights-for-liquid-css-p.html).

License
-------

Licensed under the MIT license.