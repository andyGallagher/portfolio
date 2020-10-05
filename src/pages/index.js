/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SiteWrapper } from "../components/siteWrapper";
import { Header } from "../components/header";
import { Work } from "../components/work";
import { Profile } from "../components/profile";
import { FlexContainer } from "../styles/components/flexContainer";

export default () => (
    <SiteWrapper>
        <FlexContainer>
            <Header />
            <Work />
            <Profile />
        </FlexContainer>
    </SiteWrapper>
);
