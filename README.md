# Wheel of Fortune

Creates a wheel of fortune based on [http://jsfiddle.net/jquery4u/sNYYD/](http://http://jsfiddle.net/jquery4u/sNYYD/)

Here is the [demo](http://turboturbo.be/playground/Wheel-of-Fortune/)

## Usage

	$('#foo').wof(options [,callback]);

## Options
The script comes with a lot of settings so it can be all you ever wanted.

#### wheel
Change the element of the wheel.

Default: **$(this)**

	$('#foo').wof({
		wheel: $('#bar')
	});
	
#### marker
Set an element as the marker. And oh boy, is it animated...

Default: **false**

	$('#foo').wof({
		marker: $('#marker')
	});

#### button
Enable the click event on a button, straight out of the box. When not set, the wheel will start spinning by itself.

Default: **$(this)**

	$('#foo').wof({
		button: $('#button)
	});

#### prizes
The array of prizes to share. This has to be the same as the wheel, but can be modified in this way.

Default: **false**, you need to set some prizes.

	$('#foo').wof({
		prizes: [1, 2, 3, 4, 5, 6, 7, 8]
	});

#### duration
What is the time of the aniation in milliseconds.

Default: **6000**.

	$('#foo').wof({
		duration: 10000
	});
	
#### multiple
Allow users to participate more than once.

Default: **false**. People can only win once.

	$('#foo').wof({
		multiple: false
	});

#### wonPrize
Want to set a fix ending? Now you can.

Default: **false**

	$('#foo').wof({
		wonPrize: 6
	});

#### timeout
Set a timeout on the spin. Best used when it starts automatically.

Default: **false**

	$('#foo').wof({
		wonPrize: 6
	});
	
#### easing
Set a different easing method.

Default: **'cubic-bezier(.25,0,.17,1)'**

	$('#foo').wof({
		easing: 'linear'
	});

## Callback
...

	$('#foo').wof({
		...
	}, function(){
		// Set callback functions
	});