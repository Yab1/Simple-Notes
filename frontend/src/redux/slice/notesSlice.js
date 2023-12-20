import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Financial Tips",
      detail:
        "Learn essential financial tips for managing your budget and achieving your savings goals. Discover strategies to make the most of your hard-earned money.",
      time: "09:35PM",
      date: "07 January 2023",
      tag: "Assignment",
    },
    {
      id: 2,
      title: "Cooking Recipes",
      detail:
        "Explore delicious recipes from around the world. Learn new cooking techniques and surprise your friends and family with delightful dishes.",
      time: "12:00PM",
      date: "15 February 2023",
      tag: "Meetings",
    },
    {
      id: 3,
      title: "Fitness Routine",
      detail:
        "Get in shape with a tailored fitness routine. Stay motivated, exercise regularly, and achieve your fitness goals.",
      time: "06:30AM",
      date: "22 March 2023",
      tag: "Project",
    },
    {
      id: 4,
      title: "Travel Bucket List",
      detail:
        "Create your ultimate travel bucket list. Explore breathtaking destinations and plan your next adventure.",
      time: "03:45PM",
      date: "10 April 2023",
      tag: "Ideas",
    },
    {
      id: 5,
      title: "Book Recommendations",
      detail:
        "Discover great books across various genres. Find your next favorite read and expand your literary horizons.",
      time: "08:00PM",
      date: "30 May 2023",
      tag: "Study",
    },
    {
      id: 6,
      title: "Productivity Hacks",
      detail:
        "Boost your productivity with effective hacks and time management strategies. Accomplish more in less time!",
      time: "11:15AM",
      date: "18 June 2023",
      tag: "Wishlist",
    },
    {
      id: 7,
      title: "Coding Resources",
      detail:
        "Explore coding tutorials, resources, and frameworks. Enhance your programming skills and stay updated with tech trends.",
      time: "02:30PM",
      date: "05 July 2023",
      tag: "Personal",
    },
    {
      id: 8,
      title: "Gardening Tips",
      detail:
        "Learn gardening techniques and tips for maintaining a beautiful garden. Grow your favorite plants and create a green oasis.",
      time: "10:00AM",
      date: "19 August 2023",
      tag: "Work",
    },
    {
      id: 9,
      title: "Mindfulness Practices",
      detail:
        "Incorporate mindfulness into your daily routine. Practice meditation and mindfulness exercises for a calmer mind.",
      time: "07:45AM",
      date: "14 September 2023",
      tag: "Shopping",
    },
    {
      id: 10,
      title: "DIY Projects",
      detail:
        "Explore DIY projects for home decor, crafts, and more. Get creative and personalize your living space.",
      time: "04:20PM",
      date: "28 October 2023",
      tag: "Meetings",
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});

export default notesSlice.reducer;
