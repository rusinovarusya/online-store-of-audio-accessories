import { headphones, wirelessHeadphones } from "./data";


export const getHeadphonesData = (index: number) => {
  return {
    img: headphones[index].img,
    name: headphones[index].name,
    price: headphones[index].price,
    rating: headphones[index].rating
  }
}

export const getWirelessHeadphonesData = (index: number) => {
  return {
    img: wirelessHeadphones[index].img,
    name: wirelessHeadphones[index].name,
    price: wirelessHeadphones[index].price,
    rating: wirelessHeadphones[index].rating
  }
}
