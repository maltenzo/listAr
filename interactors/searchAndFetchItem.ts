import { findItemUrl } from "@/constants/urls";

class SearchAndFetchItem {
  constructor(private readonly itemUniqueId: string) {}

  async execute() {
    const url = findItemUrl(this.itemUniqueId);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch item');
    }
    const data = await response.json();
    const searchData = JSON.parse(data.queryData[0].data);
    const item = searchData.productSearch.products[0];
    return item;
  }
}

export default SearchAndFetchItem;
