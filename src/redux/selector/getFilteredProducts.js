import { createSelector } from "reselect";

const getProducts = state => state.filters.products;
const getTextFilter = state => state.filters.text;
const getCategoryFilter = state => state.filters.category;
const getCompanyFilter = state => state.filters.company;
const getColorFilter = state => state.filters.color;
const getPriceFilter = state => state.filters.price;
const getShippingFilter = state => state.filters.shipping;
const getSortBy = state => state.filters.sortBy;

export const getFilteredProducts = createSelector(
  [
    getProducts,
    getTextFilter,
    getCategoryFilter,
    getCompanyFilter,
    getColorFilter,
    getPriceFilter,
    getShippingFilter,
    getSortBy,
  ],
  (
    products,
    textFilter,
    categoryFilter,
    companyFilter,
    colorFilter,
    priceFilter,
    shippingFilter,
    sortBy
  ) => {
    let filteredProducts = products.filter(product => {
      const isTextMatch = product.name.toLowerCase().includes(textFilter);
      const isCategoryMatch =
        categoryFilter === "all" || product.category === categoryFilter;
      const isCompanyMatch =
        companyFilter === "all" || product.company === companyFilter;
      const isColorMatch =
        colorFilter === "all" || product.colors.includes(colorFilter);
      const isPriceMatch = priceFilter === 0 || product.price <= priceFilter;
      const isShippingMatch = !shippingFilter || product.shipping;

      return (
        isTextMatch &&
        isCategoryMatch &&
        isCompanyMatch &&
        isColorMatch &&
        isPriceMatch &&
        isShippingMatch
      );
    });

    switch (sortBy) {
      case "price-lowest":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-highest":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-a":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return filteredProducts;
  }
);
