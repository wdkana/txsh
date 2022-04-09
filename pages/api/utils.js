// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    navigation1: "HOME",
    navigation2: "SHOWCASE",
    homeUrl: "/",
    showCaseUrl: "/showcase",
    showCaseButtonText: "Lihat ShowCase Gue",
  })
}
