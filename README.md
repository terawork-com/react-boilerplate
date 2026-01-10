
THE CHALLENGE
Build a Freelancer Marketplace Booking Interface
You are building a key feature for TERAWORK's freelance marketplace: a freelancer listing page with booking functionality. This will test your React skills, state management, and understanding of marketplace dynamics.
Part 1: Freelancer Cards Component (30 minutes)
Build a responsive freelancer listing page with the following features:
Required Features
Display Freelancer Cards
Create a component that displays freelancer information in a card format. Each card should show:
Profile picture
Name and title (e.g., 'John Doe - Graphic Designer')
Rating (1-5 stars) and number of reviews
Hourly rate (in NGN)
Skills (display as tags/badges)
Availability status (Available/Busy)
'Book Now' button
Filter Functionality
Add filters to help users find freelancers:
Filter by skill (dropdown with skills from data)
Filter by availability (All/Available/Busy)
Sort by price (Low to High / High to Low)
Search Functionality
Add a search bar that filters freelancers by name or title in real-time

Part 2: Booking Modal (30 minutes)
Create a booking modal that opens when 'Book Now' is clicked:
Modal Design
The modal should contain:
Freelancer's name and title
Project title field (text input)
Project description field (textarea)
Budget field (number input in NGN)
Deadline field (date picker)
'Submit Booking' and 'Cancel' buttons
Form Validation
Implement client-side validation:
All fields are required
Budget must be at least ₦5,000
Deadline must be in the future
Project title must be at least 10 characters
Show error messages for invalid inputs
Booking Submission
When the form is submitted:
Show a loading state on the submit button
Simulate an API call (2 second delay)
On success: Show success message and close modal
Log booking details to console

Sample Data to Use
Use this data structure for your freelancers (you can add more if you wish):
const freelancers = [  {    id: 1,    name: "Adewale Johnson",    title: "Graphic Designer",    rating: 4.8,    reviews: 127,    hourlyRate: 15000,    skills: ["Logo Design", "Branding", "Photoshop", "Illustrator"],    availability: "available",    profileImage: "https://i.pravatar.cc/150?img=1"  },  {    id: 2,    name: "Chioma Okonkwo",    title: "Full-Stack Developer",    rating: 4.9,    reviews: 203,    hourlyRate: 25000,    skills: ["React", "Node.js", "MongoDB", "TypeScript"],    availability: "busy",    profileImage: "https://i.pravatar.cc/150?img=5"  },  {    id: 3,    name: "Olumide Adeyemi",    title: "Content Writer",    rating: 4.6,    reviews: 89,    hourlyRate: 8000,    skills: ["Copywriting", "SEO", "Blog Writing", "Technical Writing"],    availability: "available",    profileImage: "https://i.pravatar.cc/150?img=8"  },  {    id: 4,    name: "Fatima Abubakar",    title: "Video Editor",    rating: 4.7,    reviews: 156,    hourlyRate: 18000,    skills: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],    availability: "available",    profileImage: "https://i.pravatar.cc/150?img=9"  },  {    id: 5,    name: "Emmanuel Okafor",    title: "Mobile App Developer",    rating: 4.9,    reviews: 178,    hourlyRate: 30000,    skills: ["React Native", "Flutter", "iOS", "Android"],    availability: "busy",    profileImage: "https://i.pravatar.cc/150?img=12"  }];




# Technical Requirements

## Stack & Tools

Required: React (Create React App or Vite)\
State Management: useState/useReducer (Context API is optional)\
Styling: CSS/Tailwind/Styled Components (your choice)\
Optional: TypeScript, React Query, Zustand

## Setup Instructions

Clone this repository\
Create a branch with your name ( hyphen(-) separated , all lowercase )\
Build your solution
<!-- Include a README.md with:
How to run the project -->
List of features implemented\
Any assumptions or decisions you made\
What you would improve given more time\
Push to GitHub and share the repository link
