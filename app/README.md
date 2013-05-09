# ActionBar Clone

## Summary

**This widget is a Work in progress.  It currently works with limited functionalities**

This widget for the Appcelerator Titanium Alloy MVC framework emulates Android's ActionBar.

Starting on Android 4.0, a new navigation paradigm has been introduced for Android Devices, in which a bar is provided on the top of each screen, from which you can access "Menu Items" represented as icons.

Although you can access [Android's native ActionBar from Titanium](https://gist.github.com/ricardoalcocer/5339699), you still need a way to target pre 4.0 devices.  This Widget provides an easy way of ensuring that your Android App remains true to Android's usability guidelines regardless of the Android version.

## Usage

### Adding to your XML View

```
<Widget src="com.alco.headerbar" id="headerbar"/> 
```
### Configuring in your controller

```
$.headerbar.setParentContainer($.index);
$.headerbar.setBackground({
	color:'#cacaca'
});
$.headerbar.setAppIcon('/appicon.png');
$.headerbar.setBlackAngle();
$.headerbar.setTitle({
	text:'Window Title',
	color:'#000'
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
			}]
	});

```


## Screenshots

**Portrait View**

![](http://s23.postimg.org/vppob5nxn/Screen_Shot_2013_05_09_at_10_11_24_AM.png)

**Landscape View**

![](http://s17.postimg.org/wcr99ll6n/Screen_Shot_2013_05_09_at_10_11_40_AM.png)


## To-do 

* Implement menu that will open when the "inflater" is clicked


## Licenses
This project is licensed under the Apache Public License (Version 2). Please see the LICENSE.txt file for the full license.

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.