class Test {
  tokens: any[];
  id: string;

  constructor() {
    console.log("test!");
    this.tokens = [];
  }

  addEvent(): void {
    document.getElementById("halo3").addEventListener("click", function() {
      this.innerHTML = "Oh mannnnn";
    });
  }

  sayHi(): void {
    this.tokens.push("4");

    let num = 5;

    switch (num) {
      case 5:
        console.log(num);
        console.log(this.tokens);
        // this.getId();
        break;
    }
  }
}

window.addEventListener(
  "DOMContentLoaded",
  function() {
    let testObj = new Test();
    testObj.sayHi();
    testObj.addEvent();
  },
  false
);
