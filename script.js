//Конструкция async/await
async function fetchDataAsync() {
  setTimeout(() => {
    console.log("Данные получены!");
  }, 2000);
}

async function dataAsync() {
  await fetchDataAsync();
}
dataAsync();

async function divideAsync(a, b) {
  if (b === 0) {
    throw new Error("Ошибка!");
  }
  return a / b;
}

async function mainF() {
  try {
    const result = await divideAsync(10, 0);
    console.log(result);
  } catch {
    console.error("Ошибка при деление на ноль");
  }
}
mainF();

async function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Шаг 1 завершен"), 1000);
  });
}

async function stepTwo(message) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${message} Шаг 2 завершен`), 1000);
  });
}

async function mainF() {
  const resultOne = await stepOne();
  const resultTwo = await stepTwo(resultOne);
  console.log(resultTwo);
}
mainF();

//Обработка ошибок
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Ошибка!");
  }
  return a / b;
}

try {
  console.log(divideNumbers(10, 1));
} catch (error) {
  console.error("Ошибка при деление на ноль");
}

async function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject("Ошибка при получении данных");
    } else {
      setTimeout(() => resolve("Данные получены"), 1000);
    }
  });
}

async function mainFunc(shouldFail) {
  try {
    const result = await fetchData(shouldFail);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
mainFunc(false);

const objJson = `{
  "name": "Test Object",
  "version": 1.0,
}`;

function parseJson(strJSON) {
  try {
    return JSON.parse(strJSON);
  } catch (error) {
    throw new Error("Некорректный JSON");
  }
}

try {
  console.log(parseJson(objJson));
} catch (error) {
  console.error(error.message);
}
