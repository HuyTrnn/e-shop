import axios from 'axios';

export async function getTypes({ param } : {param: string}) {
    try {
        const response = await axios.get(`https://backpack-nu.vercel.app/api/types/${param}`);
        return {
            data: response.data,
            fallback: false, // Means anything else will 404
        };
    } catch (error: any) {
        console.error('Error fetching data:', error);
        return {
            data: null,
            error: error.message,
            fallback: false,
        };
    }
}
