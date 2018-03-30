var Common = cc.Class({
    ctor: function() {},
    statics: {
        _instance: null,
        NUMBER_TYPE: 1,
        SIGN_TYPE: 2,
        SIGN: ["+", "-", "*", "/"]
    },
    getInstance: function() {
        if(Common._instance === null) {
            Common._instance = new Common();
        }
        return Common._instance;
    },
    getRandomInt: function(endNumber) {
        return (Math.floor(Math.random() % endNumber) + 1);
    },
    getValuePlus: function(position, choice) {
        switch (choice) {
            case 1: // value_left
                var value_left = Math.floor(Math.random() * 20) + 1;
                var value_right = Math.floor(Math.random() * 10) + 1;
                var result = value_left + value_right;
                break;
            case 2: // value_right
                var value_left = Math.floor(Math.random() * 20) + 1;
                var value_right = Math.floor(Math.random() * 10) + 1;
                var result = value_left + value_right;
                break;
            case 3: // result
                var value_left = Math.floor(Math.random() * 20) + 1;
                var value_right = Math.floor(Math.random() * 10) + 1;
                var result = value_left + value_right;
                break;
            default:
                break;
        }
    },
    getValueMinus: function(position, choice) {
        switch (choice) {
            case 1: // value_left
                var value_left = Math.floor(Math.random() * 20) + 1;
                var value_right = Math.floor(Math.random() * 10) + 1;
                var result = value_left - value_right;
                break;
            case 2: // value_right
                var value_left = Math.floor(Math.random() * 20) + 1;
                var value_right = Math.floor(Math.random() * 10) + 1;
                var result = value_left - value_right;
                break;
            case 3: // result
                var value_left = Math.floor(Math.random() * 20) + 1;
                var value_right = Math.floor(Math.random() * 10) + 1;
                var result = value_left - value_right;
                break;
            default:
                break;
        }

    },
    getValueMultiply: function(position, choice) {
        switch (choice) {
            case 1: // value_left
                var value_left = Math.floor(Math.random() * 10) + 1;
                var value_right = Math.floor(Math.random() * 5) + 1;
                var result = value_left * value_right;
                break;
            case 2: // value_right
                var value_left = Math.floor(Math.random() * 10) + 1;
                var value_right = Math.floor(Math.random() * 5) + 1;
                var result = value_left * value_right;
                break;
            case 3: // result
                var value_left = Math.floor(Math.random() * 10) + 1;
                var value_right = Math.floor(Math.random() * 5) + 1;
                var result = value_left * value_right;
                break;
            default:
                break;
        }
    },
    getValueDivide: function(position, choice) {
        switch (choice) {
            case 1: // value_left
                var value_right = Math.floor(Math.random() * 5) + 1;
                var result = this.getRandomInt(10);
                var value_left = value_right * result;
                break;
            case 2: // value_right
                var value_right = Math.floor(Math.random() * 5) + 1;
                var result = this.getRandomInt(10);
                var value_left = value_right * result;
                break;
            case 3: // result
                var value_right = Math.floor(Math.random() * 5) + 1;
                var result = this.getRandomInt(10);
                var value_left = value_right * result;
                break;
            default:
                break;
        }
    },
    getNewResult: function(type) {
        var answer = {};
        var rs = {};
        if(type === Common.NUMBER_TYPE) {

            var sign = Common.SIGN[Common.getRandomInt(4) - 1];
            var position = Common.getRandomInt(4);
            var choice = Common.getRandomInt(3);
            switch (sign) {
                case 0: // +
                    this.getValuePlus(position, choice);
                    break;
                case 1: // -
                    this.getValueMinus(position, choice);
                    break;
                case 2: // *
                    this.getValueMultiply(position, choice);
                    break;
                case 3:// /
                    this.getValueDivide(position, choice);
                    break;
                default:
                    break;
            }

        } else {
            answer.answers = Common.SIGN;
            var value_left = 0, value_right = 0, result = 0;

            var choice = Math.floor(Math.random() % 4);
            answer.choice = choice;
            switch (choice) {
                case 0:
                    result = Math.floor(Math.random() % 19) + 2;
                    value_left = this.getRandomInt(result - 1);
                    value_right = result - value_left;
                    break;
                case 1:
                    value_left = Math.floor(Math.random() % 19) + 2;
                    value_right = this.getRandomInt(value_left - 1);
                    result = value_left - value_right;
                    break;
                case 2:
                    value_left = this.getRandomInt(15);
                    value_right = Math.floor(90 / value_left);
                    result = value_left * value_right;
                    break;
                case 3:
                    result = this.getRandomInt(9);
                    value_right = this.getRandomInt(7);
                    value_left = result * value_right;
                    break;
                default:
                    break;
            }
            rs.operator = [value_left, value_right, result];
            rs.answer = answer;
        }
        return rs;
    }

});