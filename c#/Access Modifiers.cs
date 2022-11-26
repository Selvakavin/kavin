using System;

public class IDDCIBank
{
  private long amount;
  private string password;
  protected string dob="30-03-2002";
  
  public long Amount {get;set;}
  
  public long Password {get;set;}
}

class Library
{
  public int _noOfBooks=9;
}

public class IDDCIBankSubBranch : IDDCIBank
{
  public IDDCIBankSubBranch()
  {
    Console.WriteLine("Accessing protected members from IDDCIBank "+dob);
  }
}

public class WifiPass
{
   internal string pass="Abc@123";
}

public class HelloWorld 
{
  public static void Main() 
  {
      // Access Modifiers
      Console.WriteLine("Access Modifiers \n1.Private Modifier -> Access only within the class this can be achieved by property");
      IDDCIBank bank=new IDDCIBank();
      Console.WriteLine(bank.Amount);
      
      Console.WriteLine("2.Public modifier we can acces from any from");
      Library library=new Library();
      Console.WriteLine("No of books in library ",library._noOfBooks);
      
      Console.WriteLine("3.Protected we can access only within the class and derived class");
      IDDCIBankSubBranch iDDCIBankSubBranch=new IDDCIBankSubBranch();
      
      Console.WriteLine("4.Internal modifier access only withi the namespace");
      Console.WriteLine(new WifiPass().pass);
  }
}
