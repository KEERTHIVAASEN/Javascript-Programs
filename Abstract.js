class AbstractClass {
    abstract_method() {}
  }
  
  class ConcreteClass extends AbstractClass {
    abstract_method() {
      console.log("Method implementation in concrete class");
    }
  }
  
  const obj = new ConcreteClass();
  obj.abstract_method();