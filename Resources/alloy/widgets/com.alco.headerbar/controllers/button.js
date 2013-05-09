function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.alco.headerbar/" + s : s.substring(0, index) + "/com.alco.headerbar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("com.alco.headerbar");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tbbutton = Ti.UI.createView({
        height: "50dp",
        width: "50dp",
        id: "tbbutton"
    });
    $.__views.tbbutton && $.addTopLevelView($.__views.tbbutton);
    $.__views.tbbuttonimage = Ti.UI.createImageView({
        id: "tbbuttonimage",
        image: "/ic_menu_copy_holo_light.png",
        height: "35dp",
        width: "35dp"
    });
    $.__views.tbbutton.add($.__views.tbbuttonimage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.tbbuttonimage.image = args.image;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;