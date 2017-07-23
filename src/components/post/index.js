import { connect } from 'react-redux';
import { postActions } from 'containers/posts';
import Header from 'components/app/header';
import ActionBar from 'components/partials/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/partials/nav';
import Footer from 'components/app/footer';
import 'components/post/index.scss';

// TODO: create scrollable container for postBody
// For each post display PostBody

const Post = props => {
  const { fetchPost, post } = props;
  console.log('post', post);
  return (
    <div className="post">
      <Header>
        <ActionBar />
      </Header>
      <PostBody fetchPost={fetchPost} />
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
