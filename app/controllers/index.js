// setTheme will automatically set:
// setBlackAngle or setWhiteAngle
// setBackground
// setTitleColor 
//$.headerbar.setTheme('black'); 


$.headerbar.setParentContainer($.index);
$.headerbar.setBackground({
	color:'#cacaca'
});
$.headerbar.setAppIcon('/appicon.png');
$.headerbar.setBlackAngle();
$.headerbar.setTitle({
	text:'Window Title',
	color:'#6f6f6f'
});
$.headerbar.setBack(function(){
	$.index.close();
});
$.headerbar.hideBottomLine();
$.headerbar.showAngle();
$.headerbar.setExtraButtons({
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
	});

$.index.open();
