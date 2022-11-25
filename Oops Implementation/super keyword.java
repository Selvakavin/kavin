case 1
DEFAULT CONSTRUCTOR

class A 
{
    public A()
    {
        System.out.println("A method");
    }
   
}
class B extends A 
{
    public B()
    {   
        System.out.println("B method");
    }
   
}

public class Main
{
	public static void main(String[] args)
	{
		B o=new B();
		
	}
}


CASE 2
//IF WE PASS CONSTRUCTOR PARAMETER IN PARENT CLASS DEFAULT CONSTRUCTOR ONLY EXCUTE

class A 
{
    public A()
    {
        System.out.println("A method");
    }
    public A(int a)
    {	
        System.out.println("A int method");
    }
}
class B extends A 
{
    public B()
    {   //by default we have super() method
        System.out.println("B method");
    }
    public B(int a)
    {  //by default we have super() method
        System.out.println("B int method");
    }
}

public class Main
{
	public static void main(String[] args)
	{
		B o=new B();
		B o1=new B(4);
	}
}
