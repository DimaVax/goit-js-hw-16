class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get String() {
    return this._value;
  }
  append(str) {
    const copyOfValue = [...this._value.split("")];

    copyOfValue.splice(copyOfValue.length, 0, str);
    this._value = copyOfValue.join("");
  }
  prepend(str) {
    const copyOfValue = [...this._value.split("")];
    copyOfValue.splice(0, 0, str);
    this._value = copyOfValue.join("");
  }
  pad(str) {
    const copyOfValue = [...this._value.split("")];
    copyOfValue.splice(this._value.length, 0, str);
    copyOfValue.splice(0, 0, str);
    this._value = copyOfValue.join("");
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder._value); // '.^'

builder.prepend("^");
console.log(builder._value); // '^.^'

builder.pad("=");
console.log(builder._value); // '=^.^='
