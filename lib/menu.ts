export type MenuItem = {
  name: string
  description?: string
  price: number
  tag?: string
}

export type MenuCategory = {
  id: string
  title: string
  subtitle: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'classic-coffee',
    title: 'Classic Coffee',
    subtitle: '',
    items: [
      { name: 'Coffee',  price: 120 },
      { name: 'Latte', price: 120 },
      { name: 'Cappuccino', price: 110 },
    ],
  },
  {
    id: 'espresso',
    title: 'Espresso',
    subtitle: '',
    items: [
       { name: 'Espresso',  price: 60 },
       { name: 'Double Espresso',  price: 120 },
       { name: 'Americano',  price: 130 },
 ],
 },
 {
    id: 'Specialty Coffee',
    title: 'Specialty Coffee',
    subtitle: '',
    items: [
      { name: 'Macchiato',  price: 150 },
      { name: 'Flat White', price: 110 },
      { name: 'Cortado', price: 110 },
    ],
 },
 {
    id: 'Flavored Coffee',
    title: 'Flavored Coffee',
    subtitle: '',
    items: [
      { name: 'mocha',  price: 170 },
      { name: 'caramel latte', price: 130 },
      { name: 'hazelnut latte', price: 170 },
    ],
  },
{
    id: 'Cold-Coffee',
    title: 'Cold Coffee',
    subtitle: '',
    items: [
      { name: 'iced coffee',  price: 200 },
      { name: 'iced latte', price: 150 },
      { name: 'iced mocha', price: 120 },
      { name: 'iced spanich latte', price: 100 },
    ],
  },
];