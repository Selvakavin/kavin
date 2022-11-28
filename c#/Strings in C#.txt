using System;
namespace ConsoleApplication
{
    class HelloWorld 
    {
      static void Main() 
      {
          // strings in csharp
          // initializing the string
          string s="Hello selvakavin";
          Console.WriteLine("Your string is "+"\""+s+"\"");
          
          // Length method in csharp
          Console.WriteLine("Length of the string is "+s.Length);
          
          // upper and lower case
          Console.WriteLine("upper case of the string is "+s.ToUpper());
          Console.WriteLine("Lower case of the method is "+s.ToLower());
          
          // contains
          Console.WriteLine("Contains: is kavin is present inside the method ? :"+s.Contains("kavin"));
          
          //endswith 
          Console.WriteLine("EndsWith : is the string ends with selva ? "+s.EndsWith("selva"));;
          
          // IndexOf 
          Console.WriteLine("Index of the string selva is "+s.IndexOf("selva"));
          
          // lastIndexOf
          Console.WriteLine("Last index of the string selva is "+s.LastIndexOf("selva"));
          
          //IsNullOrEmpty
          Console.WriteLine("IsNullOrEmpty : is the given string is Empty or Null ? "+IsNullOrEmpty(s));
         }
    }
}
