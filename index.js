function receivesAFunction(callback)
{
    return callback();
}
function returnsANamedFunction()
{
    return function namedFunction(){ console.log("Hi.")};
}
function returnsAnAnonymousFunction()
{
    return function()
    {console.log("Hi.")
}
}