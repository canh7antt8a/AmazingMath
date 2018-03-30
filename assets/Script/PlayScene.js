cc.Class({
    extends: cc.Component,

    properties: {
        answer_value: [cc.Label]
    },

    onTouchItem: function(event, data) {
        cc.log("event:", event);
        cc.log("data:", data);
    },


    start: function() {

    }

    // update (dt) {},
});
