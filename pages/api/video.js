// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const video = [
    {
        src: "https://www.youtube.com/embed/cTQ3Ko9ZKg8",
        title: "Title Video 1"
    },
    {
        src: "https://www.youtube.com/embed/GfO-3Oir-qM",
        title: "Title Video 2"
    },
    {
        src: "https://www.youtube.com/embed/r9PeYPHdpNo",
        title: "Title Video 3"
    },
    {
        src: "https://www.youtube.com/embed/XmtXC_n6X6Q",
        title: "Title Video 4"
    }
];

export default function allHandler(req, res) {
    res.status(200).json(video);
};

