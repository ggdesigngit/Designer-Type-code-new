import { PersonalityType } from '../types';

export const personalityTypes: PersonalityType[] = [
  {
    id: "type1",
    name: "Design Traveler",
    description: "The Design Traveler is a careful planner that sees the problem ahead in terms of a map. There are countless paths laid out in front and many are valid. In order to find the ideal route the Design Traveler uses their skills to consult \"local experts\" and fellow travelers to conceive of the best route forward. The Design Traveler synthesizes knowledge from many different sources to journey to the most remote and most interesting places.",
    traits: [
      { name: "Testing", description: "You validate ideas through experimentation and feedback" },
      { name: "Challenging", description: "You question assumptions and push boundaries" },
      { name: "Synthesizing", description: "You combine diverse knowledge into cohesive solutions" },
      { name: "Collaborating", description: "You work effectively with others to achieve goals" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/01_DesignTraveler_Single_Front.png"
  },
  {
    id: "type2",
    name: "Design Detective",
    description: "The Design Detective is inquisitive and holds multiple ideas and clues about a problem in their mind. They are master mind mappers and never do just one thing. The Design Detective uses reason and logic to find the ideal solution to the problem.",
    traits: [
      { name: "Testing", description: "You validate ideas through experimentation and feedback" },
      { name: "Rationalizing", description: "You use logic and reason to make decisions" },
      { name: "Probing", description: "You investigate deeply to uncover hidden insights" },
      { name: "Collaborating", description: "You work effectively with others to achieve goals" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/02_DesignDetective_Single_Front.png"
  },
  {
    id: "type3",
    name: "Design Alchemist",
    description: "The Design Alchemist uses wonder and imagination to integrate their diverse background with the design discipline. They are visionaries and have the bigger picture in mind. Design Alchemists don't shy back from mixing their knowledge with newly acquired design know-how and in doing so creating novel \"potions\".",
    traits: [
      { name: "Wondering", description: "You approach problems with curiosity and openness" },
      { name: "Questioning", description: "You ask thoughtful questions to understand deeply" },
      { name: "Reimagining", description: "You envision new possibilities and alternatives" },
      { name: "Creating", description: "You generate original ideas and innovative solutions" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/03_DesignAlchemist_Single_Front.png"
  },
  {
    id: "type4",
    name: "Design Sage",
    description: "The Design Sage is an expert in grasping new knowledge quickly. The Sage can use this newly found knowledge and impart it to their fellow designers. What makes the Design Sage special is a universal interest in knowledge and learning. They can tap into that knowledge to find solutions creatively for any given problem.",
    traits: [
      { name: "Rationalizing", description: "You use logic and reason to make decisions" },
      { name: "Synthesizing", description: "You combine diverse knowledge into cohesive solutions" },
      { name: "Questioning", description: "You ask thoughtful questions to understand deeply" },
      { name: "Influencing", description: "You guide and inspire others through your expertise" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/04_DesignSage_Single_Front.png"
  },
  {
    id: "type5",
    name: "Design Poet",
    description: "The Design Poet is a storyteller by nature. They can distill complex information and knowledge from distinct sources into inspiring narratives. The Design Poet's ability to understand and feel a person or problem deeply allows for concepts and solutions that move the world.",
    traits: [
      { name: "Wondering", description: "You approach problems with curiosity and openness" },
      { name: "Empathizing", description: "You understand and connect with others' experiences" },
      { name: "Crafting", description: "You create thoughtful and refined solutions" },
      { name: "Influencing", description: "You guide and inspire others through your expertise" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/05_DesignPoet_Single_Front.png"
  },
  {
    id: "type6",
    name: "Design Maker",
    description: "The Design Maker uses their impulsive and creative personality to prototype ideas quickly and effective. For the Design Maker the world around is a playground that invites for remodeling. From details to big picture the Design Maker visualizes complex things through simple means.",
    traits: [
      { name: "Reimagining", description: "You envision new possibilities and alternatives" },
      { name: "Visualizing", description: "You transform abstract concepts into tangible forms" },
      { name: "Crafting", description: "You create thoughtful and refined solutions" },
      { name: "Creating", description: "You generate original ideas and innovative solutions" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/06_DesignMaker_Single_Front.png"
  },
  {
    id: "type7",
    name: "Design Guardian",
    description: "The Design Guardian uses their passion for design to better the world one project at a time. They can see the inequalities in society and the world and have learned how to harness the force of design to solve them. The Design Guardian has become an expert in finding solutions to wicked problems by putting the human in the center of the project.",
    traits: [
      { name: "Empathizing", description: "You understand and connect with others' experiences" },
      { name: "Humanizing", description: "You center human needs and values in your solutions" },
      { name: "Adapting", description: "You adjust your approach based on new information" },
      { name: "Persuading", description: "You convince others through compelling communication" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/07_DesignGuardian_Single_Front.png"
  },
  {
    id: "type8",
    name: "Design Rambler",
    description: "The Design Rambler is confident in their ability to get to the finish line on time, but they feel no need to get everything done right away. The Design Rambler knows that some things can't be hurried, and they find inspiration in their surroundings, trusting the path they are on.",
    traits: [
      { name: "Rationalizing", description: "You use logic and reason to make decisions" },
      { name: "Probing", description: "You investigate deeply to uncover hidden insights" },
      { name: "Persuading", description: "You convince others through compelling communication" },
      { name: "Methodical", description: "You follow systematic approaches to problem-solving" }
    ],
    imageUrl: "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/08_DesignRambler_Single_Front.png"
  }
];