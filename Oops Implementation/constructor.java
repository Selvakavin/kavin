BASIC PROGRAM 

public class Main
{   
    Main()
    {
        System.out.println("constructor");
    }
	public static void main(String[] args) 
	{
	    Main o=new Main();
	    Main o1=new Main();
	    Main o2=new Main();
	    Main o3=new Main();
	}
	
	
}


------------------------------------------------------------------
class student 
{
    String name;
	int no;
	public student(String name,int no)
	{
	    this.name=name;
	    this.no=no;
	    //System.out.println(this.name+"  "+this.no);
	}
}

public class Main
{
	public static void main(String[] args) 
	{
	        student o=new student("kavin",102);
	        System.out.println(o.name+"  "+o.no);
	}
	
	
}