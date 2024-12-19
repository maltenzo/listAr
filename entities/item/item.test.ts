import Item from "./item";


describe("Item", () => {
  it("should create an item", () => {
    const item = new Item("1", "Item 1", 100);
    expect(item.id).toBe("1");
    expect(item.name).toBe("Item 1");
    expect(item.price).toBe(100);
  });
});