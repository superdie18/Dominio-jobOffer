import { JobOfferLike } from "../Entities/JobOfferLike";

export class LikeAdded_DomainEvent {
    constructor(
        private readonly _Likeadded: JobOfferLike
    ){}

    jobOfferLiked(jobOfferid: JobOfferLike){
            
    }

}
