import DashboardLayout from "../../layouts/DashboardLayout";
import PostCard from "../../components/PostCard";

const MyDetails = () => {
    return (
        <DashboardLayout>
            <h1>Moje posty</h1>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </DashboardLayout>
    )
}

export default MyDetails
