Class: TinyAlert {#TinyAlert}
=============================




TinyAlert Method: constructor {#TinyAlert:constructor}
-------------------------------------------------------

### Notes:

- version 1.3

### Syntax:

	var myTinyAlert = new TinyAlert(opt);

### Arguments:

1. opt - (*object*,optional) Initial options for the class.

### Options:

* el - (*element*, defaults to window)  Element where Alert will be inject.
* position - (*string*, defaults to 'tr')  Position to show tr, tl ,br ,bl.
* delay - (*integer*, defaults to 3000)  Duration time.
* skin - (*string*, defaults to 'blue') Set TinyAlert skin.

### Returns:

* (*object*) A new *TinyAlert* instance.



TinyAlert Method: show {#TinyAlert:show}
-----------------------------------------


### Syntax:

	show(title, message, icon, callback)


### Arguments:

1. title - (*string*)  Your alert title.
2. msg - (*string*,optional)  Your alert message body.
3. img - (*string*,optional)  Path to your icon.
4. callback - (*function*,optional)  Function to callback on click.




