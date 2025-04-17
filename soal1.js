function startWashing(callback) {
  setTimeout(() => {
    console.log("Mesin cuci dimulai");
    callback();
  }, 1000);
}

function dryClothes(callback) {
  setTimeout(() => {
    console.log("Baju sedang dikeringkan");
    callback();
  }, 1000);
}

function foldClothes(callback) {
  setTimeout(() => {
    console.log("Baju dilipat rapi");
  }, 1000);
}

// Callback Hell
startWashing(() => {
  dryClothes(() => {
    foldClothes(() => {
      // selesai
    });
  });
});
