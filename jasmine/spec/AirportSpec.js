describe("Airport", function(){
var airport;
const DEFAULT_CAPACITY= 10;

  beforeEach(function(){
    airport = new Airport();
  });

  it("creates an empty plane list with every airport", function(){
    expect(airport.planes).toEqual([]);
  });

  it("sets capacity to default", function(){
    expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
  });

});
