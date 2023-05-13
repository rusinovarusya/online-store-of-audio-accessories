import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { getHeadphonesData, getWirelessHeadphonesData } from "../getData";


interface ItemsInCart {
  index: number;
  type: string;
  count: number;
}

export type AppDataContextModel = {
  itemsInCart: ItemsInCart[];
  setItemsInCart: (items: ItemsInCart[]) => void;

  addItem: (index: number, type: string) => void;
  removeItem: (index: number, type: string) => void;
  increaseCount: (index: number, type: string) => void;
  decreaseCount: (index: number, type: string) => void;
  countItem: (index: number, type: string) => number;
  countItems: () => number;
  countCost: (index: number, type: string) => number;
  countTotalCost: () => number;
}


const AppDataContext = createContext<AppDataContextModel | undefined>(undefined);


export const AppDataProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState<ItemsInCart[]>([]);

  const addItem = (index: number, type: string) => {
    if (itemsInCart.find(item => item.index === index && item.type === type)) {
      increaseCount(index, type);
    } else {
      setItemsInCart([...itemsInCart, {
        index, 
        type, 
        count: 1
      }]);
    }
  }

  const removeItem = (index: number, type: string) => {
    setItemsInCart(itemsInCart.filter(item => (item.index !== index && item.type !== type)));
  }

  const increaseCount = (index: number, type: string) => {
    setItemsInCart(itemsInCart.map(item => {
      if (item.index === index && item.type === type) {
        item.count += 1;
      } return item;
    }));
  }

  const decreaseCount = (index: number, type: string) => {
    setItemsInCart(itemsInCart.map(item => {
      if (item.index === index && item.type === type) {
        item.count -= 1;
      } return item;
    }).filter(item => item.count > 0));
  }

  const countItem = (index: number, type: string) => {
    return itemsInCart.filter(item => item.index === index && item.type === type)[0].count;
  }

  const countItems = () => {
    return itemsInCart.reduce((count, item) => count + item.count, 0);
  }

  const countCost = (index: number, type: string) => {
    const count = itemsInCart.find(item => item.index === index && item.type === type)?.count || 0;

    switch (type) {
      case "headphones":
        return getHeadphonesData(index).price * count;
      case "wirelessHeadphones":
        return getWirelessHeadphonesData(index).price * count;
      default: return 0;
    }
  }

  const countTotalCost = () => {
    return itemsInCart.reduce((totalCost, item) => totalCost + countCost(item.index, item.type), 0);
  }

  const contextValue: AppDataContextModel = {
    itemsInCart,
    setItemsInCart,
    addItem,
    removeItem,
    increaseCount,
    decreaseCount,
    countItem,
    countItems,
    countCost,
    countTotalCost
  }
  return (
    <AppDataContext.Provider value={contextValue}>
      {children}
    </AppDataContext.Provider>
  );
}

export const useAppDataContext = () => useContext(AppDataContext);
