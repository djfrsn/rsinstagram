import { connect } from 'react-redux';
import { postActions } from 'features/post';
import Header from 'components/app/header';
import ActionBar from 'components/partials/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/partials/nav';
import Footer from 'components/app/footer';
import 'components/post/index.scss';

// TODO: display post from data & create scrollable container for postBody
// For each post display PostBody

function posts(postsArray) {
  let postsElements = [];

  postsArray.forEach(post => {
    postsElements.push(<PostBody key={post.id} post={post} />);
  });

  return postsElements;
}

const Post = ({ fetchPost, post }) => {
  return (
    <div className="post">
      <Header>
        <ActionBar />
      </Header>
      {posts(post.posts)}
      <Footer>
        <Nav />
      </Footer>
    </div>
  );
};

export default connect(
  state => ({
    post: state.post
  }),
  Object.assign({}, postActions)
)(Post);
