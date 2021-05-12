 //basic
 function funcGen0th<T>(props: T) {
   return { item: props }
 }
 const gen6 = funcGen0th<string>('test')
 const gen7 = funcGen0th<string | null>(null)

//extends
 function funcGen1st<T extends string | null>(props: T): { value: T } {
   return { value: props }
 }
 const gen8 = funcGen1st('hello')
 const gen9 = funcGen1st<string>('good')

 //extends advanced
 //'Props' which is already defined structure for Object by using 'interface'
 interface Props1st {
   id: number
   price: number
 }
 interface Props2nd {
   id: string
   price: string
 }
 function funcGen2nd<T extends Props1st | Props2nd>(props: T) {
   return { value: props.price }
 }
 const gen10 = funcGen2nd({ id: 1, price: 10 })
 const gen11 = funcGen2nd({ id: '10', price: '100'})
 //my thought
 //I have a question.
 //Are there any profits to code like the above.
 //I mean that to define a type and to extends with it in Generics doesn't make it sense, right?
 //So I guess the above code could be translated to the below code instead.
 function funcGen3rd(props: Props1st | Props2nd) {
   return { value: props.price }
 }
 const gen12 = funcGen3rd({ id: 1, price: 10 })

 //Generics in Generics
 interface Props<T> {
  id: T
  price: T
}
function funcGenGen1<U extends Props<string>>(props: U){
  return {value: props.id}
}
function funcGenGen2(props: Props<string>){
  return {value: props.id}
}

 //arrow function with Generics
 const funcGen4 = <T extends Props1st>(props: T) => {
   return { value: props.price }
 }

//arrow function
const funcGen5 = (props: Props1st) => {
  return { value: props.price }
}
//arrow function with type definition of return value
const funcGen6 = (props: Props1st): {value: typeof props.price} => {
  return { value: props.price }
}