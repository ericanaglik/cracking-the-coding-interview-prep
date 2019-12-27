function Deque() {
  this.stac = new Array();
  this.popback = function () {
    return this.stac.pop();
  }
  this.pushback = function (item) {
    this.stac.push(item);
  }
  this.popfront = function () {
    return this.stac.shift();
  }
  this.pushfront = function (item) {
    this.stac.unshift(item);
  }
}

module.exports = Deque