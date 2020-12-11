import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { OptionType } from '../enum/option-type.enum';
import { ButtonObject } from '../model/buttonObject.model';

@Injectable({
    providedIn: 'root'
})
export class AppDataService {

    user = {} as User;
    selectedoption = {} as OptionType;
    buttonObjectArray = [] as ButtonObject[];
    constructor() { }

    setUserInfo(usr: User): void {
        this.user = usr;
    }

    getUserInfo(): User {
        return this.user;
    }

    isUserLoggedIn(): boolean {
        return Object.keys(this.user).length ? true : false;
    }

    setOptionInfo(opn: OptionType): void {
        this.selectedoption = opn;
    }

    getOptionInfo(): OptionType {
        return this.selectedoption;
    }

    setObjectArrayInfo(buttonObj: ButtonObject): void {
        let index: number;
        index = this.buttonObjectArray.findIndex((i) => i.questionNumber === buttonObj.questionNumber);
        console.log(index);
        if (index !== -1) {
            this.buttonObjectArray[index] = buttonObj;
        } else {
            this.buttonObjectArray.push(buttonObj);
        }
    }

    getObjectArrayInfo(): ButtonObject[] {
        return this.buttonObjectArray;
    }
    clearObjectArrayInfo(): void {
        this.buttonObjectArray = [];
    }
}
