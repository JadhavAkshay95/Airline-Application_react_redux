class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullname() {
    return this.fname + ' ' + this.lname;
  }
}

var p = new Person('akshay', 'jadhav');
p.fname = 'name';
console.log(p.fname);
console.log(p);
