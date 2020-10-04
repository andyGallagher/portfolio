/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Quote } from "../styles/components/quote";
import { breakpoints } from "../styles/breakpoints";
import { Social } from "./social";

const query = graphql`
    query ProfilePictureQuery {
        file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
                fluid {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                }
            }
        }
    }
`;

export const Profile = () => {
    const data = useStaticQuery(query);

    return (
        <section
            css={breakpoints({
                display: [undefined, "flex"],
                flexDirection: [undefined, "column"],
            })}
        >
            <Img
                fluid={data.file.childImageSharp.fluid}
                css={breakpoints({
                    width: [undefined, "300px"],
                })}
            />
            <Quote extraSpacing notCentered>
                “Water deeply, infrequently.” — Ancient Gardening Proverb
            </Quote>

            <Social />
        </section>
    );
};
