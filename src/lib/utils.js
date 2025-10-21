import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// "class names" 的縮寫
// clsx允許你根據條件輕鬆地將多個類別字串和陣列組合在一起
// twMerge 用於合併 Tailwind CSS 類別，確保沒有衝突的樣式被應用
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}