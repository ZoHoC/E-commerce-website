import { apiProductSingle } from "@/api/api";
import { fetchData } from "@/api/productsFetch";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import SingleProduct from "@/components/SingleProduct/SingleProduct";
import Header from "@/modules/Header/Header";
import { usePathname } from "next/navigation";

//   Check if productId is available before making the API call
//   if (!productId) {
//     return <p>Loading...</p>;
//   }

const SingleProductPage = async ({ params: productId }) => {
  const {
    id,
    stock,
    price,
    colors,
    images,
    reviews,
    stars,
    name,
    description,
    company,
  } = await fetchData(`${apiProductSingle}${productId.id}`);
  return (
    <>
      <Header />
      <main>
        <Section>
          <SingleProduct
            id={id}
            stock={stock}
            price={price}
            colors={colors}
            images={images}
            reviews={reviews}
            stars={stars}
            name={name}
            description={description}
            company={company}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default SingleProductPage;
