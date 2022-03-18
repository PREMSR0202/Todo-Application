import { Status } from '../constants/status';

export interface ItemModel {
    id?: number
    title: string,
    category: String,
    description: string,
    status: Status,
    date: Date
}
