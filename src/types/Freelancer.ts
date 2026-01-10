interface IFreelancer {
    id: number;
    name: string;
    title: string;
    rating: number;
    reviews: number;
    hourlyRate: number;
    skills: string[];
    availability: "available" | "busy"
    profileImage: string
}

export default IFreelancer;