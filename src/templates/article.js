import React from 'react';

const moment = require('moment');

class ArticleTemplate extends React.Component {
  render() {
    const {
      title,
      author,
      date,
      article: { article },
    } = this.props.data.contentfulBlogPost;

    return (<div>
      <h1>{title}</h1>
      <sub>By {author}</sub>
      <p>{article}</p>
    </div>);
  }
}

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleQuery($id: String!) {
  contentfulBlogPost(id: { eq: $id }) {
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
`;
