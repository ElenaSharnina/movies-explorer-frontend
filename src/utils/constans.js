export const apiConfig = {
  url: 'https://api.mydiploma.nomoredomains.xyz',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
}

//http://localhost:3000
//https://api.mydiploma.nomoredomains.xyz/