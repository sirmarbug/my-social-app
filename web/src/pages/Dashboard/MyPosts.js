import DashboardLayout from "../../layouts/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";
import {fetchMyPosts, resetItems, selectPosts, selectPostsLoading} from "../../store/postsSlice";
import {useEffect} from "react";
import {Box, CircularProgress} from "@mui/material";
import PostCard from "../../components/PostCard";

const MyDetails = () => {
    const posts = useSelector(selectPosts)
    const loading = useSelector(selectPostsLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMyPosts())

        return () => {
            dispatch(resetItems())
        }
    }, [])

    return (
        <DashboardLayout>
            <h1>Moje posty</h1>
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

export default MyDetails
