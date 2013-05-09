# ActionBar Clone

## Summary

**This widget is a Work in progress.  It currently works with limited functionalities**

This widget for the Appcelerator Titanium Alloy MVC framework emulates Android's ActionBar.

![](http://developer.android.com/images/ui/actionbar-stacked.png)

**ActionBar example**

Although you can access [Android's native ActionBar from Titanium](https://gist.github.com/ricardoalcocer/5339699), you still need a way to target pre 4.0 devices.  This Widget provides an easy way of ensuring that your Android App remains true to Android's usability guidelines regardless of the Android version, and providing easy-to-use theming capabilities to match your App's UI.


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

**Portrait View - Android 4.2**

![](http://s8.postimg.org/80c6y36id/Screen_Shot_2013_05_09_at_3_07_37_PM.png)

**Landscape View - Android 4.2**

![](http://s21.postimg.org/jqpabwhuf/Screen_Shot_2013_05_09_at_3_08_01_PM.png)

**Landscape View - Android 4.2 Tablet**

![](http://s10.postimg.org/3yva8lt09/Screen_Shot_2013_05_09_at_3_16_36_PM.png)

**Portrait View - Android 2.2**

![](http://s23.postimg.org/r7n0arfxn/Screen_Shot_2013_05_09_at_3_13_48_PM.png)


## Tips

You can set your tiapp.xml to use Android's native Holo theme using the following syntax

```
<android xmlns:android="http://schemas.android.com/apk/res/android">
	<tool-api-level>14</tool-api-level>
	<manifest>
		<application android:theme="@android:style/Theme.Holo.Light"></application>
		<!-- You could also use @android:style/Theme.Holo -->
	</manifest>
</android>
```

## To-do 

* Implement menu that will open when the "inflater" is clicked


## Licenses
This project is licensed under the Apache Public License (Version 2). Please see the LICENSE.txt file for the full license.

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.