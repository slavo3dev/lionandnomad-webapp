import type { NextPage } from "next";
import { Container, Button } from "reactstrap";

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello Slavo</h1>
            <Container>
                <Button color="danger">Danger</Button>
            </Container>
        </div>
    );
};

export default Home;
