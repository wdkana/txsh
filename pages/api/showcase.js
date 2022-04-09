// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "dea afrizal",
    imageCollection: [
      "./assets/1.jpg",
      "./assets/2.jpg",
      "./assets/3.jpg",
      "./assets/4.jpg",
      "./assets/5.jpg",
    ],
    videoCollection: {
      source: "./assets/intro.mp4",
      type: "video/mp4",
      width: "1920",
      height: "1080",
      controls: true,
      autoplay: "autoplay",
    },
  })
}
