import axios from "axios";

export async function getTypes({param} : {param: string}) {
    const type = await axios
        .get(`http://blog.test:8080/api/types/${param}`)
        // .then(({ data }) =>
        //     console.log(data)
        // );

    return {
        data: type,
        fallback: false, //Means anything else will 404
    };
}