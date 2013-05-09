var backAction=null;
var extraButtonAction=null;
var parentWindow=null;

//$.inflater.backgroundImage=WPATH('ic_menu_moreoverflow_normal_holo_light.png');

$.headerbar.addEventListener('click',function(evt){
	// this cancels the click event that get's fired 
	// when the parent window is clicked 
	evt.cancelBubble=true;
})

$.backbutton.addEventListener('click',function(evt){
	evt.cancelBubble=true;
})

$.backbutton.addEventListener('touchstart',function(evt){	
	this.backgroundColor="#000"
	this.opacity=0.2;
});

$.backbutton.addEventListener('touchend',function(evt){
	this.backgroundColor='transparent';
	this.opacity=1;
	(backAction===null)?parentWindow.close():backAction();
});

function setTitle(args){
	$.headertitle.text=args.text;
	$.headertitle.color=args.color;
}

function setBack(action){
	backAction=action;
}

function setBlackAngle(){
	$.backangle.backgroundImage=WPATH('light-back-angle.png');
}

function setWhiteAngle(){
	$.backangle.backgroundImage=WPATH('white-back-angle.png');
}

function hideAngle(){
	//$.backangle.width='0';
	$.backangle.visible=false;
}

function showAngle(){
	//$.backangle.width='14dp';
	$.backangle.visible=true;
}

function setAppIcon(icon){
	if (!icon){
		// hopefully I can find a way of getting the appicon
		//$.appicon.backgroundImage='/android/appicon.png'	
	}else{
		$.appicon.backgroundImage=icon;	
	}	
}

function setParentContainer(handle){
	parentWindow=handle;
}

function setBackground(args){
	$.headerbar.backgroundColor=args.color;
	$.headerbar.backgroundImage=args.image;
	$.headerbar.backgroundRepeat= true;
}

function showBottomLine(){
	$.bottomline.visible=true;
}

function hideBottomLine(){
	$.bottomline.visible=false;
}

function setTop(top){
	this.headerbar.top=top;
}

function setExtraButtons(args){
	args.visible.forEach(function(button){
		var payload={
			image:button.icon
		}
		var tbbutton=Widget.createController('button',payload).getView();
		//console.log(JSON.stringify(tbbutton));
		tbbutton.addEventListener('click',button.action);
		$.extraButtons.add(tbbutton);
	})

	if (args.inflater){
		var menuoptions='';
		var payload={
			image: WPATH('ic_menu_moreoverflow_normal_holo_light.png')
		}
		var inflater=Widget.createController('button',payload).getView();
		args.inflater.forEach(function(button){
			menuoptions+=button.title
		});
		inflater.addEventListener('click',function(e){
			alert(menuoptions);
		});
		$.extraButtons.add(inflater);
	}
}

//
exports.setTop=setTop;
exports.setExtraButtons=setExtraButtons;
exports.showBottomLine=showBottomLine;
exports.hideBottomLine=hideBottomLine;
exports.setBackground=setBackground;
exports.setParentContainer=setParentContainer;
exports.setAppIcon=setAppIcon;
exports.hideAngle=hideAngle;
exports.showAngle=showAngle;
exports.setBlackAngle=setBlackAngle;
exports.setWhiteAngle=setWhiteAngle;
exports.setTitle=setTitle;
exports.setBack=setBack;