export interface Figure {
  color: 'red' | 'green' | 'blue'
  shape: 'triangle' | 'circle' | 'rectangle'
  a: number
  b?: number
  c?: number
  
  getArea(): number
}
export class Triangle implements Figure {
  constructor (
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public shape: 'triangle',
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
  getArea(): number {
  const p = (this.a + this.b + this.c) / 2
  return Math.floor(Math.sqrt(
    p * (p - this.a) * (p - this.b) * (p - this.c)
  ) * 100) / 100
}
}

export class Circle implements Figure {
  
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public shape: 'triangle',
    public b: number,
    public c: number
  ) {
    if (a <= 0) throw new Error('O raio deve ser maior que 0');
  }
  getArea() {
    return Math.floor(Math.PI * this.a * this.a * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor (
    public color: 'red' | 'green' | 'blue',
    public shape: 'rectangle',
    public a: number,
    public b?: number,
    public c?: number
  ) {
    if(a <= 0|| b <= 0 || c <= 0){
    throw new Error("Alguem comprimento é menor ou igual a 0")
  }
}
   getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
