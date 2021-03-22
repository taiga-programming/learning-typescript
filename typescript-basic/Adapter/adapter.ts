// tsc adapter.ts && node adapter.js
interface Iphone {
    useLightning();
}

interface Android {
    useMicroUSB();
}


class iphone7 implements Iphone {
    useLightning() {
        console.log('use lightning port ..');
    }
}

class GooglePixet implements Android {
    useMicroUSB() {
        console.log('using microUSB');
    }
}

class LightningtoMicroUSBAdapter implements Android {
    iphoneDevice: Iphone;
    
    constructor(iphone: Iphone ) {
        this.iphoneDevice = iphone;
    }


    public useMicroUSB() {
        console.log('want to use micro USB, converting to Lightning.....');
        this.iphoneDevice.useLightning();
    } 
}

let iphone = new iphone7();

let changeAdapter = new LightningtoMicroUSBAdapter(iphone);

changeAdapter.useMicroUSB();
