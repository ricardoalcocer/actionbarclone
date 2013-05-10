# ActionBar Clone 

## Summary

This widget for the Appcelerator Titanium Alloy MVC framework emulates Android's ActionBar.  This Widgets provide enough functinality to become a mini-framework to build Android Apps that are consistent with Android usability guidelines.

###Example of ActionBar

![](http://developer.android.com/images/ui/actionbar-stacked.png)


Although you can access [Android's native ActionBar from Titanium](https://gist.github.com/ricardoalcocer/5339699), you still need a way to target pre 4.0 devices.  This Widget provides an easy way of ensuring that your Android App remains true to Android's usability guidelines regardless of the Android version, and providing easy-to-use theming capabilities to match your App's UI.


## Usage

### Features
* Tested on Android 2.2 thru 4.2, both phones and tablets
* Customizable icon
* Customizable background
* Customizable colors
* Can add "Action icons", options that will display upon clicking the "inflater" icon, and regular Android menus.

### Configuration options

| Method | Arguments |
| -------- | ---- | ------- |
| **setParentContainer** | Pointer to the Window object |
|**setBackground**|Dictionary with color property. Example: **{ color: '#000'}** |
|**setBlackAngle**|-|
|**setWhiteAngle**|-|
|**showAngle**|-|
|**hideAngle**|-|
|**setTitle**|Dictionary with text and color properties.  Example: **{ text: 'My Window',color: '#fff'}**|
|**setBack**|Instance of function to call when the back button is pressed.  Defaults to **window.close()**|
|**hideBottomLine**|-|
|**showBottomLine**|-|
|**setActionButtons**|Object containing 3 arrays: visible, inflater and Android menu.  Each array holds menu options for each button in the following format: **{icon:'icon.png',title: 'Caption',action: callback}**|

### Adding to your XML View

```
<Widget src="com.alco.headerbar" id="headerbar"/> 
```
### Configuring in your controller

```
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
$.headerbar.setBack(function(){						// if angle is shown, what will happen uppon click.  Default to closing containing window
	$.index.close();
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
```


## Screenshots

###Portrait View - Android 4.2

![](http://s17.postimg.org/71rndsl4v/Screen_Shot_2013_05_10_at_1_07_02_PM.png)

###Landscape View - Android 4.2

![](http://s21.postimg.org/jqpabwhuf/Screen_Shot_2013_05_09_at_3_08_01_PM.png)

###Landscape View - Android 4.2 Tablet

![](http://s10.postimg.org/3yva8lt09/Screen_Shot_2013_05_09_at_3_16_36_PM.png)

###Portrait View - Android 2.2

![](http://s23.postimg.org/r7n0arfxn/Screen_Shot_2013_05_09_at_3_13_48_PM.png)


## Tips

### Using Android's Holo Theme

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

### Adding even more Android native UI patterns to your Titanium Apps

Titanium does not expose some other important Android UI patterns, such as the [ViewPager](http://android-developers.blogspot.com/2011/08/horizontal-view-swiping-with-viewpager.html).  However, thanks to Titanium's capability of [creating native modules](http://docs.appcelerator.com/titanium/3.0/#!/guide/Titanium_Module_Concepts), we can use the [Android View Pager Module](https://marketplace.appcelerator.com/apps/2228?1837247646) by [@mudderman](https://twitter.com/mudderman) to add features such as [Scrolling Tabs](http://developer.android.com/design/building-blocks/tabs.html), which are very popular in Google-built apps.  You can read some [sample code here](https://github.com/mudderman/ViewPager-Module-Demo).

## To-do 

* Implement menu that will open when the "inflater" is clicked
* Add pre-defined Light and Dark themes to match Android Holo


## Licenses
This project is licensed under the Apache Public License (Version 2). Please see the LICENSE.txt file for the full license.

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2012 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.