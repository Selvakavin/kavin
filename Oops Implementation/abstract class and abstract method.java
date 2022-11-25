abstract class A 
{
    public abstract void m1();
    public abstract void m2();
}
class Main extends A
{       
        public void m1()
        {
            System.out.println("hi");
        }
        public void m2()
        {
            System.out.println("hello");
        }
		public static  void main(String args[])
		{
		   Main s=new Main();
		   s.m1();
		   s.m2();
		}
}
