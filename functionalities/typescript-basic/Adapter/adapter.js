var iphone7 = /** @class */ (function () {
    function iphone7() {
    }
    iphone7.prototype.useLightning = function () {
        console.log('use lightning port ..');
    };
    return iphone7;
}());
var GooglePixet = /** @class */ (function () {
    function GooglePixet() {
    }
    GooglePixet.prototype.useMicroUSB = function () {
        console.log('using microUSB');
    };
    return GooglePixet;
}());
var LightningtoMicroUSBAdapter = /** @class */ (function () {
    function LightningtoMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningtoMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log('want to use micro USB, converting to Lightning.....');
        this.iphoneDevice.useLightning();
    };
    return LightningtoMicroUSBAdapter;
}());
var iphone = new iphone7();
var changeAdapter = new LightningtoMicroUSBAdapter(iphone);
changeAdapter.useMicroUSB();
