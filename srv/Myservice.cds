service MyService @(path: 'MyService') {
 
    function greetings(name:String(20)) returns String;
    function addNumbers(a:Integer, b:Integer) returns Integer;
}