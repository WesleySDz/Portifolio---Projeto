export interface Track {
  id: number;
  title: string;
  album?: string;
  year?: string | number;
  cover?: string;
  duration?: string;
  url: string;
}

export const TRACKS: Track[] = [
  {
    id: 1,
    title: "This Charming Man (2011 Remaster)",
    album: "Single",
    year: "1984",
    cover: "/covers/this-charming-man-2011-remaster.jpg",
    duration: "2:43",
    url: "/music/this-charming-man-2011-remaster.mp3",
  },
  {
    id: 2,
    title: "There Is a Light That Never Goes Out (2017 Master)",
    album: "The Queen Is Dead (Deluxe Edition)",
    year: "1986",
    cover: "/covers/there-is-a-light-that-never-goes-out-2017-master.jpg",
    duration: "4:02",
    url: "/music/there-is-a-light-that-never-goes-out-2017-master.mp3",
  },
  {
    id: 3,
    title: "Back to the Old House (2011 Remaster)",
    album: "Louder Than Bombs",
    year: "1987",
    cover: "/covers/back-to-the-old-house-2011-remaster.png",
    duration: "3:06",
    url: "/music/back-to-the-old-house-2011-remaster.mp3",
  },
];
