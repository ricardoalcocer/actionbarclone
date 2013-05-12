// setTheme will automatically set:
// setBlackAngle or setWhiteAngle
// setBackground
// setTitleColor 
//$.headerbar.setTheme('black'); 

// Start Configuration
$.headerbar.setParentContainer($.index);			// a reference to the window containing the widget
$.headerbar.setBackground({							// background color of the bar
	color:'#cacaca'
});
//$.headerbar.setAppIcon('/appiconcopy.png'); 		// if no icon is povided, the apps default one will be used
$.headerbar.setBlackAngle();						// color of the angle
$.headerbar.setTitle({								// the title of the containing window
	text:'Window Title',
	color:'#6f6f6f'
});
$.headerbar.setBack(function(){						// if angle is shown, what will happen uppon click.  If don't want the button to do anything, send empty function
	alert('Clicked home');
});

$.headerbar.hideBottomLine();						// for Holo Dark
$.headerbar.showAngle();							// show or hide
$.headerbar.setActionButtons(getExtraButtons());		// action buttons, inflater buttons and menu buttons
// End Configuration


// For clarity, I'm using a function to get the Buttons Object
// In a cross-platform scenario you'd want to have your menu options returned
// by a function so you can then decide where and how display them
function getExtraButtons(){
	return {
		visible:[
			{
				icon:'/ic_menu_copy_holo_light.png',
				title: 'Copy',
				action: function (){
					alert('Copy');
				}
			},
			{
				icon:'/ic_menu_share_holo_light.png',
				title: 'Share',
				action: function (){
					alert('Share');
				}
			}],
		inflater:[
			{
				title: 'Some Action #1',
				action: function (){
					alert('action1');
				}
			},
			{
				title: 'Some Action #2',
				action: function (){
					alert('action2');
				}
			}],
		androidmenu:[
			{
				title: 'Settings',
				action: function (){
					alert('Settings');
				}
			},
			{
				title: 'Help',
				action: function (){
					alert('Help');
				}
			},
			{
				title: 'About',
				action: function (){
					alert('About');
				}
			}
		]
	}
}

$.index.open();
