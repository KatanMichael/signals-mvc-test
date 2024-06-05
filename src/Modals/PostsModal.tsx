import { signal } from "@preact/signals-react";

interface PostsInterce
{
    userId: number,
    id: number,
    title: string,
    body: string
}

const allPosts = signal<PostsInterce[]>([]);

const fetchAllPosts = () => {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => allPosts.value = json)
            .catch(error => console.error('Error fetching posts:', error));
    }, 5000);
}

export {allPosts, fetchAllPosts}