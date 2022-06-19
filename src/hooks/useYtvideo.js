import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query YtVideo {
    allYtVideo(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        thumbnails {
          default {
            url
            width
            height
          }
          high {
            url
          }
        }
        videoUrl
      }
    }
  }
`
export function useYtvideo() {
  const { allYtVideo } = useStaticQuery(query)
  const data = allYtVideo.nodes.map(({ title, thumbnails, videoUrl }) => ({
    title,
    thumbnail: thumbnails.high.url,
    url: videoUrl,
    type: "video",
  }))
  return data
}

export default useYtvideo
