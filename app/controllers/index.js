function doClick(e) {  
    alert($.label.text);
}

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
	$.browsefolder.close();
});
$.headerbar.hideBottomLine();
$.headerbar.showAngle();

//$.headerbar.setExtraButtonAction(function(){
	// this is effectively setting the value on the parent Window 
//	parentWindow.selectedPath=checkBoxes[selectedRowIndex].filePath;
//	$.browsefolder.close();
//})
//

//$.headerbar.setExtraButtons();

$.index.open();
