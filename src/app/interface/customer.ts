export type CustomerType = 'regular' | 'vip' | boolean;

export interface Customer {
    name: string;
    level: CustomerType;
}
