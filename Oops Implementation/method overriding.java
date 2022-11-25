class A 
{
    public  void m(int i)
    {
        System.out.println("hi");
    }
}
class B extends A 
{
    public void m(int i)
    {
        System.out.println("hi   111");
    }
}
public class Main
{
	public static void main(String[] args) 
	{
		A o=new A();
		o.m(8); //hi
		B o1=new B();
		o1.m(5);//hi 111
		A o2=new B();			//method resolution takes by jvm at rum time
		o2.m(6); //hi 111
	}
}
