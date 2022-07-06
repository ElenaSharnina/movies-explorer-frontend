export const apiConfig = {
  url: 'https://api.mydiploma.nomoredomains.xyz',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
}

//http://localhost:3000
//https://api.mydiploma.nomoredomains.xyz/


// authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFjZGJiZjA1MzIxYzgxNzBkNzhjMzMiLCJpYXQiOjE2NTY2MjA4MjEsImV4cCI6MTY1NzIyNTYyMX0.MqVXOmoChVUaWtQ9d3U_46YjMluroCvjqFItE1pPG38`,