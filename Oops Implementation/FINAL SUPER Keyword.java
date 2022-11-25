class A 
{
    int a=91;
    public void m()
    {  
        int a=8;
        System.out.println(a);
        System.out.println(this.a);
        
    }
}
class B extends A 
{
    int a=905;
    public void m(int s)
    {  
        int a=81;
        System.out.println(a);
        System.out.println(this.a);
        System.out.println(super.a);
    }
}
class C extends B 
{
    int a=90;
    public void m(int s)
    {  
        int a=81;
        System.out.println(a);
        System.out.println(this.a);
        System.out.println(super.a);
    }
}
public class Main
{   
    int a=9;
	public static void main(String[] args)
	{
		A o=new B();
		o.m();
	}
}
