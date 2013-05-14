exports.getButton=function(args){
	// manufatures a button with mouse-down effect
	var button=Ti.UI.createView({
		height: "50dp",
		width: "50dp"
	});
	var icon=Ti.UI.createImageView({
		 height:"35dp",
		 width:"35dp",
		 image: args.image
	})
	button.add(icon);

	if (args.action){
		button.addEventListener('click',args.action);	
	}
	
	button.addEventListener('touchstart',function(evt){	
		this.backgroundColor="#000"
		this.opacity=0.2;
	});

	button.addEventListener('touchend',function(evt){
		this.backgroundColor='transparent';
		this.opacity=1;
	});

	button.addEventListener('touchmove',function(evt){
		// to-do: cancel press if finger is outside the button
	})

	if (args.title){
		button.addEventListener('longpress',function(evt){
			// to-do: Show tooltip with args.title
		})	
	}
	
	return button;
}