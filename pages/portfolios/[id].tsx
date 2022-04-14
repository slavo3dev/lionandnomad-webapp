import { BaseLayout, BasePage } from 'components';
import { useGetData } from '../../lib/actions';
import { useRouter } from 'next/router';

const portfolio = () => {
  const router = useRouter();

  console.log("Router: ", router.query.id)
  const {data: portfolio, error, loading}: any = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);

  return (
    <BaseLayout className=''>
      <BasePage className=''>
      { loading && <p>Loading Data...</p>}
      { error && <div className="alert alert-danger">{error.message}</div>}
      { portfolio &&
        <>
          <h1>I am Portfolio page</h1>
          <h1>{portfolio.title}</h1>
          <p>BODY: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </>
      }
      </BasePage>
    </BaseLayout>
  )
}

export default portfolio;