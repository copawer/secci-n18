
function factorial(n) {
    var n
    var factorial=1;
    if(n<=0){
        return null;
    } else {
        while (n!=0){
            factorial = factorial * n ;
            n--
        }
        return factorial
    }


}