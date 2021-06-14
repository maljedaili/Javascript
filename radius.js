function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return Math.PI*this.radius;
    };
}
var r = new circle(3);
console.log('Area =', r.area().toFixed(2));
console.log('perimeter =', r.perimeter().toFixed(2))