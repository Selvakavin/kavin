using System;

namespace Application
{
    internal class FatherAndMother
    {
        private int _savedDiamonds;
        
        public FatherAndMother()
        {
          
        }
        
        public void Father()
        {
          Console.WriteLine("i am father,i have diamonds for my son");
        }
        
        public virtual void Mother()
        {
          Console.WriteLine("i am mother, i have gold coins for my son");
        }
        
    }
    
    internal class Intermidiate :FatherAndMother
    {
       public void IntermidiatePerson()
       {
         Console.WriteLine("I am intermidiate person i am trying to acces ur diamond and golds thank you...!");
       }
    }
    
    internal class Son : Intermidiate
    {
       public void FatherAndMotherSon()
       {
          Console.WriteLine("Hi i am Son,thank for saving this valuable diamonds and golds...!");
       }
       
       //ovverride mother methods
       public override void Mother()
       {
          Console.WriteLine("Sorry mom i am not statisfied with ur gold cions i am try to ovverride ur gold coins");
       }
    }
    
    class HelloWorld 
    {
      static void Main() 
      {
        Son son=new Son();
        
        son.Father();
        son.Mother();
        son.IntermidiatePerson();
        son.FatherAndMotherSon();
      }
    }
}