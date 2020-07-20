import React from "react";
import { Intent, Classes } from "@blueprintjs/core";
import styles from "./_styles.module.scss";

export const CommonClasses = {
  CallToAction: styles.cta,
};

export enum PriceFormat {
  FULL = "full",
  SHORT = "short",
}

// export function countCartItems(cart: CartState) {
//   return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
// }

export function formatNumber(number: number) {
  return String(number)
    .split(/(\d{0,3})(\d{3})$/)
    .filter(Boolean)
    .join(".");
}

export function formatPercentage(value: number) {
  return `${Math.floor(value)}%`;
}

export function formatPrice(price: number, type = PriceFormat.FULL) {
  switch (type) {
    case PriceFormat.FULL:
      return `${formatNumber(price)}₫`;
    case PriceFormat.SHORT:
      return `${formatNumber(price / 1000)}k`;
  }
}

export const getIntent = (valid?: boolean) => {
  if (valid === true) return Intent.SUCCESS;
  if (valid === false) return Intent.DANGER;
  return Intent.NONE;
};
