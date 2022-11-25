class A 
{
     A()
    {
        System.out.println("a no arg");
    }
    A(int a)
    {
        System.out.println("a  arg");
    }
}
class B extends A 
{
   B()
   {
       System.out.println("b no arg");
   }
   B(int a)
   {    super(8);
       System.out.println("b arg");
   }
}
class C extends B 
{
   C()
   {
       System.out.println("c no arg");
   }
   C(int a)
   {    super(8);
       System.out.println("c arg");
   }
}
public class Main extends C
{    int a=9;
	public static void main(String[] args)
	{
	    C o=new C(8);
	    
	}
}
