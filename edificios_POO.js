"use strict";
let arrayBuilding = [];

class Building{
constructor (name, area, floorNumber){
        this._name = name;
        this._area= area;
        this._floorNumber = floorNumber;
}

    get name(){
        return this._name;

    } 

    get area(){
        return this._area;

    }     
    get floorNumber(){
        return this._floorNumber;
        
        }     

    set arrayBuilding (arrayBuilding){
            this._arrayBuilding = arrayBuilding;
        }
    

//LA LÓGICA VA AL MÉTODE (les operacions)


clean(){
//Aquestes 2 variables no em fan falta pq están ja a la classe Building
//let area = parseInt(document.getElementById("area")).value; 
//let floorNumber = parseInt(document.getElementById("floorNumber")).value; 
let adMinute = parseInt(this._floorNumber*0.5);
let costNeteja = parseInt((this._area/5)+adMinute)*30;
console.log(area);

document.getElementById("demo").innerHTML = `el cost mensual de neteja es ${costNeteja}`

}

//costVigilancia() It's polymorphism. I create the method in the childclasses

}

class Hotel extends Building {
    constructor (name, area, floorNumber) {
        super (name, area, floorNumber);
    }      
        securityCost(){
            let numVigilants;
            let costVigilant;
            console.log(numVigilants);
                
            numVigilants = parseInt(Math.ceil(this._area/1000)); 
            costVigilant = parseInt((numVigilants*1300)+500);   
            document.getElementById("demo").innerHTML = `${this._name} needs ${numVigilants} security guards`
            document.getElementById("demo2").innerHTML = `The monthly Hotel'security is: ${costVigilant} €` 
        }


}

let hilton = new Hotel ("Hilton", 12110, 10);
let hostalPepita = new Hotel ("Hostal Pepita",4544,3);

arrayBuilding.push(hilton);
arrayBuilding.push(hostalPepita);
console.log("********");
console.log(arrayBuilding);


class Hospital extends Building {
    constructor (name, area, floorNumber) {
        super (name, area, floorNumber);
    }

    securityCost(){
        let numVigilants;
        let costVigilant;
        console.log(numVigilants);
            
        numVigilants = parseInt(Math.ceil(this._area/1000)); 
        console.log(numVigilants);
        costVigilant = parseInt(numVigilants*1300);  
        console.log(costVigilant);
            
        document.getElementById("demo").innerHTML = `${this._name} needs ${numVigilants} security guards`
        document.getElementById("demo2").innerHTML = `The monthly hospital'security is: ${costVigilant} €` 
            
    }

}

function repartirDinar(){

    }


let hospi1 = new Hospital ("Hospital Mare de Deu")
let hospi2 = new Hospital ("HGC")

class Cinema extends Building {
    constructor(name, area, floorNumber){
        super(name, area, floorNumber)
    }
    securityCost(){
        let numVigilants;
        let costVigilant;
        console.log(numVigilants);
            
        numVigilants = parseInt(Math.ceil(this._area/3000)); 
        console.log(numVigilants);
        costVigilant = parseInt(numVigilants*1300);  
        console.log(costVigilant);
            
        document.getElementById("demo").innerHTML = `${this._name} needs ${numVigilants} security guards`
        document.getElementById("demo2").innerHTML = `The monthly cinema'security is: ${costVigilant} €`            

    }
}

    function projectarSessio(){

    }



let montecarlo = new Cinema ("Montecarlo", 33300, 17)
let principal = new Cinema ("Principal",4200,5 )
arrayBuilding.push(montecarlo, principal)
console.log("222********");
console.log(arrayBuilding);

function hotelCreate(){
    let name = (document.getElementById("name")).value; 
    let area = parseInt((document.getElementById("area")).value); 
    let floorNumber = parseInt((document.getElementById("floorNumber")).value); 
    
    let hotel = new Hotel (name, area, floorNumber)
    arrayBuilding.push(hotel);
    console.log(arrayBuilding);
    }
    
function cineCreate(){
    let name = (document.getElementById("name")).value; 
    let area = parseInt((document.getElementById("area")).value); 
    let floorNumber = parseInt((document.getElementById("floorNumber")).value); 
        
    let cinema = new Cinema (name, area, floorNumber)
    arrayBuilding.push(cinema);
    console.log(arrayBuilding);
    }
    
function hospitalCreate(){
    let name = (document.getElementById("name")).value; 
    let area = parseInt((document.getElementById("area")).value); 
    let floorNumber = parseInt((document.getElementById("floorNumber")).value); 
            
    let hospital = new Hospital (name, area, floorNumber)
    arrayBuilding.push(hospital);
    console.log(arrayBuilding);
    }

function cleanBuilding(){
let name = (document.getElementById("name2")).value; 
for (let i=0; i<arrayBuilding.length; i++){
    if (name == arrayBuilding[i].name){
        arrayBuilding[i].clean(name);
    } 
}
} 

function securityCost(){
    let name = (document.getElementById("name3")).value; 

    for (let i=0; i<arrayBuilding.length; i++){
        if (name == arrayBuilding[i].name){
            if ((arrayBuilding[i] instanceof Hospital)== true){
                arrayBuilding[i].securityCost();
                console.log(Hospital instanceof Building);
            } else if ((arrayBuilding[i] instanceof Hotel)== true){
                arrayBuilding[i].securityCost();
            } else if ((arrayBuilding[i] instanceof Cinema)==true){
                arrayBuilding[i].securityCost();
                console.log(Cinema instanceof Building);
            } else {
            document.getElementById("demo").innerHTML = `This building is not in our database`
        }
        }
    }
    
}


//INSTANCEOF del objecte!!!!
//métode abstracte => he de fer el costVigilant en cada una de les classes filles!! es el mateix 
//nom, pero amb l'instanceof els diferencio!!!

/*
ITERATION WITH SWITCH (Work in progress)
function securityCost(){
    let name = (document.getElementById("name3")).value; 
    console.log("vamos a ver")  
    console.log(name)


    for (let i=0; i<arrayBuilding.length; i++){
        if (name == arrayBuilding[i].name){
            switch(arrayBuilding[i]){
                case (arrayBuilding[i] instanceof Hospital):
                    arrayBuilding[i].securityCost();     
                case (arrayBuilding[i] instanceof Hotel):
                    arrayBuilding[i].securityCost();
                case (arrayBuilding[i] instanceof Cinema):
                    arrayBuilding[i].securityCost();
                default:
                    document.getElementById("demo").innerHTML = `This building is not in our database`                    
                }
            }
            
        }

}

*/