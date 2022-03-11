export interface Category {
  id: string,
  name: string,
  typeImg: string
}

export interface product {
  id: string,
  title:  string,
  price: number,
  description: string,
  category: Category,
  images: string[]
}


