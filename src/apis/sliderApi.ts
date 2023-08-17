import axios from "axios"
import { GetStaticPropsContext } from "next";

export async function getData() {
    const res = await axios.get('http://blog.test:8080/api/sliders')
    if (!res) {
      throw new Error('Failed to fetch data')
    }
    return res
  }
  

