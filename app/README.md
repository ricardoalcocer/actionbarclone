# ActionBar Clone

## Summary

**This widget is a Work in progress.  It currently works with limited functionalities**

This widget for the Appcelerator Titanium Alloy MVC framework emulates Android's ActionBar.

Starting on Android 4.0, a new navigation paradigm has been introduced for Android Devices, in which a bar is provided on the top of each screen, from which you can access "Menu Items" represented as icons.

Although you can access Android's native ActionBar from Titanium, you still need a way to target pre 4.0 devices.  This Widget provides an easy way of ensuring that your Android App remains true to Android's usability guidelines regardless of the Android version.

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
```


## Screenshots

**Portrait View**

![](http://s23.postimg.org/vppob5nxn/Screen_Shot_2013_05_09_at_10_11_24_AM.png)

**Landscape View**

![](http://s17.postimg.org/wcr99ll6n/Screen_Shot_2013_05_09_at_10_11_40_AM.png)


## To-do 

* Currently buttons are hardcoded.  Provide a way of specifying buttons to include
* Implement "Inflater" which will open a view with additional options


## Licenses
This project is licensed under the Apache Public License (Version 2). Please see the LICENSE.txt file for the full license.

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.