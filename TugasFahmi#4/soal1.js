// Jika obj bukan objek atau array, kembalikan langsung (nilai primitif)
const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj; // mengembalikan nilai
  }
  // Jika obj adalah array, buat salinan baru dengan rekursi

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  // Jika obj adalah objek, buat salinan baru dengan spread operator

  return Object.keys(obj).reduce((copy, key) => {
    copy[key] = deepCopy(obj[key]);
    return copy;
  }, {});
};

const person = {
  name: "fahmi",
  age: "24",
  hobbies: "Gamming, Reading",
  address: { city: "Malang", zip: 65123 },
};

const copyPerson = deepCopy(person);
copyPerson.address.city = "Kediri";
copyPerson.hobbies = "FootBall";
console.log(person); // tetap
console.log(copyPerson); // di ubah
