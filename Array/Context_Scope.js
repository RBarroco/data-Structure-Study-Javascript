//context javaScript
const object4 = {
  c: function() {
    console.log(this);
  }
};
object4.c();

//when using the arrow function we scope the function inside of itself;
const a = () => {
  console.log(this);
};
a();

//the ES5 notation scope the function globally in the window reference.
function b() {
  console.log(this);
}
b();
