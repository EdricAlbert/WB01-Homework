var a,b,c,d,e,f,g;
    a = prompt("1.Radians to Degrees: Hãy nhập số Radian",'');
    b = prompt("2.Celsius to Fahrenheit: Hãy nhập số độ C",'');
    c = prompt("3.Pound to Kilogram: Hãy nhập số pound",'');
    d = prompt("4.Matchstick Houses: Hãy nhập số nhà",'');
    e = prompt("5.Sum of Cubes: (giá trị thứ nhất)",'');
    f = prompt("5.Sum of Cubes: (giá trị thứ hai)",'');
    g = prompt("5.Sum of Cubes: (giá trị thứ ba)",'');
alert('Số độ trong bài 1 là: ' + (a/(Math.PI/180)));
alert('Số độ F là ' + (1,8*b+32));
alert('Số Kilogram là ' + (c*0.45359237));
alert('Số diêm để làm ' + d + ' nhà là: ' + (d*6-(d-1)));
alert('Tổng khối lập phương là ' + (e*e*e+f*f*f+g*g*g))