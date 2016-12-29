function stringMultiplicar(n) {
var j=0;
var resultado="";
    for(var i=1; i<=10 ;i++)
        {
            j1=n*i;
            resultado +=n+"x"+i+"="+j1;
            if((i+1)<=10)
                {
                   resultado +="/";
                }
        }
    return resultado;

}