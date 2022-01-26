var exec = require('cordova/exec');

// exports.payWithEzeTap = function (configObj, orderObj, success, error) {
//     exec(success, error, 'EzeTapWrapper', 'payWithEzeTap', [JSON.stringify(configObj), JSON.stringify(orderObj)]);
// };

export class PayEzap {
    constructor() {}

    payWithEzeTap(configObj, orderObj, success, error) {
        exec(success, error, 'EzeTapWrapper', 'payWithEzeTap', [JSON.stringify(configObj), JSON.stringify(orderObj)]);
    };

}
