import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically start your day?",
    options: [
      { id: "1a", text: "Reflect on my dreams and wonder how to make them reality", personalityType: "type1" },
      { id: "1b", text: "Get up with the alarm and make a checklist for the day ahead", personalityType: "type2" },
      { id: "1c", text: "Weigh my options and pick the one thing that will lead to success", personalityType: "type3" },
      { id: "1d", text: "Make a delicious breakfast even though the fridge is basically empty", personalityType: "type4" },
      { id: "1e", text: "Journal about the past week and reflect on my experiences", personalityType: "type5" },
      { id: "1f", text: "Post on social media imparting advice to my followers while being mindful of my own energy", personalityType: "type6" },
      { id: "1g", text: "Take actions to make the world a better place one Saturday morning at a time", personalityType: "type7" },
      { id: "1h", text: "Left foot, right foot. Just going one step at a time and seeing where it leads me", personalityType: "type8" }
    ]
  },
  {
    id: 2,
    text: "What might you say when starting a project?",
    options: [
      { id: "2a", text: "\"If we make it fly and attach wifi on top then the user could...\"", personalityType: "type1" },
      { id: "2b", text: "\"Let's talk to an expert, make a list of tasks, and determine next steps\"", personalityType: "type2" },
      { id: "2c", text: "\"Understanding why the problem is occurring will be key to finding a valuable solution!\"", personalityType: "type3" },
      { id: "2d", text: "\"Hand me some cardboard, tape and scissors!\"", personalityType: "type4" },
      { id: "2e", text: "\"Who is this for? What does it mean to them? How can we tell their story?\"", personalityType: "type5" },
      { id: "2f", text: "\"Our approach will highlight many problems we are not yet aware of. I have done this before and I'm confident it will succeed\"", personalityType: "type6" },
      { id: "2g", text: "\"If we work together we can make this world a better place for everyone!\"", personalityType: "type7" },
      { id: "2h", text: "\"There is no need to rush any decision at the moment. Let's follow the process and see where it leads us\"", personalityType: "type8" }
    ]
  },
  {
    id: 3,
    text: "What does your workspace say about you?",
    options: [
      { id: "3a", text: "I wonder and marvel about this constellation of post-its, books and food wrappers", personalityType: "type1" },
      { id: "3b", text: "My what? I move all day long", personalityType: "type2" },
      { id: "3c", text: "All these notes and questions! What are they trying to tell me?", personalityType: "type3" },
      { id: "3d", text: "This pile of stuff is a prototype!", personalityType: "type4" },
      { id: "3e", text: "These books are my home, I need them!", personalityType: "type5" },
      { id: "3f", text: "Organized desk, organized mind", personalityType: "type6" },
      { id: "3g", text: "My desk is a metaphor for unequal distribution of knowledge and the disparity of wealth", personalityType: "type7" },
      { id: "3h", text: "It might be messy right now. But who is to say that it won't spark my imagination down the road?", personalityType: "type8" }
    ]
  },
  {
    id: 4,
    text: "How do you respond to a setback?",
    options: [
      { id: "4a", text: "\"If you take a step back and view it from afar, does it still matter that much?\"", personalityType: "type1" },
      { id: "4b", text: "\"You should talk to Dr. Expert! Then, let's draft a plan of action!\"", personalityType: "type2" },
      { id: "4c", text: "\"How did this happen? Why do you think this occurred?\"", personalityType: "type3" },
      { id: "4d", text: "\"Let's head over into the kitchen, make some food and talk it over.\"", personalityType: "type4" },
      { id: "4e", text: "\"Life feels like this sometimes. Use this event to strengthen your understanding of yourself.\"", personalityType: "type5" },
      { id: "4f", text: "\"Here, please take this piece of research. Reading about it from a different perspective might help you.\"", personalityType: "type6" },
      { id: "4g", text: "\"It will be hard but worthwhile trying to turn this moment into something that can help others.\"", personalityType: "type7" },
      { id: "4h", text: "\"Every path leads somewhere. You just need to be confident that you have all the tools needed to move forward.\"", personalityType: "type8" }
    ]
  },
  {
    id: 5,
    text: "What would you do if you won the lottery?",
    options: [
      { id: "5a", text: "Change nothing. Life is marvelous in all of its forms.", personalityType: "type1" },
      { id: "5b", text: "Pick the best options for investment to enable my projects and dreams.", personalityType: "type2" },
      { id: "5c", text: "List the five most promising plans with strong leads on how to use the money well.", personalityType: "type3" },
      { id: "5d", text: "Build my dream workshop and never leave it!", personalityType: "type4" },
      { id: "5e", text: "Make sure everyone I love gets a share to fulfill their dreams!", personalityType: "type5" },
      { id: "5f", text: "Diversify it and fall back on it when the need arises.", personalityType: "type6" },
      { id: "5g", text: "Build a non-profit organization to help solve the wicked problems the world faces.", personalityType: "type7" },
      { id: "5h", text: "I don't play the lottery, but I appreciate everything that comes my way.", personalityType: "type8" }
    ]
  },
  {
    id: 6,
    text: "How do you handle a problem at work?",
    options: [
      { id: "6a", text: "Wonder how big of a deal it will be five years from now.", personalityType: "type1" },
      { id: "6b", text: "Rate a list of potential actions against each other until I find the best way forward.", personalityType: "type2" },
      { id: "6c", text: "Try to understand why this happened in the first place so it won't repeat!", personalityType: "type3" },
      { id: "6d", text: "Get to work to solve it!", personalityType: "type4" },
      { id: "6e", text: "Understand the problem at hand and how the narrative around it is influencing it!", personalityType: "type5" },
      { id: "6f", text: "Take a deep dive into the knowledge surrounding it and distill the best path forward.", personalityType: "type6" },
      { id: "6g", text: "See it as an opportunity to impact the world.", personalityType: "type7" },
      { id: "6h", text: "Remember the many times I was facing a challenge before and reflect on what actions or non-actions yielded the best outcome.", personalityType: "type8" }
    ]
  },
  {
    id: 7,
    text: "How do you plan a trip?",
    options: [
      { id: "7a", text: "Create a Pinterest board for my next adventure.", personalityType: "type1" },
      { id: "7b", text: "Consider the locations I have visited so far and watch documentaries about places on my bucket list.", personalityType: "type2" },
      { id: "7c", text: "Check the time of the year, weather, tourism and activities I am comfortable with.", personalityType: "type3" },
      { id: "7d", text: "Make a collage of my dream destination and see what place comes closest.", personalityType: "type4" },
      { id: "7e", text: "Read blogs and travel guides and think of the experiences I want to have.", personalityType: "type5" },
      { id: "7f", text: "Refer you to my blog. Btw you should check it out and see the exciting places I will visit.", personalityType: "type6" },
      { id: "7g", text: "Here is a list of things you can do to make sure you leave the places you visited better than before.", personalityType: "type7" },
      { id: "7h", text: "I would not stress too much about it. There is beauty in all the places, one just needs to open their eyes to see it.", personalityType: "type8" }
    ]
  },
  {
    id: 8,
    text: "How do you prep for a movie night with friends?",
    options: [
      { id: "8a", text: "Pick Sci-fi with a hint of drama.", personalityType: "type1" },
      { id: "8b", text: "Create a movie questionnaire before and make sure everyone brings some snacks.", personalityType: "type2" },
      { id: "8c", text: "Make playlists on Netflix and bring games. Who knows we might end up playing Risk!", personalityType: "type3" },
      { id: "8d", text: "Bring my own camera. Let's make a movie.", personalityType: "type4" },
      { id: "8e", text: "Be very attentive and in the moment. I know we will reminisce about these get-togethers in the future.", personalityType: "type5" },
      { id: "8f", text: "Provide a list of critically acclaimed movies and have the trivia prepared so we can decide what to watch.", personalityType: "type6" },
      { id: "8g", text: "That new David Attenborough documentary is so thought provoking!", personalityType: "type7" },
      { id: "8h", text: "Actually, enjoy the movie and the company. These moments are to be treasured.", personalityType: "type8" }
    ]
  },
  {
    id: 9,
    text: "What's your favorite way to learn?",
    options: [
      { id: "9a", text: "Reading scientific papers and analyzing the methodology.", personalityType: "type1" },
      { id: "9b", text: "Hands-on experimentation and trial and error.", personalityType: "type2" },
      { id: "9c", text: "Group discussions and collaborative projects.", personalityType: "type3" },
      { id: "9d", text: "Through creative expression and visualization.", personalityType: "type4" },
      { id: "9e", text: "Following structured courses with clear objectives.", personalityType: "type5" },
      { id: "9f", text: "Teaching others and sharing knowledge.", personalityType: "type6" },
      { id: "9g", text: "Deep research and connecting different concepts.", personalityType: "type7" },
      { id: "9h", text: "Learning from experience and real-world applications.", personalityType: "type8" }
    ]
  },
  {
    id: 10,
    text: "How do you experience a new city?",
    options: [
      { id: "10a", text: "Like seeing the place from high points and different perspectives.", personalityType: "type1" },
      { id: "10b", text: "Quickly check-in, grab my camera and head out to explore the sights.", personalityType: "type2" },
      { id: "10c", text: "Work through my bucket list of things to do while here.", personalityType: "type3" },
      { id: "10d", text: "I look for a shop or exhibit that inspires me to make something totally new.", personalityType: "type4" },
      { id: "10e", text: "Meet locals to get the insider scoop. Always with a camera and notebook!", personalityType: "type5" },
      { id: "10f", text: "Seek out museums and places that tell me about the history of the place. Find ways to connect deeply.", personalityType: "type6" },
      { id: "10g", text: "Am aware that this is not here just for my pleasure but a place full of rich history for many people.", personalityType: "type7" },
      { id: "10h", text: "Would walk out the door of the place that I am staying at and let the streets be my guide.", personalityType: "type8" }
    ]
  },
  {
    id: 11,
    text: "It's your birthday. What do you do?",
    options: [
      { id: "11a", text: "Host a themed dinner party where everyone dresses as their future self.", personalityType: "type1" },
      { id: "11b", text: "Plan an hour-by-hour itinerary complete with reflection time and backup plans.", personalityType: "type2" },
      { id: "11c", text: "Quietly assess the past year and set strategic goals for the next.", personalityType: "type3" },
      { id: "11d", text: "Build something with my hands—maybe a cake, maybe a treehouse.", personalityType: "type4" },
      { id: "11e", text: "Write handwritten letters to the people who shaped my year.", personalityType: "type5" },
      { id: "11f", text: "Post a photo essay titled Another Trip Around the Sun: Lessons Learned.", personalityType: "type6" },
      { id: "11g", text: "Organize a community cleanup and call it a \"Birthday Betterment Bash.\"", personalityType: "type7" },
      { id: "11h", text: "Let the day come to me—no plans, just presence.", personalityType: "type8" }
    ]
  }
];