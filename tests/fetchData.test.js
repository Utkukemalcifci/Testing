const fetchData = require("../src/fetchData");

test('test api ', async () => {
    const expectedData = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };

    const actualData = await fetchData();
    expect(actualData).toEqual(expectedData);
});
