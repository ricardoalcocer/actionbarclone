function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        exitOnClose: true,
        navBarHidden: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.headerbar = Alloy.createWidget("com.alco.headerbar", "widget", {
        id: "headerbar",
        __parentSymbol: $.__views.index
    });
    $.__views.headerbar.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.headerbar.setParentContainer($.index);
    $.headerbar.setBackground({
        color: "#cacaca"
    });
    $.headerbar.setAppIcon("/appicon.png");
    $.headerbar.setBlackAngle();
    $.headerbar.setTitle({
        text: "Window Title",
        color: "#6f6f6f"
    });
    $.headerbar.setBack(function() {
        $.index.close();
    });
    $.headerbar.hideBottomLine();
    $.headerbar.showAngle();
    $.headerbar.setExtraButtons({
        visible: [ {
            icon: "/ic_menu_copy_holo_light.png",
            title: "Copy",
            action: function() {
                alert("Copy");
            }
        }, {
            icon: "/ic_menu_share_holo_light.png",
            title: "Share",
            action: function() {
                alert("Share");
            }
        } ],
        inflater: [ {
            title: "Some Action #1",
            action: function() {
                alert("action1");
            }
        }, {
            title: "Some Action #2",
            action: function() {
                alert("action2");
            }
        } ]
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;