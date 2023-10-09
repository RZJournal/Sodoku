function fillRandomNumbers() {
    for (let i = 0; i < 81; i++) {
      const cell = document.getElementById(`cell-${i}`);
      cell.value = "";
      cell.classList.remove("random-number"); 
    }
    for (let i = 0; i < 30; i++) { 
      const randomIndex = Math.floor(Math.random() * 81);
      const cell = document.getElementById(`cell-${randomIndex}`);
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      cell.value = randomNumber;
      cell.classList.add("random-number"); 
    }
  }

  function checkWin() {
    for (let i = 0; i < 81; i++) {
      const cell = document.getElementById(`cell-${i}`);
      if (cell.value === "") {
        return false; 
      }
    }

    for (let i = 0; i < 9; i++) {
      const row = [];
      const col = [];
      const grid = [];
      for (let j = 0; j < 9; j++) {
        row.push(document.getElementById(`cell-${i * 9 + j}`).value);
        col.push(document.getElementById(`cell-${j * 9 + i}`).value);
        grid.push(
          document.getElementById(`cell-${Math.floor(i / 3) * 27 + (i % 3) * 3 + Math.floor(j / 3) * 9 + (j % 3)}`).value
        );
      }
      if (!isValidSet(row) || !isValidSet(col) || !isValidSet(grid)) {
        return false;
      }
    }

    alert("Congratulations! You've solved the Sudoku puzzle!");
    return true;
  }

  function isValidSet(set) {
    const uniqueValues = new Set(set);
    uniqueValues.delete(""); 
    return uniqueValues.size === set.length;
  }


  function onCellInput(event) {
    const cell = event.target;
    const inputValue = parseInt(cell.value);
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 9) {
      alert("Invalid input. Please enter a number from 1 to 9.");
      cell.value = "";
    } else {
      if (checkWin()) {
        
      }
    }
  }