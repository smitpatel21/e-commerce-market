import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { genSaltSync, hashSync } from "bcryptjs";

export const encryptPassword = (password: string) => {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  return hash;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
