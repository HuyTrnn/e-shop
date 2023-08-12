import axios from "axios";
import { GetServerSideProps } from "next";
interface Products {
  id: string;
  product_name: string;
  image: any;
  title: string;
  product_description: string;
  product_price: number;
  rating: any;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { type } = params;
    const result = await axios.get(`http://blog.test:8080/api/types/${type}`);
    const data: Products = await result.data;

    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
