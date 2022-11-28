using System;

namespace ConsoleApplication
{
    class Myclass
    {
        public void MyMethod1() => Console.WriteLine("Initial class method 1");
        
        public void MyMethod2() => Console.WriteLine("Initial class method 2");
        
    }
    
    class AnotherMyClass
    {
        public static void MyMethod3(this Myclass myClass){ Console.WriteLine(" I am declared in Another MainClass Myclass can be able to Access me");}
    }
    class HelloWorld 
    {
      static void Main() 
      {
          Myclass myClass =new Myclass();
          myClass.MyMethod1();
          myClass.MyMethod2();
          myClass.MyMethod3();
      }
    }
    
}
