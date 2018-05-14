const DEFAULT_CAPACITY = 10;

function Airport(capacity = DEFAULT_CAPACITY) {
  this.planes = [];
  this.capacity = capacity;
}
