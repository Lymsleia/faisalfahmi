function openLaptop() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Laptop dinyalakan"), 1000);
  });
}

function joinClass() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Masuk kelas online"), 1000);
  });
}

function takeNotes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Mencatat materi pelajaran"), 1000);
  });
}

// Promise chaining
openLaptop()
  .then((result1) => {
    console.log(result1);
    return joinClass();
  })
  .then((result2) => {
    console.log(result2);
    return takeNotes();
  })
  .then((result3) => {
    console.log(result3);
  });
