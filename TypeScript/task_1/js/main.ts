export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export const printTeacher: (firstName: string, lastName: string) => string = function (firstName: string, lastName: string) {
    return `${firstName.slice(0, 1)} ${lastName}`;
};

  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};


export class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    
    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName;
    }
}


export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
}