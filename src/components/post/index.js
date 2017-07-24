import { connect } from 'react-redux';
import { postActions } from 'features/posts';
import Header from 'components/app/header';
import ActionBar from 'components/partials/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/partials/nav';
import Footer from 'components/app/footer';
import 'components/post/index.scss';

// TODO: display post from data & create scrollable container for postBody
// For each post display PostBody

const Post = ({ fetchPost, post }) => {
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
