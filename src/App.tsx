import React from 'react';
import './App.css';
import { useState, useMemo } from 'react';

import { freelancers } from './data/freelancers';
import IFreelancer from './types/Freelancer';
import FreelancerCard from './components/FreelancerCard';

function App() {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [selectedFreelancer, setSelectedFreelancer] = useState<IFreelancer>({} as IFreelancer);
  const [price, setPrice] = useState("none");

  const filtered = useMemo(() => {
    let list = [...freelancers];

    if(search) {
      list = list.filter(f => 
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (price === "low-high") {
      list.sort((a, b) => a.hourlyRate - b.hourlyRate);
    } else if(price === "high-low") {
      list.sort((a, b) => b.hourlyRate - a.hourlyRate);
    }

    if(availability !== "all") {
      list = list.filter(f => f.availability === availability)
    }

    if(skill !== "all") {
      list = list.filter(f => f.skills.includes(skill))
    }

    return list;
  }, [search, skill, availability, price]);

  return (
    <div className="main">

      <input
        className="border p-2"
        placeholder="Enter title or name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select
        className="border p-2"
        onChange={e => setSkill(e.target.value)}
      >
        {
          ["React", "Node.js", "MongoDB", "TypeScript"].map((skill) => (
            <option key={skill} value={skill}>{skill}</option>
          ))
        }
      </select>

      <select
        className="border p-2"
        onChange={e => setAvailability(e.target.value)}
      >
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="busy">Busy</option>
      </select>

      <select
        className="border p-2"
        onChange={e => setPrice(e.target.value)}
      >
        <option value="none">No Sort</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>

      <div className="grid md:grid-cols-3 gap-4">
        {
          filtered.map(f => (
            <FreelancerCard key={f.id} freelancer={f}/>
          ))
        }
      </div>

      
    </div>
  );
}

export default App;
