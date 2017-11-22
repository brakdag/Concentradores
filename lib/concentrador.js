//concentrador

var Concentrador = function(){
this.XSM=0;
this.XAM=0;
this.P=0;
this.XB=0;
this.XA0=0;
this.XS0=0;
this.XB0=0;
this.v2 =0;
this.v1 =0;
this.L0=0;
this.L1 =0;
this.YS1=0;
this.YA1=0;
this.XS1=0;
this.XA1=0;
this.YS2=1;
}
/**
 * @param {number} XS0 {}
 * @param {number} L0 {velocidad de alimentación de la etapa kg/h}
 * @param {number} P {kilogramo de solución retenida por kilogramo de sólido inerte B} 
 * @return {Object} {retorna una matriz con la cantidades de extracto y de refinado, porcentaje de soluto extraído.}
 */

Concentrador.prototype.calcular = function(P,XA0,XS0,XB0,V2,L0)
{
this.P = P;
this.XB= 1/(1+P);
this.XS=P/(P+1);
this.XSM = (L0 * XS0 + V2* 1) / (L0 + V2)
this.XAM = (L0 * XA0 + V2* 0) / (L0 + V2)
this.XA1 = this.XS / (1+this.XSM/this.XAM)
this.XS1 = 1-this.XB-this.XA1; 
this.YA1 = 1 / (this.YS2/this.XA0 + this.XSM/this.XAM) 
this.YS1 = 1-this.YA1;
return [this.XSM,this.XAM,this.XA1,this.XS1,this.YA1,this.YS1]
}

/**
 * @function suma
 * @param  {type} x {description}
 * @param  {type} y {description}
 * @return {type} {description}
 */
function suma(x,y){
    return x+y
}
module.exports = exports= Concentrador;