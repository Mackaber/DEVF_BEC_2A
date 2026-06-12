const albums = [
  {
    id: 1,
    name: "Dynamite",
    artist: "Jamiroquai",
    year: 1993,
    image: "https://upload.wikimedia.org/wikipedia/en/7/72/Jamiroquaidynamite.png",
    tracks: [
      { name: "When You Gonna Learn?", duration: "3:28" },
      { name: "Hooked Up", duration: "4:22" },
      { name: "Too Young to Die", duration: "3:19" },
      { name: "Music of the Mind", duration: "4:41" },
      { name: "Transatlantic Soul", duration: "4:12" },
      { name: "Dynamite", duration: "3:52" },
      { name: "Everyday", duration: "4:45" },
      { name: "Time's Marching On", duration: "3:35" },
      { name: "Blow It Up", duration: "3:58" },
      { name: "Star Chasers", duration: "4:08" }
    ]
  },
  {
    id: 2,
    name: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png",
    tracks: [
      { name: "Give Life Back to Music", duration: "4:01" },
      { name: "The Game of Love", duration: "4:14" },
      { name: "Instant Crush", duration: "4:38" },
      { name: "Get Lucky", duration: "4:10" },
      { name: "Beyond", duration: "4:44" },
      { name: "Motherboard", duration: "5:48" },
      { name: "Fragments of Time", duration: "4:20" },
      { name: "Doing It Right", duration: "4:33" },
      { name: "Contact", duration: "6:21" }
    ]
  },
  {
    id: 3,
    name: "Abbey Road",
    artist: "The Beatles",
    image: "https://substackcdn.com/image/fetch/$s_!Fgn0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7db81218-6485-4983-88e0-30448e8fc946_600x600.jpeg",
    year: 1969,
    tracks: [
      { name: "Come Together", duration: "4:20" },
      { name: "Something", duration: "3:02" },
      { name: "Maxwell's Silver Hammer", duration: "3:27" },
      { name: "Oh! Darling", duration: "3:26" },
      { name: "Octopus's Garden", duration: "2:51" },
      { name: "I Want You (She's So Heavy)", duration: "7:47" },
      { name: "Here Comes the Sun", duration: "3:05" },
      { name: "Because", duration: "2:45" }
    ]
  },
  {
    id: 4,
    name: "Slow Rush",
    artist: "Tame Impala",
    image: "https://substackcdn.com/image/fetch/$s_!1uFK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69f8983a-aaf2-4eed-8d54-3dd197537883_600x600.jpeg",
    year: 2020,
    tracks: [
      { name: "It Might Be Time", duration: "2:52" },
      { name: "Borderline", duration: "3:51" },
      { name: "Posthumous Forgiveness", duration: "4:38" },
      { name: "On Track", duration: "3:29" },
      { name: "One More Hour", duration: "3:40" },
      { name: "Dynasty", duration: "3:41" },
      { name: "The Less I Know The Better", duration: "3:33" },
      { name: "Breathe Deeper", duration: "3:33" },
      { name: "Lost in Yesterday", duration: "4:39" },
      { name: "Is It True", duration: "6:18" }
    ]
  },
  {id: 5,
    
    name: "Sgt. Pepper's Lonely Hearts Club Band",
    image: "https://substackcdn.com/image/fetch/$s_!J_TY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc49d70e0-bafe-465c-b719-c59ecda7e446_600x600.jpeg",
    artist: "The Beatles",
    year: 1967,
    tracks: [
      { name: "Sgt. Pepper's Lonely Hearts Club Band", duration: "2:02" },
      { name: "With a Little Help from My Friends", duration: "2:44" },
      { name: "Lucy in the Sky with Diamonds", duration: "3:28" },
      { name: "Getting Better", duration: "2:49" },
      { name: "Fixing a Hole", duration: "2:33" },
      { name: "She's Leaving Home", duration: "3:35" },
      { name: "Being for the Benefit of Mr. Kite!", duration: "2:44" },
      { name: "Within You Without You", duration: "5:05" },
      { name: "When I'm Sixty-Four", duration: "2:37" },
      { name: "Lovely Rita", duration: "2:42" },
      { name: "Good Morning Good Morning", duration: "2:17" },
      { name: "Sgt. Pepper's Lonely Hearts Club Band (Reprise)", duration: "1:19" },
      { name: "A Day in the Life", duration: "5:33" }
    ]
  }
];

export default albums