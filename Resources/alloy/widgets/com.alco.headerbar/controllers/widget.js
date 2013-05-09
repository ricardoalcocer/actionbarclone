function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.alco.headerbar/" + s : s.substring(0, index) + "/com.alco.headerbar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function setTitle(args) {
        $.headertitle.text = args.text;
        $.headertitle.color = args.color;
    }
    function setBack(action) {
        backAction = action;
    }
    function setBlackAngle() {
        $.backangle.backgroundImage = WPATH("light-back-angle.png");
    }
    function setWhiteAngle() {
        $.backangle.backgroundImage = WPATH("white-back-angle.png");
    }
    function hideAngle() {
        $.backangle.visible = false;
    }
    function showAngle() {
        $.backangle.visible = true;
    }
    function setAppIcon(icon) {
        icon && ($.appicon.backgroundImage = icon);
    }
    function setParentContainer(handle) {
        parentWindow = handle;
    }
    function setBackground(args) {
        $.headerbar.backgroundColor = args.color;
        $.headerbar.backgroundImage = args.image;
        $.headerbar.backgroundRepeat = true;
    }
    function showBottomLine() {
        $.bottomline.visible = true;
    }
    function hideBottomLine() {
        $.bottomline.visible = false;
    }
    function setTop(top) {
        this.headerbar.top = top;
    }
    function setExtraButtons(args) {
        args.visible.forEach(function(button) {
            var payload = {
                image: button.icon
            };
            var tbbutton = Widget.createController("button", payload).getView();
            tbbutton.addEventListener("click", button.action);
            $.extraButtons.add(tbbutton);
        });
        if (args.inflater) {
            var menuoptions = "";
            var payload = {
                image: WPATH("ic_menu_moreoverflow_normal_holo_light.png")
            };
            var inflater = Widget.createController("button", payload).getView();
            args.inflater.forEach(function(button) {
                menuoptions += button.title;
            });
            inflater.addEventListener("click", function() {
                alert(menuoptions);
            });
            $.extraButtons.add(inflater);
        }
    }
    var Widget = new (require("alloy/widget"))("com.alco.headerbar");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.headerbar = Ti.UI.createView({
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#cacaca",
        id: "headerbar"
    });
    $.__views.headerbar && $.addTopLevelView($.__views.headerbar);
    $.__views.backbutton = Ti.UI.createView({
        left: "5dp",
        width: "48dp",
        height: "50dp",
        backgroundColor: "transparent",
        id: "backbutton"
    });
    $.__views.headerbar.add($.__views.backbutton);
    $.__views.backangle = Ti.UI.createView({
        left: "0",
        height: "40dp",
        width: "14dp",
        id: "backangle"
    });
    $.__views.backbutton.add($.__views.backangle);
    $.__views.appicon = Ti.UI.createView({
        left: "15dp",
        height: "30dp",
        width: "30dp",
        backgroundColor: "transparent",
        id: "appicon"
    });
    $.__views.backbutton.add($.__views.appicon);
    $.__views.headertitle = Ti.UI.createLabel({
        left: "55dp",
        color: "#000",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "headertitle"
    });
    $.__views.headerbar.add($.__views.headertitle);
    $.__views.extraButtons = Ti.UI.createView({
        right: "0dp",
        width: Ti.UI.SIZE,
        height: "50dp",
        backgroundColor: "transparent",
        visible: true,
        layout: "horizontal",
        id: "extraButtons"
    });
    $.__views.headerbar.add($.__views.extraButtons);
    $.__views.bottomline = Ti.UI.createView({
        height: "2dp",
        width: Ti.UI.FILL,
        backgroundColor: "#0082AB",
        bottom: "0",
        id: "bottomline"
    });
    $.__views.bottomline && $.addTopLevelView($.__views.bottomline);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var backAction = null;
    var parentWindow = null;
    $.headerbar.addEventListener("click", function(evt) {
        evt.cancelBubble = true;
    });
    $.backbutton.addEventListener("click", function(evt) {
        evt.cancelBubble = true;
    });
    $.backbutton.addEventListener("touchstart", function() {
        this.backgroundColor = "#000";
        this.opacity = .2;
    });
    $.backbutton.addEventListener("touchend", function() {
        this.backgroundColor = "transparent";
        this.opacity = 1;
        null === backAction ? parentWindow.close() : backAction();
    });
    exports.setTop = setTop;
    exports.setExtraButtons = setExtraButtons;
    exports.showBottomLine = showBottomLine;
    exports.hideBottomLine = hideBottomLine;
    exports.setBackground = setBackground;
    exports.setParentContainer = setParentContainer;
    exports.setAppIcon = setAppIcon;
    exports.hideAngle = hideAngle;
    exports.showAngle = showAngle;
    exports.setBlackAngle = setBlackAngle;
    exports.setWhiteAngle = setWhiteAngle;
    exports.setTitle = setTitle;
    exports.setBack = setBack;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;