// Функція showMessage приймає аргумент (string) і не повертає значення
function showMessage(message: string): void {
    console.log(message);
  }
  
  // Функція calc приймає два аргументи і повертає значення
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Функція customError не приймає аргументів і не повертає значення,
  // але вона викликає виключення
  function customError(): never {
    throw new Error('Error');
  }
  