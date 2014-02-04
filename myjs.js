function badFunction() {
    var zeGoodLocal = 12;
    zeBadGlobal = "iAmABadGlobalVar";
}

var henry = {
    age : 37,
    beOlder : function() {this.age += 1; },
    size: {cm: 116, val: "XL"}
};

var alfred = new Person();
var mike = new Person();

function complicatedFunction(x) {
    var z = 2;
    return function (y) {
        z = z + 1;
        console.log(x + y + z);
    }
}

function evaluateFalsynessTest(testVar) {
    if (testVar){
        console.log("yes, true");
    } else {
        console.log("no, false");
    }
}

function sayHelloToEverybody() {
    var names = "";
    for (var i = 0; i < arguments.length; i++) {
        names += arguments[i] + " ";
    }
    console.log("hello " + names);
}

function sayHelloToEverybody2() {
    var names = "";
    for (var i = 0; i < arguments.length; i++) {
        names += arguments[i] + " ";
    }
    this.names = names;
    console.log("hello " + names);
}

function sayHelloToEverybody3() {
    if (true) {
        var everyBody = "every one on earth";
    }
    console.log("hello to " + everyBody);
}

function Person() {
    this.age = 37;
    this.beOlder = function() {this.age += 1; };
    this.size= {cm: 178, val: "XL"};
    return "ok"; // ok but unuseful
}


function negate(func) {
    return function(x) {
        return !func(x);
    };
}

function ok(condition, description) {

    if (condition === true) {
        console.log('%c '+ description, 'background: #222; color: #bada55');
    } else {
        console.log('%c '+ description, 'background: #222; color: #FF0000');
    }

}

var testIsEmpty = function(testedFunction) {
    ok(!testedFunction([1]), '[1] is not empty');
    ok(testedFunction([]), '[] is empty');
    ok(!testedFunction({one : 1}), '{one : 1} is not empty');
    ok(testedFunction({}), '{} is empty');
    ok(testedFunction(new RegExp('')), 'objects with prototype properties are empty');
    ok(testedFunction(null), 'null is empty');
    ok(testedFunction(), 'undefined is empty');
    ok(testedFunction(''), 'the empty string is empty');
    ok(!testedFunction('moe'), 'but other strings are not');

    var obj = {one : 1};
    delete obj.one;
    ok(testedFunction(obj), 'deleting all the keys from an object empties it');
};

var testIsArray = function(testedFunction) {
    ok(!_.isArray(undefined), 'undefined vars are not arrays');
    ok(!_.isArray(arguments), 'the arguments object is not an array');
    ok(_.isArray([1, 2, 3]), 'but arrays are');
    ok(_.isArray(iArray), 'even from another frame');
};


//create iframe for tests
var iframe = document.createElement('iframe');
iframe.frameBorder = iframe.height = iframe.width = 0
document.body.appendChild(iframe);
var iDoc = (iDoc = iframe.contentDocument || iframe.contentWindow).document || iDoc;
iDoc.write(
    "<script>\
      parent.iElement   = document.createElement('div');\
      parent.iArguments = (function(){ return arguments; })(1, 2, 3);\
      parent.iArray     = [1, 2, 3];\
      parent.iString    = new String('hello');\
      parent.iNumber    = new Number(100);\
      parent.iFunction  = (function(){});\
      parent.iDate      = new Date();\
      parent.iRegExp    = /hi/;\
      parent.iNaN       = NaN;\
      parent.iNull      = null;\
      parent.iBoolean   = new Boolean(false);\
      parent.iUndefined = undefined;\
      parent.iObject     = {};\
    </script>"
);
iDoc.close();