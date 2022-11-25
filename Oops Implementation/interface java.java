interface A 
{   
    public void m1();
    public void m2();
}
abstract class B implements A
{
	
	public void m1()
	{
	   System.out.println("hi");    //intha place la oru method mattum implement pannirukom so we use abstract
	}
	
}
class Main extends B
{
    public static void main(String[] args) 
	{   
		Main o=new Main();
		o.m1();
	        o.m2();
	}
	public void m2()
	{
	   System.out.println("hello");
	}
}
