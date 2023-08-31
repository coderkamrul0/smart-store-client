import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProducts = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: products=[], isLoading: loading,refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await axiosSecure(`/products`);
            return res.data;
        }
    })
    return [products,loading,refetch]
};

export default useProducts;