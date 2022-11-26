using System;

namespace ApplicationConsole
{
    internal interface IEmployeeCreterias
    {
       void Bond();
       void SalaryPackage();
       void NoHolidays();
    }
    
    internal class IEmployeeCreteriasImple : IEmployeeCreterias
    {
       public void Bond()
       {
         Console.WriteLine("Hi i am aggreed the bond for 5 years...!");
       }
       
       public void SalaryPackage()
       {
         Console.WriteLine("the package 10lpa is enoughfor me thank you...!");
       }
       
       public void NoHolidays()
       {
         Console.WriteLine("No holidays is there ...sad for me but i am enjoing to work with us...!");
       }
    }
    
    class HelloWorld 
    {
      static void Main() 
      {
         IEmployeeCreteriasImple iEmployeeCreteriasImple=new IEmployeeCreteriasImple();
         iEmployeeCreteriasImple.Bond();
         iEmployeeCreteriasImple.SalaryPackage();
         iEmployeeCreteriasImple.NoHolidays();
      }
    }
}