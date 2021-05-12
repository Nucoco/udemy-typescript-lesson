import Data from './data.json'

type USERS = typeof Data

const fetchJson = async () => {
  const res: USERS = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (res) => await res.json())
  console.log(res);
}