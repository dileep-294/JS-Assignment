const { addImage,addName } = require('./script');

test('DOM is setup', function () {
   
     addPerson("jallipalli","dileep","francisca.sanchez@example.com","Mr");
     expect(document.getElementsByClassName('container').length).toEqual(1);
 });
test('check Image',function(){
    var y=document.getElementsByClassName('logo');
    expect(y).toBeTruthy();
});
test('check Name',function(){
    var x= addName("jalli[palli","Dilep","MR");
    var y=document.getElementsByClassName('spanE');
    expect(y.length).toEqual(0);
});
//  test('check Name',function(){
//      var y=document.getElementsByClassName('spanE');
//      expect(y.length).toEqual(1);
//  });
