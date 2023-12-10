const { NotImplementedError } = require("../extensions/index.js");

module.exports = class BloomFilter {
  /**
   * @param {number} size - the size of the storage.
   */
  constructor(size) {
    this.size = size=10;
    this.storage = this.createStore(size);
  }

  /**
   * @param {string} item
   */
  insert(item) {
    const hashValues = this.getHashValues(item);
    hashValues.forEach(val => this.storage[val] = true);
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    const hashValues = this.getHashValues(item);
    for (let i = 0; i < hashValues.length; i++) {
      if (!this.storage[hashValues[i]]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Creates the data store for our filter with additional methods.
   * We use this method to generate the store in order to
   * encapsulate the data itself and only provide access
   * to the necessary methods.
   *
   * @param {number} size
   * @return {Object}
   */
  createStore(size) {
    const storage = new Array(size).fill(false);

    function getValue(index) {
      return storage[index];
    }

    function setValue(index, value) {
      storage[index] = value;
    }

    return {
      insert: this.insert.bind(this),
      mayContain: this.mayContain.bind(this),
      storage,
      getValue,
      setValue
    };
  }

  /**
   * @param {string} item
   * @return {number}
   */

  hash1(item) {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
      sum += item.charCodeAt(i);
    }
    return Math.abs(sum) % this.size;
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(item) {
  let product = 1;
  for (let i = 0; i < item.length; i++) {
    product *= item.charCodeAt(i);
  }
  return Math.abs(product) % this.size;
}


  /**
   * @param {string} item
   * @return {number}
   */
  hash3(item) {
    let hash = item.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a&a }, 0);  
    return Math.abs(hash) % this.size;
  }

  /**
   * Runs all 3 hash functions on the input and returns an array of results.
   *
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item)
    ];
  }
};