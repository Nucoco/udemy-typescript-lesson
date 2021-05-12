
//Generics - basic manner
interface GEN0th<T> {
   item: T
 }
 const gen0: GEN0th<string> = {
   item: 'hello'
 }
 const gen1: GEN0th<number> = {
   item: 10
 }

 //Generics - setting default type
 interface GEN1st<U = string> {
   item: U
 }
 const gen2: GEN1st = {
   item: 'good'
 }
 const gen3: GEN1st<number> = {
   item: 100
 }

 //Generics - strict available types by using extends
 interface GEN2nd<V extends string | number> {
   item: V
 }
 const gen4: GEN2nd<string> = {
   item: 'nice'
 }

 //Generics - default type and extends types
 interface GEN3rd<W extends string | number = string> {
   item: W
 }
 const gen5: GEN3rd = {
   item: 'great'
 }