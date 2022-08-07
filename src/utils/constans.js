export const apiConfig = {
  url: "http://localhost:3000",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
};

export const minToHours = (min) => {
  const hours = Math.trunc(min / 60);
  const minutes = min % 60;
  if (min < 60) {
    return `${min} мин.`;
  }
  if (minutes === 0) {
    return `${hours} ч.`;
  }
  return `${hours} ч. ${minutes} мин.`;
};
//http://localhost:3000
//https://api.mydiploma.nomoredomains.xyz/
// authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFjZGJiZjA1MzIxYzgxNzBkNzhjMzMiLCJpYXQiOjE2NTY2MjA4MjEsImV4cCI6MTY1NzIyNTYyMX0.MqVXOmoChVUaWtQ9d3U_46YjMluroCvjqFItE1pPG38`,
