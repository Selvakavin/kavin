using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication
{
    class User
    {
        private String  _name;
        private String _email;
        
        public User()
        {
            _name="Selvakavin";
            _email="abc@.com";
        }
        
        public void Read()
        {
            Console.WriteLine("Enter the name ");
            _name=Console.ReadLine();
            Console.WriteLine("Enter the email ");
            _email=Console.ReadLine();
        }
        
        public void Display()
        {
            Console.WriteLine("Hello {0} your email id is {1}",_name,_email);
        }
        
    }
    
    
    class MainClass 
    {
      static void Main(string[] args) 
      {
         User user=new User();
         user.Read();
         user.Display();
      }
    }
}
