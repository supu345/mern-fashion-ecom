import p4 from "./p4.avif";
import p6 from "./p6.jpg";
import p1 from "./p1.jpg";
import p2 from "./p2.avif";
import p3 from "./p3.jpg";
import p5 from "./p5.jpg";
import p7 from "./p7.jpg";
import p8 from "./p8.jpg";
import p9 from "./p9.jpg";
import p10 from "./p10.avif";
import p11 from "./p11.jpg";
import p12 from "./p12.avif";
import p13 from "./p13.jpg";
let all_products = [
  {
    id: 1,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p1,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 2,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p2,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 3,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p3,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 4,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p4,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 5,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p5,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 6,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p6,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 7,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p7,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 8,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p8,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 9,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p9,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 10,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p10,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 11,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p11,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 12,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "clothing",
    image: p12,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 13,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p13,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 14,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p2,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 15,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p3,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 16,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p4,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 17,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p5,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 18,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p6,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 19,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p7,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 20,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p8,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 21,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p9,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 22,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p10,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 23,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p11,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 24,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p13,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 25,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "electronics",
    image: p8,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 26,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p9,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 26,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p10,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 28,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p11,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 29,
    name: "Striped Fluter Slavee Overlap Collar Peplum Hem Blouse",
    category: "cosmatics",
    image: p13,
    new_price: 50,
    old_price: 80,
  },
];
export default all_products;
