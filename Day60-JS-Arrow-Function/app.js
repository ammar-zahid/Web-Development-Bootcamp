let sum = () => {
    let a = 8;
    let b = 2;
    let c = a + b;
    console.log(c);
}
sum();

let obj = {
    greet: "Good Morning",
    names: ["ammar", "harry"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greet + " hello " + student);
        });
    }
}

obj.speak();