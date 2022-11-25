using System;

// Hello worlds in c#

class MainClass 
{
  static void Main() 
  {
    Console.WriteLine("Hello World");
    
    // identifiers
    int a=1;
    
    // data types
    long b=29999;
    float f=2.4f;
    double d=2.4;
    bool boolean = true;
    
    // for constant purspose use const keyword
    const float PI = 3.14f;
    
    Console.WriteLine("different data type values are : int is {0} long  is {1} float is {2} double is {3} bool is {4}",a,b,f,d,boolean);
    
    // Getting input from Console
    
    //Console.WriteLine("Enter the your name getting input from user");
    //String input=Console.ReadLine();
    //Console.WriteLine("Your entered input is"+input);
    
    // operators in c#
    // + - * / & % 
    Console.WriteLine(a+b);
    
    
    // control statements
    // finding max numbers 
    
    int FirtsNum=10, SecondNum=20;
    if(FirtsNum>SecondNum)
    {
      Console.WriteLine("FirtsNumber is greater");
    }
    else 
    {
      Console.WriteLine("Second number is Greater");
    }
    
    // loops in c#
    
    // print first 10 numbers using for loops
    Console.WriteLine("Print first ten numbers using for loop");
    for(int i=1;i<=10;i++)  Console.WriteLine(i);
    
    Console.WriteLine("Print first ten numbers using while loop");
    while(a<=10)Console.WriteLine(a++);
    
    // Functions 
    // Creating a object for accessing a non static members
    MainClass main=new MainClass();
    main.myFunction();
    
    // Accessing an static method
    MainClass.StaticMethod();
    
    // Arrays in c#
    // Initializing an Arrays
    int[] array={1,2,3,4,5,6};
    
    // Accessing elements in a for each loop
    
    Console.WriteLine("\nAccessing an array elements in a foreach loop \n");
    foreach(int element in array)
    Console.WriteLine(element);
    
    // creating array with dynamic memory
    int[] values=new int[10];
    
    // Array Methods
    
    Console.WriteLine("Array Methods___________________________________________________");
    
    Console.WriteLine("Sorting the array");
    Array.Sort(array);
    for(int i=0;i<array.Length;i++)
      Console.WriteLine(array[i]);
      
    Console.WriteLine("Reverse the array ");
    Array.Reverse(array);
    for(int i=0;i<array.Length;i++)
      Console.WriteLine(array[i]);
      
    // finding the length of the array
    Console.WriteLine("The Length of the array",array.Length);
    
    // Break and continue statements
    Console.WriteLine(" The use of Break and continue statements");
    for(int i=1;i<=10;i++)
    {
      if(i==5)
      {
        Console.WriteLine("The number {0} is not printed because using a continue statement",i);
        continue;
      }
      Console.WriteLine(i);
    }
    
    
    // Strings
    String stringname="I am learning a cSharp";
    Console.WriteLine("Strings "+stringname);
    
    
  }
  
  public  void myFunction()
  {
    Console.WriteLine("I am Invoked by a function");
  }
  
  public static void  StaticMethod()
  {
    Console.WriteLine("I am invoked by a static method");
  }
}