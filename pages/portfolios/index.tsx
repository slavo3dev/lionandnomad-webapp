import type { NextPage } from "next";
import axios from "axios";
import Link from "next/link";

interface Props {
    posts: {};
}

const portfolios: NextPage<Props> = ({ posts }) => {
    const renderPosts = () => {
        const postObjects = Object(posts);

        return postObjects.map((post: any) => (
            <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
            </li>
        ));
    };
    return (
        <div>
            <h1>Hello Portfolios</h1>
            <ul>{renderPosts()}</ul>
        </div>
    );
};

portfolios.getInitialProps = async () => {
    let posts = [];
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        posts = res.data;
    } catch (e) {
        console.error(e);
    }

    return { posts: posts.slice(0, 10) };
};

export default portfolios;
