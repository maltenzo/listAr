import SearchAndFetchItem from "@/interactors/searchAndFetchItem";
import { useQuery } from "@tanstack/react-query";

const useFetchItem = (itemUniqueId: string) => {
  const searchAndFetchItem = new SearchAndFetchItem(itemUniqueId);
  const { data, isLoading, error } = useQuery({
    queryKey: ['item', itemUniqueId],
    queryFn: () => searchAndFetchItem.execute(),
  });

  return { data, isLoading, error };
};

export default useFetchItem;
