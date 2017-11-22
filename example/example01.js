/**
 * Problema:
 * 500 Kg de un mineral de cobre, de composición 12% de SO4Cu, 
 * 3% de H2O y 85% de inertes, se somete a extracción con 3000
 * kg  de agua en un contacto sencillo. La cantidad de disolución retenida
 * por los sólidos es de 0,8 Kg/kg de inerte.
 * Calcular:
 * a) Las composiciones del flujo superior o extracto y del flujo
 * inferior o refinado.   (Y1,X1)
 * b) Las cantidades de extracto y de refinado. (L1,V1)
 * c) El porcentaje de SO4Cu extraído.
 */

const concent = require("../lib/concentrador.js")
var c = new concent();
console.log(c.calcular(0.8,0.12,0.03,0.85,3000,500));
