// Fungsi delay 1 detik
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Fungsi-fungsi proses persiapan ujian
async function readMaterials() {
  await delay(1000);
  console.log("Membaca materi…");
}

async function doExercises() {
  await delay(1000);
  console.log("Mengerjakan latihan soal…");
}

async function reviewNotes() {
  await delay(1000);
  console.log("Mereview catatan…");
}

// Fungsi utama menggunakan async/await
async function prepareForExam() {
  await readMaterials();
  await doExercises();
  await reviewNotes();
  console.log("Siap menghadapi ujian!");
}

// Jalankan
prepareForExam();
