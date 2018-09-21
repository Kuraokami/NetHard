import { Moment } from 'moment';

export const enum EmployeeType {
    HOURLY = 'HOURLY',
    MONTHLY = 'MONTHLY'
}

export interface IEmployee {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    hireDate?: Moment;
    salary?: number;
    yearlySalary?: number;
    commissionPct?: number;
    type?: EmployeeType;
}

export class Employee implements IEmployee {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public hireDate?: Moment,
        public salary?: number,
        public yearlySalary?: number,
        public commissionPct?: number,
        public type?: EmployeeType
    ) {}
}
