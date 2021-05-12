//typeof
let msg = 'Hi'
let msg2: typeof msg;

msg2 = "Hey"
let cat = {
  japanese: 'neko',
  cry: 'Nya!'
}

let dog: typeof cat = {
  japanese: 'inu',
  cry: 'Won!'
}

//keyof
type KEYS = {
   primary: number
   secondary: number
 }
 let key: keyof KEYS;
 key = 'primary'


 //keyof + typeof
 const sports = {
   soccer: 'Soccer',
   baseball: 'Baseball'
 }
 let keySports: keyof typeof sports = 'soccer'
