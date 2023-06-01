export interface Order {
  name: string
  email: string
  size: number
  base: string
  sauce: string
  topping: string[]
  comments: string
}


export interface PendingOrder {
  _id: string
  name: string
  total: number
}

