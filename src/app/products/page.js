import Filters from "@/modules/Filters/Filters";
import Footer from "@/components/Footer/Footer";
import Header from "@/modules/Header/Header";
import Section from "@/components/Section/Section";
import SortingBar from "@/components/SortingBar/SortingBar";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductGrid from "@/modules/ProductGrid/ProductGrid";

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <ProductGrid />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
