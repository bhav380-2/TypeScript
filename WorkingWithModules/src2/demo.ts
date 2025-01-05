interface Customer{
    save(): void

}


// 1.________________________________________
class Customer{}

const customer = new Customer();
// class customer does not have save() method, 
// we can add save() method using Customer interface
// use when save function is third party function
// typeScript automatically merges Customer interface with Customer class
customer.save = function(){   

}

// 2.____________use case : we can define global variable______
// interface defined in globals.d.ts

const myVar = window.MY_VAR;