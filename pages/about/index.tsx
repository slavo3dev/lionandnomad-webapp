import type { NextPage } from "next";
import { BaseLayout, BasePage } from "../../components";

const about: NextPage = () => {
    return (
        <BaseLayout className="">
          <BasePage className="">
            <h1>Hello About</h1>
            </BasePage>
        </BaseLayout>
    );
};

export default about;
