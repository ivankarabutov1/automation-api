

export function sum(a: number, b: number) {
    return a + b;
  }
 
  export function sumName(a: string, b: string){
    return a + ' ' + b;
  }

type name = {
    firstName: string,
    secondName: string
}
export function fullName(name: name){
    return `${name.firstName} ${name.secondName}`
}

interface profile {
    firstName: string,
    secondName: string,
    age: number

}

export class Profiles{
    _profiles:profile[];
    constructor() {
        this._profiles=[];
    }

    set profiles(profiles: profile[]){
        this._profiles=profiles
    }
    addProfile(profile:profile){
        this._profiles.push(profile)
    }
}



/* создать интерфейс или тип объекта который будет содержать имя фамилию и возраст */
