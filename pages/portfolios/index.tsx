import type { NextPage } from "next";
import axios from "axios";
import Link from "next/link";
import { BaseLayout, BasePage } from "../../components";
import { useEffect } from 'react';



interface Props {
    posts: {};
}

const portfolios: NextPage<Props> = ({ posts }) => {

    useEffect(() => {
        async function getPosts() {
          const res = await fetch('/api/v1/posts');
          const data = await res.json();
        }
    
        getPosts();
      }, [])


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
        <BaseLayout className="">
             <BasePage className="">
                 <h1>I am portfolios page</h1>
                 <ul>
                    {renderPosts()}
                 </ul>
             </BasePage>
        </BaseLayout >
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
