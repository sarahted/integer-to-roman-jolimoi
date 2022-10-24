// handleSubmit only if input changed
let oldInput = "";
const handleSubmitConvertIntegerToRoman = async (event, form) => {
  event.preventDefault();
  let romanSymbloText = "An error has occured";
  const input = form.integerInput.value;
  if (oldInput === input) return;
  try {
    const inputNumber = parseInt(input);
    if (
      !Number.isInteger(inputNumber) ||
      inputNumber < 1 ||
      inputNumber > 100
    ) {
      romanSymbloText = "Input is not a valid number (between 1 and 100)";
      throw romanSymbloText;
    }

    const response = await fetch(`http://localhost:4000/v1/convert/${input}`);
    const result = await response.json();

    romanSymbloText = result.data || result.error;
  } catch (error) {
    console.error(error);
  } finally {
    document.getElementById("result").innerHTML = romanSymbloText;
    oldInput = input;
  }
};

const handleSubmitConvertIntegerToRomanSSE = async (event, form) => {
  event.preventDefault();
  let romanSymbloText = "An error has occured";
  const input = form.integerInput.value;
  if (oldInput === input) return;
  const inputNumber = parseInt(input);
  if (!Number.isInteger(inputNumber) || inputNumber < 1 || inputNumber > 100) {
    romanSymbloText = "Input is not a valid number (between 1 and 100)";
  }
  const response = new EventSource(`http://localhost:4000/v2/convert/${input}`);
  response.onmessage = (event) => {
    romanSymbloText = event.data;
    document.getElementById("result").innerHTML = romanSymbloText;
  };
  response.onerror = () => {
    response.close();
  };
  document.getElementById("result").innerHTML = romanSymbloText;
  oldInput = input;
};

