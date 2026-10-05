import type { QueueItem } from "@/store/slices/queueSlice";

export const mockSearchResults: QueueItem[] = [
  {
    id: "s1",
    videoId: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: 213,
  },
  {
    id: "s2",
    videoId: "L_jWHffIx5E",
    title: "Smash Mouth - All Star",
    thumbnail: "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg",
    duration: 200,
  },
  {
    id: "s3",
    videoId: "fJ9rUzIMcZQ",
    title: "Queen - Bohemian Rhapsody",
    thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    duration: 355,
  },
];
