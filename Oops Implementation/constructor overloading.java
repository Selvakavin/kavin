class A 
{   
    int a=6;
    public A()
    { 
        System.out.println("a method "+this.a);
    }
    public A(int a)
    {   
        this();
        System.out.println("a int method");
    }

}
class Main extends A
{   
     Main()
    {   super(6);
       System.out.println("main method "+super.a);
    }
    Main(int a)
    {   
        this();
        System.out.println("main int method");
    }
	public static void main(String[] args) 
	{
	    Main o=new Main(3);
	   
	}
	
	
}