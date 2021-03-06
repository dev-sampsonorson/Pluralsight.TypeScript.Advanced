import * as Interfaces from './interfaces';
import { sealed, logger, writable } from './decorators';

class Employee {
    title: string;
    
    addToSchedule(): void {
        console.log('Employee added to schedule.');
    }

    logTitle(): void {
        console.log(`Employee has the tile ${this.title}`);
    }
}

class Researcher {
    doResearch(topic: string): void {
        console.log(`Doing research on ${topic}.`);
    }
}

const CLASS_INFO: unique symbol = Symbol();

/* @logger
@sealed('UniversityLibrarian') */
class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
    
    name: string;
    email: string;
    department: string;

    [CLASS_INFO](): void {
        console.log('This class represents a UniversityLibrarian.');
    }

    static [Symbol.hasInstance](obj: Object) { // instanceof
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }
    
    @writable(true)
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    assistFaculty() {
        console.log('Assisting faculty.');
    }

    // implementation of the following to be provided by the mixing function
    title: string;
    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;
}

// @logger
class PublicLibrarian implements Interfaces.Librarian {

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log('Assisting customer.');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community.');
    }
}

abstract class ReferenceItem {
    
    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }
    
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    
    abstract printCitation(): void;
}

export { UniversityLibrarian, ReferenceItem, Employee, Researcher, PublicLibrarian, CLASS_INFO };