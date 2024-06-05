import { allPosts, fetchAllPosts } from "../Modals/PostsModal"

const getFirstPostBody = () =>
    {
        if(allPosts.value.length == 0)
            {
                return "No Posts Found"
            }
        return allPosts.value[0].body;
    }

const getAllPosts = () => {
    if(allPosts.value.length == 0)
        {
            return "No Posts Found"
        }
    return allPosts.value;
}

const refreshPosts = () => {
    fetchAllPosts();
}

export {getAllPosts,refreshPosts,getFirstPostBody}