const fetchData = require("../src/fetchData");

test('test api ', async () => {
  const id1 = 1;
  const id2 = 2;

  const expectedData1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  };

  const expectedData2 = {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }
  const actualData1 = await fetchData(id1);
  const actualData2 = await fetchData(id2);

  expect(actualData1).toEqual(expectedData1);
  expect(actualData2).toEqual(expectedData2);

});
