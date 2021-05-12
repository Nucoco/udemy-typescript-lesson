 // type Alias, Generics
 // default type, union type
 type abc<T = boolean> = string | T
 const a: abc<10> = 10
 const b: abc<number> = 100
 const c: abc = true
 const d: abc = 'hello'

 // In addition to above condition, Generics with two type parameters
 type ab<T extends string | number = number, U extends number | boolean = boolean> = {
   first: T
   second: U
   third: T | U
 }
 const AB: ab<string, number> = {
   first: '0',
   second: 10,
   third: 100
 }
 const BA: ab = {
   first: 0,
   second: false,
   third: true
 }