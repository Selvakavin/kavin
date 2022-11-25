abstract class A 
{
    public abstract int add(int a,int b);
    public abstract int multi(int a,int b);
    public abstract int modu(int a);
}
abstract class B extends A 
{
    public int add(int a,int b)
    {
        return a+b;
    }
}
abstract class C extends B 
{
    public int multi(int a,int b)
    {
        return a*b;
    }
}
abstract class D extends C 
{
    public int modu(int a)
    {
        return a%2;
    }
}
class Main extends D 
{
    public static void main(String args[])
    {
        Main o=new Main();
        o.add(7,8);
        o.multi(6,3);
        o.modu(2);
    }
}