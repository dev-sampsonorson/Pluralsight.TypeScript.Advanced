"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const util = require("./lib/utilityFunctions");
require("./LibrarianExtension");
function getBooksByCatetory(cat) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject('No books found for that category.');
            }
        });
    });
    return p;
}
function logSearchResults(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundBooks = yield getBooksByCatetory(bookCategory);
        console.log(foundBooks);
        return foundBooks;
        /*
        try {
                let foundBooks = await getBooksByCatetory(bookCategory);
                console.log(foundBooks);
            } catch (error) {
                console.log(error);
            }
        
        
            */
    });
}
console.log('Beginning search...');
logSearchResults(enums_1.Category.Fiction)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));
console.log('Search submitted...');
/* function getBooksByCatetory(cat: Category): Promise<string[]> {
    let p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks: string[] = util.GetBookTitlesByCategory(cat);

            if (foundBooks.length > 0) {
                resolve(foundBooks);
            } else {
                reject('No books found for that category.');
            }
        });
    });

    return p;
}

console.log('Beginning search...');
getBooksByCatetory(Category.Biography)
    .then(titles => {
        console.log(`Found titles: ${titles}`);
        throw 'something bad happend';
        return titles.length;
    }, reason => { return 0; })
    .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search submitted...'); */
/* interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

function getBooksByCatetory(cat: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            let foundBooks: string[] = util.GetBookTitlesByCategory(cat);

            if (foundBooks.length > 0) {
                callback(null, foundBooks);
            } else {
                throw new Error('No books found.');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(`Found the following titles:`);
        console.log(titles);
    }
}

console.log('Beginning search...');
getBooksByCatetory(Category.Biography, logCategorySearch);
console.log('Search submitted...'); */
process.stdin.resume();
//# sourceMappingURL=app.js.map