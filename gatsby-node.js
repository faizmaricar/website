const axios = require("axios")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  let headersList = {
    Accept: "application/json",
  }

  let reqOptions = {
    url: "https://www.googleapis.com/youtube/v3/search?channelId=UCOsENEH0kMZ3-L2dqeCyXAA&order=date&part=snippet&type=video&maxResults=8&key=AIzaSyCf3a84y9pym-ukDKoUBlp0x-8Vsmw1JmY",
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
