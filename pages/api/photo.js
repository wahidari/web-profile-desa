// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const photos = [
    {
        src: "https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 1",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 2",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 3",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 4",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 5",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 6",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1639938793998-a1cf1a253cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 7",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1639936014191-130ed8733401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 8",
        width: 4,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1639930451315-be32be3b91a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&height=382&q=80",
        title: "Image 9",
        width: 4,
        height: 3
    },
];

export default function allHandler(req, res) {
    res.status(200).json(photos);
};

