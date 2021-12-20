import IDomainEvent from "../../../shared/domain/IDomainEvent";
import { IlikeAdded } from "../DomainEvent/ILikeAdded_DomainEvent";
import LikeAdded_book from "../DomainEvent/LikeAdded_book";
import JobOfferLikedId from "../ValueObjects/JobOfferLikeId";




export class JobOfferLike{
	private eventRecorder: IDomainEvent[] = [];
/*    public _id!: string;
    private _value: boolean = false;
	constructor(_id: string, _value: boolean, private readonly _jobOfferRepository: IlikeAdded){
		this._id = _id;
		this._value = _value ;
	}
*/	constructor(public id: JobOfferLikedId,
    			private value: boolean){};
/*				
	public get id(): string {
		return this._id;
	  }
	public set id(id: string) {
		this._id = id;
	}

	public get value(): boolean {
		return this._value;
	}
	public set value(value: boolean) {
		this._value = value;
	}

*/
	public getEvents(){
		return this.eventRecorder;
	}

	public addEvent(domainEvent: JobOfferLikedId){
		this.eventRecorder.push(domainEvent);
	}

	static aggreeliked(id: JobOfferLikedId){
		const test = new JobOfferLike(id, true);
		test.eventRecorder.push(new LikeAdded_book(id, true))
		return test;
	}
	
	static removeLiked(id: JobOfferLikedId){
		const test = new JobOfferLike(id, false);
		test.eventRecorder.push(new LikeAdded_book(id, true))
		return test;
	}

}

