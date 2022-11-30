using System;
using System.Collections.Generic;
public class BaseClass
{
   public BaseClass()
   {
      Console.WriteLine("I am accessde by base method");
   }
}

public class UserDetails : BaseClass
{
  private string _email;
  private string _name;
  private string _pass;
  private string _dob;
  private int _pincode;
  public UserDetails(string email, string name, string pass, string dob, int pincode) : base()
  {
    this._email=email;
    this._name=name;
    this._pass=pass;
    this._dob=dob;
    this._pincode=pincode;
  }
}

class HelloWorld 
{
  static void Main() 
  {
    Console.WriteLine("Constructors in c#");
    //Initializing an Constructor
    Console.WriteLine("Enter the details :\nEnter the email");
    String Email=Console.ReadLine();
    
    Console.WriteLine("Enter the Name\n");
    String Name=Console.ReadLine();
    
    Console.WriteLine("Enter the password\n");
    String Password=Console.ReadLine();
    
    Console.WriteLine("Enter the Dob\n");
    String Dob=Console.ReadLine();
    
    Console.WriteLine("Enter the pincode\n");
    int Pincode=Int32.Parse(Console.ReadLine());
    
    UserDetails userDetails=new UserDetails(Email,Name,Password,Dob,Pincode);
    var userDetailsList=new List<UserDetails>();
    userDetailsList.Add(userDetails);
  }
}
