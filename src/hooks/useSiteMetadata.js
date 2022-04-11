import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        twitterUrl
        youtubeUrl
        githubUrl
        linkedinUrl
        twitchUrl
        htmlAttributes {
          lang
        }
      }
    }
  }
`;

export function useSiteMetadata() {
  const { site } = useStaticQuery(query);

  return site.siteMetadata;
}

export default useSiteMetadata;
