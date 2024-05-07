
async function fetchData(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    return data;
  }
  catch (Error) {
    console.error('Hata oluştu:', error);
  }
}

fetchData();

module.exports = fetchData;