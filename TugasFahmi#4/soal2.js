const products = [
  { name: "Laptop", Price: 1500 },
  { name: "Keyboard", Price: 500 },
  { name: "Monitor", Price: 1200 },
  { name: "Mouse", Price: 300 },
];

// 1. produk > 1000
const filteredProducts = products.filter((product) => product.price > 1000);

// 2. hanya nama produk
const productNames = filteredProducts.map((product) => product.name);

// 3. menggabungkan nama produk di pisahkan dengan coma
const result = productNames.join(", ");

console.log(result);
