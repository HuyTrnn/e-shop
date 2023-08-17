import axios from "axios";
import { GetServerSideProps } from "next";


export async function getAllProduct() {
  const res = await axios.get('http://blog.test:8080/api/products')
  if (!res) {
    throw new Error('Failed to fetch data')
  }
  return res
}
