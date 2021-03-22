var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        var count = 5;
        for (var i = 1; i <= 7; i++) {
            document.write(i.toString + '<br>');
        }
        console.log('all done!');
    };
    return SimpleCounter;
}());
var count = new SimpleCounter();
console.count();
//# sourceMappingURL=test.js.map