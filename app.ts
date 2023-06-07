class Transaction{
  data:number;
  constructor(data:number){
      this.data = data;
  }
  
}

class Account{
  accno:number;
  balance:number;
  constructor(accno:number){
      this.accno=accno;
      this.balance = 0;
  }
  process(t:Transaction):boolean{
      if(t.data!==0){
          this.balance += t.data;
          return true;
      }
      return false;
  }
};

class FilteredAccount extends Account{
  private FilteredCount:number;
  constructor(accno:number){
      super(accno);
      this.FilteredCount = 0;
  }
  process(t:Transaction):boolean{
      if(t.data===0){
          this.FilteredCount++;
          return false;
      }
      else return super.process(t);
  }
  filter():number{
      return this.FilteredCount;
  }
}
const acc = new FilteredAccount(123);
const t1 = new Transaction(10);
const t2 = new Transaction(0);
const t3 = new Transaction(-5);
let trans1:boolean = acc.process(t1);
console.log(trans1);
let trans2:boolean = acc.process(t2);
console.log(trans2);
let trans3:boolean = acc.process(t3);
console.log(acc.balance);
console.log(acc.filter());