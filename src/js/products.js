/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
    {
      id: "1001",
      title: "RTX 4090",
      description: "RTX 4090 24GB ASUS TUF Gaming OG GDDR6X 3Fan",
      price: 285000,
      discontinued: false,
      categories: ["c1"]
    },
    {
      id: "2001",
      title: "i9-14900K",
      description: "Intel® CoreTM i9-14900K New Gaming Desktop Processor 24 (8 P-cores + 16 E-cores)",
      price: 65000,
      discontinued: false,
      categories: ["c2"]
    },
    {
      id: "2002",
      title: "i7-14700K",
      description: "Intel® Core™ i7-14700K New Gaming Desktop Processor 20 cores (8 P-cores + 12 E-cores)",
      price: 50000,
      discontinued: false,
      categories: ["c2"]
    },
    {
      id: "3001",
      title: "Acer EK241Y",
      description: "Acer EK241Y EBI 24in IPS FHD 1920 x 1080 100Hz 1ms Frameless Gaming Monitor",
      price: 11900,
      discontinued: false,
      categories: ["c3"]
    },
    {
      id: "4001",
      title: "VENGEANCE RGB DDR5 RAM 32GB (2x16GB) 6000MHz",
      description: "CORSAIR VENGEANCE RGB DDR5 RAM 32GB (2x16GB) 6000MHz CL36 Intel XMP iCUE Compatible Computer Memory",
      price: 14000,
      discontinued: false,
      categories: ["c4"]
    },
    {
      id: "1002",
      title: "RTX 4080",
      description: "GIGABYTE GeForce RTX 4080 Super WINDFORCE V2 16G Graphics Card, 3X WINDFORCE Fans",
      price: 130000,
      discontinued: false,
      categories: ["c1"]
    },
    {
      id: "2003",
      title: "i3-10100F",
      description: "Intel CPU BX8070110100F Core i3-10100F / 3.6GHz / 6MB LGA1200 4C / 8T",
      price: 8500,
      discontinued: true,
      categories: ["c2"]
    },
    {
      id: "3002",
      title: "CRUA 27inch 144hz/180Hz Curved Gaming Monitor",
      description: "CRUA 27inch 144hz/180Hz Curved Gaming Monitor, Full HD 1080P 1800R Frameless Computer Monitor, , 1ms GTG with FreeSync, Low Motion Blur, Eye Care, DisplayPort, HDMI, Wall Mountable-Black",
      price: 285000,
      discontinued: true,
      categories: ["c3"]
    },
    {
      id: "1003",
      title: "GTX 1650",
      description: "MSI Gaming GeForce GTX 1650 128-Bit HDMI/DP/DVI 4GB GDRR6 HDCP Support DirectX 12 VR Ready OC Graphics Card (GTX 1650 D6 Ventus XS OCV3)",
      price: 21000,
      discontinued: true,
      categories: ["c1"]
    }
];
