using System;

namespace ConsoleApplication
{
    
    class HelloWorld 
    {
      static void Main()
      {
          var information =new {
              Id=1,
              Name="Kavinsk",
              IsActive=true
          };
          Console.WriteLine("Id: " + information.Id);
          Console.WriteLine("Name: " + information.Name);
          Console.WriteLine("IsActive: " + information.IsActive);
      }
    }
}
