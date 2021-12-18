import IDomainEvent from "../../../shared/domain/IDomainEvent";
import { ID } from "../ValueObjects/JobOfferLikeId";

export default class LikeAdded_book implements IDomainEvent{
    /*publicprivate _id!: string;
    private value!: boolean;*/

    constructor(public id: ID,
        private value: boolean){}
/*	public get id(): string {
		return this._id;
	  }
	public set id(id: string) {
		this._id = id;
	}

    public get jobOfferLiked(): boolean{
        return this.value;
    }
    public set jobOfferLiked(value: boolean){
        this.value = value;
    }*/
}