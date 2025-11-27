export interface Figure {
  color: string
  a: number
  b?: number
  c?: number
}
export class Triangle implements Figure {
  constructor (
    public color: string,
    public a: number,
    public b: number,
    public c: number
  ) {
    if(a <= 0|| b <= 0 || c <= 0){
    throw new Error("Alguem comprimento é menor ou igual a 0")
  }
    let maiorLado: number;
   let menor1: number;
   let menor2: number;

   if(a > b && a > c){
    maiorLado = a
    menor1 = b
    menor2 = c
   }
   if(b > a && b > c){
    maiorLado = b
    menor1 = a
    menor2 = c
   }
   if(c > a && c > b){
    maiorLado = c
    menor1 = a
    menor2 = b
   }
   if(maiorLado >= menor1 + menor2){
    throw new Error(`os lados ${a} ${b} e ${c} não podem formar um triângulo`)
   }
  }
}

export class Circle implements Figure {
  constructor (
    public color: string,
    public a: number,
    public b?: number,
    public c?: number
  ) {
    if(a <= 0|| b <= 0 || c <= 0){
    throw new Error("Alguem comprimento é menor ou igual a 0")
  }
}
}
export class Rectangle implements Figure {
  constructor (
    public color: string,
    public a: number,
    public b?: number,
    public c?: number
  ) {
    if(a <= 0|| b <= 0 || c <= 0){
    throw new Error("Alguem comprimento é menor ou igual a 0")
  }
}
}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
