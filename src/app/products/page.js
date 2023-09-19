import Footer from "@/components/Footer/Footer";
import Header from "@/modules/Header/Header";
import Section from "@/components/Section/Section";

import ProductGrid from "@/modules/ProductGrid/ProductGrid";
import { fetchData } from "@/api/productsFetch";
import { apiProductOrigin } from "@/api/api";

const Products = async () => {
  const data = await fetchData(apiProductOrigin);
  return (
    <>
      <Header />
      <main>
        <Section>
          <ProductGrid data={data} />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
