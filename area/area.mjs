

export function rectArea(length, breadth) { 
    let a = length * breadth; 
    console.log('Area of the rectangle is ' + a + ' square unit'); 
} 
  


export function circArea(radius)
{
    let b = Math.PI * radius * radius;
    
    console.log('Area =', b);
}


export function cylinder(cyl_height, cyl_diameter) {
      var radius = cyl_diameter / 2;
    let c = cyl_height * Math.PI * radius * radius;
    console.log('volume =', c);
}
