//Intersection
type Profile = {
   age: number
   city: string
}
type Login = {
   username: string
   password: string
}
type User = Profile & Login
const user: User = {
   age: 20,
   city: 'tokyo',
   username: 'testUser',
   password: 'passWord'
}

//Union
let value: boolean | number
value = true
value = 0

let arrayUni: (number | string)[]
arrayUni = [0, 1, "2"]
arrayUni.push('End of Array')

//Literal Types + Union Types
type GAFA = 'Google' | 'Apple' | 'Facebook' | 'Amazon'
const company: GAFA = 'Google'
