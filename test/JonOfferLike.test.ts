import { JobOfferLike } from "../Domain/JobOffer/Entities/JobOfferLike";
import JobOfferLikedId from "../Domain/JobOffer/ValueObjects/JobOfferLikeId";
import UniqueId from "../shared/domain/UniqueUUID";

describe('Value Object likeID', () =>{
	test('Should return the happy path (instance)',() =>{
        
		const id = new UniqueId().getId(); // structure uuid "a24a6ea4-ce75-4665-a070-57453082c256"
        const JobOfferLikedIdnew2 = JobOfferLikedId.create(id);
		const JobOfferLikedIdnew = JobOfferLike.aggreeliked(JobOfferLikedIdnew2)
	//	expect(JobOfferLikedId.create(id)).toBeInstanceOf(JobOfferLikedId);
		expect(JobOfferLikedIdnew).toBeInstanceOf(JobOfferLike)
	})
})