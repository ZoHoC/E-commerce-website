import Filters from "@/modules/Filters/Filters";
import Footer from "@/components/Footer/Footer";
import Header from "@/modules/Header/Header";
import Section from "@/components/Section/Section";

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Filters />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
