


  
  export type TProduct ={
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
  }
  export type TVariant = {
    type: string;
    value: string;
  }
  
  export type TInventory ={
    quantity: number;
    inStock: boolean;
  }
  
  

  // interface Product {
  //   name: string;
  //   description: string;
  //   price: number;
  //   category: string;
  //   tags: string[];
  //   variants: Variant[];
  //   inventory: Inventory;
  // }
  
  // interface Variant {
  //   type: string;
  //   value: string;
  // }
  
  // interface Inventory {
  //   quantity: number;
  //   inStock: boolean;
  // }