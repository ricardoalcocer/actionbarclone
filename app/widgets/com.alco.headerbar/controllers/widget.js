var backAction=null;
var extraButtonAction=null;
var parentWindow=null;

$.inflater.backgroundImage=WPATH('ic_menu_moreoverflow_normal_holo_light.png');

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

/*function setExtraButtonAction(action){
	extraButtonAction=action;
	$.extraButton.addEventListener('click',extraButtonAction);
}*/

function setBlackAngle(){
	$.backangle.backgroundImage=WPATH('black-back-angle.png');
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

/*
function showExtraButton(){
	//$.extraButton.borderWidth=1;
	//$.extraButton.borderColor='#000';
	$.extraButton.backgroundColor='red';
	$.extraButton.width='80dp'
	$.extraButton.height="50dp",
	$.extraButtonText.visible=true;
	//$.extraButton.addEventListener('click',extraButtonAction);
}

function hideExtraButton(){
	$.extraButton.width=0;
	$.extraButton.height=0
	$.extraButton.borderWidth=0;
	$.extraButton.borderColor='transparent'
	$.extraButton.backgroundColor='transparent'
	$.extraButtonText.visible=false;
	//$.extraButton.removeEventListener('click',extraButtonAction);
}
*/

function setTop(top){
	this.headerbar.top=top;
}

//
exports.setTop=setTop;
//exports.setExtraButtonAction=setExtraButtonAction;
//exports.showExtraButton=showExtraButton;
//exports.hideExtraButton=hideExtraButton;
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