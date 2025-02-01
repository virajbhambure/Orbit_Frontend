const videoData = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/sample1/0.jpg",
    avatar: "https://yt3.ggpht.com/sample-avatar1.jpg",
    title: "Atomic Habits in 24 Minutes",
    channel: "Vaibhav Kadnar",
    description: "A summary of Atomic Habits book by James Clear.",
    views: "110K views",
    duration: "23:59",
    uploaded: "5 days ago"
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/sample2/0.jpg",
    avatar: "https://yt3.ggpht.com/sample-avatar2.jpg",
    title: "Frontend Developer Interview",
    channel: "ReactJS Developer",
    description: "Live frontend developer interview covering JavaScript, React, and HTML.",
    views: "9.1K views",
    duration: "53:08",
    uploaded: "1 day ago"
  }
];

const myVideos = [
  { id: 1, title: "React Tutorial for Beginners", thumbnail: "src/assets/video1.jpg", url: "https://www.youtube.com/watch?v=abc123" },
  { id: 2, title: "JavaScript Crash Course", thumbnail: "src/assets/video2.jpg", url: "https://www.youtube.com/watch?v=def456" }
];

const myTweets = [
  { id: 1, tweet: "Just finished reading Atomic Habits by James Clear. Highly recommend it!", date: "5 days ago" },
  { id: 2, tweet: "Learning React has been a game-changer!", date: "3 days ago" }
];

const likedVideos = [
  { id: 1, title: "Next.js Guide for Beginners", thumbnail: "src/assets/video3.jpg", url: "https://www.youtube.com/watch?v=ghi789" },
  { id: 2, title: "Node.js Best Practices", thumbnail: "src/assets/video4.jpg", url: "https://www.youtube.com/watch?v=jkl012" }
];


export { videoData, myVideos, myTweets, likedVideos };
