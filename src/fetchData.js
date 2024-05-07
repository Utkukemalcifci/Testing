
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  }
  catch (Error) {
    console.error('Hata oluştu:', error);
  }
}

fetchData();

module.exports = fetchData;