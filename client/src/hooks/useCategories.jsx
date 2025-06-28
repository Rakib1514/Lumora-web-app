import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategories = () => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("/categories");
      return res.data.categories;
    },
  });

  return { categories, isCategoriesLoading, isCategoriesError };
};

export default useCategories;
