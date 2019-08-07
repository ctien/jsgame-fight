var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
};

TeslaModelS.prototype = function () {
    this.make = "something 1";
    var go = function () {
        // Rotate wheels
        console.log(this.make, make);
    };

    var stop = function () {
        // Apply brake pads
        console.log('run');
    };

    return {
        "stop": stop,
        "go": go
    };

}();

var TeslaCar = new TeslaModelS();
TeslaCar.go();

// console.log("something");