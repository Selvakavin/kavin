//CASE:1

//AUTOMATIC PROMOTION

public class Main
{
	public static void main(String[] args)
	{   Main o=new Main();
	    o.m1(2);
	    o.m1(4.4f);
	    o.m1('s'); //automatic data promotion nadakum promote agi method match ana excute agum
	}
	public void m1(int a)
	{
	    System.out.println("hi");
	}
	public void m1(float a)
	{
	    System.out.println("hello");
	}
}


//CASE:2

public class Main
{
	public static void main(String[] args)
	{   Main o=new Main();
	    o.m1(new Object());
	    o.m1("kavin");
	    o.m1(null); //null vanthu rendu method laium applicable but chuld is preference
	}
	public void m1(Object i)
	{
	    System.out.println("hi");
	}
	public void m1(String a)
	{
	    System.out.println("hello");
	}
}


//CASE :3 
//EXACT MATCH OCCUR 

public class Main
{   
    public void m1(String s)
    {
        System.out.println("string version");
    }
     public void m1(StringBuffer s)
    {
        System.out.println("string buffer version");
    }
    
    
	public static void main(String[] args) 
	{
		Main o=new Main();
		o.m1("kavin");
		o.m1(new StringBuffer("kavin sk"));
		//o.m1(null);   //rendume exact match aguthu so ambiguous problem
	}
}


//CASE :4
//figth with old and new method

public class Main
{   
    public void m1(int s)
    {
        System.out.println("int metrhod ");
    }
     public void m1(int... s)
    {
        System.out.println("var-arg method");
    }
    
    
	public static void main(String[] args) 
	{
		Main o=new Main();
		o.m1();
		o.m1(4);//exact method
		o.m1(4,2);
	
	}
}
//CASE :6


class A 
{
    
}
class B extends A 
{
    
}
class C extends B 
{
    
}
public class Main
{   
    public void m(A s)
    {
        System.out.println("A method  ");
    }
     public void m(B a)
    {
        System.out.println("B  method");
    }
     public void m(C a)
    {
        System.out.println("C  method");
    }
    
	public static void main(String[] args) 
	{
		Main t=new Main();
		A o=new A();
		t.m(o);// amethod
	   	B o1=new B();
		t.m(o1);// b method
		C o2=new C();
		t.m(o2);//c method
		A o3=new B();
		t.m(o3); //a method
		A o4=new C();
		t.m(o4);//a methos
		B o5=new C();
		t.m(o5);// b method 
	}
}
