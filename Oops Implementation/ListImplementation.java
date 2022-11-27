import java.util.Arrays; 
import java.util.Scanner;
class implementations
{	
	int capacity =2;
	int array[]=new int[capacity];
	int size=0;
	public void add(int val)
	{
		if(size==capacity)
		{
			expandarray();
		}
		array[size++]=val;
		
	}
	private void expandarray()
	{
		capacity*=2;
		array=Arrays.copyOf(array, capacity);
	}
	public void display()
	{
		System.out.println(Arrays.toString(array)+" "+size);
	}
	public void insert(int index,int val)
	{
		for(int i=size;i>index;i--)
		{	
			if(size==capacity)
				expandarray();
			array[i]=array[i-1];
		}
		array[index]=val;
		size++;
	}
	public void delete(int index)
	{
		for(int i=index;i<=size;i++)
		{	
			array[i]=array[i+1];
			if(i==size-1)
			{
				break;
			}
			
		}
		size--;
	}
	public void deleteAtend()
	{
		array[--size]=0;
		
	}
	public void deleteAtbegin()
	{
		for(int i=0;i<size;i++)
		{
			array[i]=array[i+1];
		}
		size--;
	}
	public void get(int index)
	{
		for(int i=0;i<size;i++)
		{
			if(i==index)
			{
				System.out.println("the value if index "+index+" : "+array[i]);
				break;
			}
		}
	}
	public void update(int value1,int value2)
	{
		for(int i=0;i<size;i++)
		{
			if(array[i]==value1)
			{
				array[i]=value2;
			}
		}
	}
	public void getindex(int value)
	{
		for(int i=0;i<size;i++)
		{
			if(array[i]==value)
			{
				System.out.println("the index of value "+value +" :"+i);
				break;
			}
		}
	}
	public boolean contain(int value)
	{	
		int a=0;
		for(int i=0;i<size;i++)
		{
			if(array[i]==value)
			{
				a=1;
				break;
			}
			
		}
		System.out.print("value "+value+" is ");
		return a==1;
	}
	public void clear()
	{
		for(int i=0;i<size;i++)
		{
			array[i]=0;
		}
		size=0;
	}
}
public class listimplementation {
	
	
	public static void main(String ...args)
	{	
		implementations list =new implementations();
		Scanner scan=new Scanner(System.in);
		System.out.println("list implementation using arrays ");
		System.out.println("1.Insert at end ");
		System.out.println("2.Display the list ");
		System.out.println("3.Insert at specified position ");
		System.out.println("4.delete at specified position ");
		System.out.println("5.delete at end ");
		System.out.println("6.delete at bigining ");
		System.out.println("7.get the value ");
		System.out.println("8.update the value ");
		System.out.println("9.index of  the value ");
		System.out.println("10.clear ");
		System.out.println("11.contains the value ");
		System.out.println("12.exit \"bye\"\n");
		while(true)
		{
			System.out.println("\nEnter the ur choice ");
			int n=scan.nextInt();
			switch(n)
			{
			case 1:
				System.out.println("enter the value ");
				list.add(scan.nextInt());
				break;
			case 2:
				list.display();
				break;
			case 3:
				System.out.println("enter the position and value ");
				list.insert(scan.nextInt(),scan.nextInt());
				break;
			case 4:
				System.out.println("enter the position ");
				list.delete(scan.nextInt());
				break;
			case 5:
				list.deleteAtend();
				break;
			case 6:
				list.deleteAtbegin();
				break;
			case 7:
				System.out.println("enter which index value u need ");
				list.get(scan.nextInt());
				break;
			case 8:
				System.out.println("enter the first value  and second value ");
				list.update(scan.nextInt(),scan.nextInt());
				break;
			case 9:
				System.out.println("enter value i return index of that value ");
				list.getindex(scan.nextInt());
				break;
			case 10:
				list.clear();
				System.out.println("list cleared ");
				break;
			case 11:
				System.out.println(" enter value ");
				System.out.println(list.contain(scan.nextInt()));
				break;
			case 12:
				System.out.println("bye");
				System.exit(0);
			default:
				System.out.println("enter the valid choices ");
				
			}
			
		}
		
	}

}
