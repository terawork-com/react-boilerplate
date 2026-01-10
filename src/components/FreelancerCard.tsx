// import IFreelancer from "../types/Freelancer";

const FreelancerCard = ({ freelancer }: { freelancer: any }) => {
    const submit = () => {}

    return (
        <div className="border rounded-xl p-3">
            {/* Freelancer image */}
            <img
                src={freelancer.profileImage}
                alt={freelancer.name}
                className={`rounded-full w-20 h-20 `}
            />

            {/* Freelancer name */}
            <h2 className="mt-2"> {freelancer.name} </h2>

            {/* Freelancer title */}
            <p className="text-gray-500"> {freelancer.title} </p>

            <p> {freelancer.rating} ({freelancer.reviews}) reviews</p>

            <p> {freelancer.hourlyRate} </p>

            {/* Skills as tags */}
            <div className="my-2 flex flex-wrap gap-2">
                {
                    freelancer.skills.map((skill: string) => (
                        <span key={skill} className="rounded text-sm p-2 bg-gray-200 flex items-center justify-center">
                            {skill}
                        </span>
                    ))
                }
            </div>

            <div className="my-2">
                Status: 
                <span className={freelancer.availability === "available" ? "text-green-600 bg-green-200 p-2 rounded" : "text-red-600 bg-green-200 p-2 rounded"}>
                    {freelancer.availability}
                </span>
            </div>

            <button
                className="mt-3 bg-black text-white rounded hover:text-black hover:bg-transparent"
                onClick={() => submit()}
            >
                Book Now
            </button>
        </div>
    );
}

export default FreelancerCard;