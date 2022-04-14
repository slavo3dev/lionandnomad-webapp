import type { NextPage } from "next";
import Link from "next/link";
import { BaseLayout, BasePage } from "../../components";
import { useGetData } from "../../lib/actions"




interface Props {
    posts: {};
}

const portfolios: NextPage<Props> = () => {
    const { data, error, loading }: any =  useGetData('/api/v1/posts');


    const renderPosts = (posts: any) => {
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
                { loading &&
                    <p>Loading data...</p>
                }
                { data &&
                    <ul>
                        {renderPosts(data)}
                    </ul>
                }
                { error &&
                    <div className="alert alert-danger">{error.message}</div>
                }
             </BasePage>
        </BaseLayout >
    );
};

export default portfolios;
