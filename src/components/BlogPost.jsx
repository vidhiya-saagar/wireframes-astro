import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../components/styles/Blog.css';

// TODO: We have a duplicate `contentfulOptions`
const contentfulOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description } = node.data.target.fields;
      const { url } = node.data.target.fields.file;

      return (
        <figure>
          <img src={url} alt={title} loading="lazy" />
          {description && <figcaption>{description}</figcaption>}
        </figure>
      );
    },
  },
};

export default function BlogPost({ content }) {
  return <>{documentToReactComponents(content, contentfulOptions)}</>;
}
