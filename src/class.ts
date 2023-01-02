// Class 
// adalah sebuah blueprint atau krangka untuk membuat sebuah object
// di dalam class juga menyimpan beberapa sifat dan perilaku sebuah object
// seperti property dan method
// void tidak bakal me return apa2
// type anotation
export class User {
    public name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }
    setName(value: string): void {
        this.name = value;
    }
    getName = (): string => {
        return this.name;
    }
}
// let user = new User("Roihan");
// console.log(user.name);

// // lebih ringkas

// export class User2 {
//     constructor(public name: string, ) {
//     }
// }

// let user2 = new User2("Arrafli");
// console.log(user2.name);


// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
// super digunakan untuk memanggil parent classnya

class Admin extends User {
    read: boolean = true
    write: boolean = true
    phone: string
    private _email: string = ""
    static getRoleName: string = "Admin"

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone
    }
    static getNameRole() {
        return "Aku"
    }

    getRole(): {read: boolean, write: boolean} {
        return{
            read: this.read,
            write: this.write
        };
    };
    set email(value: string){
        if(value.length <5){
            this._email = "email salah"
        }else {
            this._email = value
        }
    }
    get email(): string{
        return this._email
    }
}

// let admin = new Admin("087805459690", "Roihan", 17);
// admin.getName();
// admin.getRole();
// admin.setName("Roi");
// admin.phone;

// admin.email = "roihan@gmail.com"
// console.log(admin.email);

let admin = Admin.getNameRole();
console.log(admin);

