package pack2;
import pack3.car;
public class absdemo extends car {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		absdemo a=new absdemo();  
		car.inner b=new inner();
		b.innermethod();
		a.start();
		a.clutch();
		a.brake();
		a.stop();
		System.out.println("oil available is "+a.getoil()+" "+"litre");
		a.bike();
		a.cycle();
		a.setoil(8);;

	}
	public void brake()
	{
		System.out.println("i will put brake");
	}
	public void clutch()
	{
		System.out.println("i will put clutch");
	}
	public void cycle()
	{
		System.out.println("i have cycle");
	}
	public void bike()
	{
		System.out.println("i have bike");
	}
	

}


//package 3

package pack3;

public abstract class car {
	private int oil=3;
	public abstract void brake();
	public abstract void clutch();
	public void start()
	{
		System.out.println("i will start");
	}
	public  void stop()
	{
		System.out.println("i will stop");
	}
	public int getoil()
	{	
		int oil=8;
		return this.oil;
	}
	public void setoil(int oil)
	{
		this.oil=oil;
		System.out.println(this.oil);
	}
	public car()
	{
		System.out.println("i am constructor");
	}
	public static class inner
	{
		public void innermethod()
		{
			System.out.println("i am abstract class inner method");
		}
	}

}