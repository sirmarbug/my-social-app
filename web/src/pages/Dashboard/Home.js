import DashboardLayout from "../../layouts/DashboardLayout";
import PostCard from "../../components/PostCard";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts, resetItems, selectPosts, selectPostsLoading} from "../../store/postsSlice";
import {Box, CircularProgress} from "@mui/material";

const Home = () => {
    const posts = useSelector(selectPosts)
    const loading = useSelector(selectPostsLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllPosts())

        return () => {
            dispatch(resetItems())
        }
    }, [])

    return (
        <DashboardLayout>
            <h1>Wszystkie posty</h1>
            {
                loading ?
                    (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress/>
                        </Box>
                    ) :
                    (
                        posts && posts.items && posts.items.map(post => (
                            <PostCard
                                post={post}
                                key={post._id}
                            />
                        ))
                    )
            }
        </DashboardLayout>
    )
}

export default Home
