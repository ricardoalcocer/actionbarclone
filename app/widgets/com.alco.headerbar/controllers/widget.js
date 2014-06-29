var backAction=null;
var extraButtonAction=null;
var parentWindow=null;

var buttonFactory=require(WPATH('button'));

// set default app icon, in case no icon is provided
$.appicon.backgroundImage='/appicon.png'	

function openInflater(evt){
	// need to code this part
	alert('Open the Inflater');
}

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
	(!backAction)?parentWindow.close():backAction();
});

function setTitle(args){
	$.headertitle.text=args.text;
	$.headertitle.color=args.color;
}

function setTitleAction(action){
	$.headertitle.addEventListener('click',action);
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
	$.appicon.backgroundImage=icon;	
}

function setParentContainer(handle){
	parentWindow=handle;
}

function setBackground(args){
	(args.image)?$.headerbar.backgroundImage=args.image:$.headerbar.backgroundImage=WPATH('lightbg.png');
	$.headerbar.backgroundColor=args.color;
	
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

function setActionButtons(args){
	if (args.visible){
		args.visible.forEach(function(button){
			var payload={
				image:button.icon,
				action: button.action,
				title: button.title
			}
			var tbbutton=buttonFactory.getButton(payload);
			$.actionButtons.add(tbbutton);
		})
	}

	if (args.inflater){
		var menuoptions='';
		var payload={
			image: WPATH('ic_menu_moreoverflow_normal_holo_light.png')
		}
		
		var inflater=buttonFactory.getButton(payload);
		args.inflater.forEach(function(button){
			// here I gather all the menu options and build a dropdown menu
			menuoptions+=button.title
		});
		inflater.addEventListener('click',openInflater);
			
		$.actionButtons.add(inflater);
	}

	if (args.androidmenu){
		parentWindow.activity.onCreateOptionsMenu = function(e){
			var menu = e.menu;
			args.androidmenu.forEach(function(button){
				var menuItem = menu.add({ 
					title: button.title,
					icon: '/ic_menu_copy_holo_light.png',
					showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
				});
				menuItem.addEventListener("click", button.action);
			})
		}
	}
}
//
exports.setTop=setTop;
exports.setActionButtons=setActionButtons;
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
exports.setTitleAction=setTitleAction;
exports.setBack=setBack;
