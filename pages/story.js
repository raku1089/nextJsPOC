import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

import Layout from "../component/Layout";
import CommentList from "../component/CommentList";
class Story extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    try {
      const storyId = query.Id;

      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (err) {
      console.log(err);
      story = null;
    }
    return { story };
  }
  render() {
    const { story } = this.props;
    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title={story.title} backButton={true}>
        <main>
          <h1 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h1>
          <div className="story-details">
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago} </strong>
          </div>
          {story.comments.length > 0 ? (
            <CommentList comments={story.comments} />
          ) : (
            <div>No Comments for this story</div>
          )}
        </main>

        <style jsx>
          {`
            main {
              padding: 1em;
            }
            .story-title {
              font-size: 1.2rem;
              margin: 0;
              font-weight: 300;
              padding-bottome: 0.5em;
            }
            .story-title a {
              color: #333;
              text-decoration: none;
            }
            .story-title a:hover {
              text-decoration: underline;
            }

            .story-details {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .story-details strong {
              margin-right: 1em;
            }
            .story-details a {
              color: #f60;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Story;
