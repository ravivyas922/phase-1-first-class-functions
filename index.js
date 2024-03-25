function receivesAFunction(func)
{
    return func();
}

function returnsANamedFunction()
{
    function namedFunction(){

    }
    return namedFunction;
}

function returnsAnAnonymousFunction()
{
    return function(){};
    
}