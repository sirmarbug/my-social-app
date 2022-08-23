import DashboardLayout from "../../layouts/DashboardLayout";
import PostCard from "../../components/PostCard";

const Home = () => {
    return (
        <DashboardLayout>
            <h1>Wszystkie posty</h1>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </DashboardLayout>
    )
}

export default Home
