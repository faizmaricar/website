const axios = require("axios")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  let headersList = {
    Accept: "application/json",
  }

  const { YT_API_KEY, YT_CHANNEL_ID } = process.env

  let reqOptions = {
    url: `https://www.googleapis.com/youtube/v3/search?channelId=${YT_CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=8&key=${YT_API_KEY}`,
    method: "GET",
    headers: headersList,
  }

  const { data } = await axios.request(reqOptions)
  const { items } = data
  const { createNode } = actions

  const createItemMeta = item => {
    const { id } = item
    const itemMeta = {
      id: createNodeId(id),
      videoUrl: `https://www.youtube.com/watch?v=${id}`,
      parent: null,
      children: [],
      internal: {
        type: `ytVideo`,
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    }
    const node = Object.assign({}, item, itemMeta)
    createNode(node)
  }

  items.map(({ id: { videoId: id }, snippet }) =>
    createItemMeta({ id, ...snippet })
  )
}
