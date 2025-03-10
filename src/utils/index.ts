export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Gaming Laptop XZ500",
    description: "15.6-inch gaming laptop with RTX 4060, 16GB RAM",
    price: 1_200_000,
    category: "Electronics",
    stock: 10,
  },
  {
    id: "2",
    name: "Wireless Earbuds Pro",
    description: "Noise-cancelling wireless earbuds with 24h battery life",
    price: 200_000,
    category: "Electronics",
    stock: 25,
  },
  {
    id: "3",
    name: "Smartwatch Z5",
    description: "Water-resistant smartwatch with heart rate monitor",
    price: 300_000,
    category: "Electronics",
    stock: 15,
  },
  {
    id: "4",
    name: "Mechanical Keyboard K95",
    description: "RGB mechanical keyboard with programmable keys",
    price: 150_000,
    category: "Electronics",
    stock: 20,
  },
  {
    id: "5",
    name: 'UltraWide Monitor 34"',
    description: "34-inch ultra-wide 144Hz gaming monitor",
    price: 800_000,
    category: "Electronics",
    stock: 8,
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    description: "Adjustable ergonomic chair with lumbar support",
    price: 500_000,
    category: "Furniture",
    stock: 12,
  },
  {
    id: "7",
    name: "Standing Desk",
    description: "Adjustable height standing desk with memory presets",
    price: 700_000,
    category: "Furniture",
    stock: 7,
  },
  {
    id: "8",
    name: "Wireless Mouse MX Master 3",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 120_000,
    category: "Electronics",
    stock: 18,
  },
  {
    id: "9",
    name: "4K Streaming Webcam",
    description: "Ultra HD 4K webcam with autofocus and HDR",
    price: 250_000,
    category: "Electronics",
    stock: 10,
  },
  {
    id: "10",
    name: "Smart LED Light Bulb",
    description: "WiFi-enabled smart bulb with customizable colors",
    price: 50_000,
    category: "Home & Living",
    stock: 30,
  },
  {
    id: "11",
    name: "Bluetooth Speaker Boom X",
    description: "Portable waterproof Bluetooth speaker with deep bass",
    price: 180_000,
    category: "Electronics",
    stock: 22,
  },
  {
    id: "12",
    name: "Gaming Mouse Pad XL",
    description: "Large gaming mouse pad with anti-slip rubber base",
    price: 40_000,
    category: "Accessories",
    stock: 50,
  },
  {
    id: "13",
    name: "Electric Kettle 1.7L",
    description: "Stainless steel electric kettle with auto shut-off",
    price: 90_000,
    category: "Home & Living",
    stock: 15,
  },
  {
    id: "14",
    name: "Noise Cancelling Headphones",
    description: "Over-ear noise-cancelling headphones with 40h battery life",
    price: 350_000,
    category: "Electronics",
    stock: 12,
  },
  {
    id: "15",
    name: "Smart TV 55-inch 4K",
    description: "55-inch 4K UHD Smart TV with HDR",
    price: 1_500_000,
    category: "Electronics",
    stock: 6,
  },
  {
    id: "16",
    name: "External SSD 1TB",
    description: "High-speed portable SSD with USB-C",
    price: 400_000,
    category: "Electronics",
    stock: 20,
  },
  {
    id: "17",
    name: "VR Headset XR Pro",
    description: "Next-gen VR headset with 4K resolution",
    price: 1_000_000,
    category: "Electronics",
    stock: 5,
  },
  {
    id: "18",
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with app control and auto-charging",
    price: 600_000,
    category: "Home & Living",
    stock: 10,
  },
  {
    id: "19",
    name: "Wireless Charging Pad",
    description: "Fast wireless charger for smartphones and earbuds",
    price: 80_000,
    category: "Electronics",
    stock: 25,
  },
  {
    id: "20",
    name: "Portable Power Bank 20,000mAh",
    description: "High-capacity power bank with fast charging",
    price: 150_000,
    category: "Accessories",
    stock: 30,
  },
];
