class Storage {
  constructor(arrayOfItems) {
    this.items = arrayOfItems;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
    return this.items;
  }
  removeItem(itemToRemove) {
    // if(this.items.includes(item)){

    // }
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
}
const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Нанітоіди");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
