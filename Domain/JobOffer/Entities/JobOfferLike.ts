import IDomainEvent from "../../../shared/domain/IDomainEvent";

import LikeAdded_book from "../DomainEvent/LikeAdded_book";
import JobOfferLikedId from "../ValueObjects/JobOfferLikeId";




export class JobOfferLike{
	private eventRecorder: IDomainEvent[] = [];

	constructor(public id: JobOfferLikedId,
    			private value: boolean){};

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

// Esta linea esta exrita en la rama principalx2
}

