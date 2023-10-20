class Employee{
    login(){
        console.log(`Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee{
    requestCofee(x){
        console.log(`Employee has requested ${x} cofees`);
    }

    requestLeaves(leaves){
        super.requestLeaves(leaves);
        console.log("leaves approved to programmer!")
    }
}

let p1 = new Programmer();
p1.login();
p1.requestLeaves(2);