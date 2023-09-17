export function filterAndSortProducts(data, filters) {
  return data
    .filter(product => {
      const isTextMatch = product.name
        .toLowerCase()
        .includes(filters.text.toLowerCase());
      const isCategoryMatch =
        filters.category === "all" || product.category === filters.category;
      const isCompanyMatch =
        filters.company === "all" || product.company === filters.company;
      const isColorMatch =
        filters.color === "all" || product.colors.includes(filters.color);
      const isPriceMatch =
        filters.price === 0 || product.price <= filters.price;
      const isShippingMatch = !filters.shipping || product.shipping;

      return (
        isTextMatch &&
        isCategoryMatch &&
        isCompanyMatch &&
        isColorMatch &&
        isPriceMatch &&
        isShippingMatch
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "price-lowest":
          return a.price - b.price;
        case "price-highest":
          return b.price - a.price;
        case "name-a":
          return a.name.localeCompare(b.name);
        case "name-z":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
}
