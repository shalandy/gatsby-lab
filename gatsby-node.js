/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const moment = require('moment');
 const path = require('path');

 exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            author
            date
            coverPhoto {
              file {
                url
                fileName
                contentType
              }
            }
            article {
              article
            }
          }
        }
      }
    }
    `).then(({
  data: {
    allContentfulBlogPost: { edges: blogPosts }
  }
}) => {
      blogPosts.forEach(({ node: post }, index) => {
    createPage({
      path: `/article/${moment(post.date).format('YYYY-MM-DD-hh-mm')}`,
      component: path.resolve('src/templates/article.js'),
      context: { id: post.id }
    });
    });
    });
};
