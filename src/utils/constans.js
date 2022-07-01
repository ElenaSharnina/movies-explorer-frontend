export const apiConfig = {
  url: 'http://localhost:3000',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
}

//http://localhost:3000
//https://api.mydiploma.nomoredomains.xyz/