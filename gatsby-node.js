const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { error, data } = await graphql(`
    {
      allContentfulNewsletter {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  if (error) {
    throw new Error('There was a error.');
  }
  const editions = data.allContentfulNewsletter.edges;
  editions.forEach((edition, i) => {
    const prev = editions[i - 1];
    const next = editions[i + 1];

    actions.createPage({
      path: edition.node.slug,
      component: path.resolve('./src/template/newsletter.js'),
      context: {
        slug: edition.node.slug,
        prev,
        next,
      },
    });
  });
};
