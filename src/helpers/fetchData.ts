import axios from "axios";

export const fetchData = async <T>(url: string): Promise<T> => {
    const res = await axios(url);
    return res.data
}