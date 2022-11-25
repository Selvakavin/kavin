class mythread extends Thread
{
	public void start()
	{
		for(int i=0;i<5;i++)
			System.out.println("start thread");
	}
	public void run()
	{
		for(int i=0;i<5;i++)
			System.out.println("run thread");
	}
}
public class threaddemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		mythread t=new mythread();
		t.start();
		for(int i=0;i<5;i++)
			System.out.println("main thread");
		

	}

}
