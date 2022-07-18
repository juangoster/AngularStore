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
  images: string[],
  taxes?: number
}

export interface createProductDTO extends Omit<product, 'id' | 'category'>{
  categoryId: string
}

export interface updatePrductDTO extends Partial<createProductDTO>{

}


