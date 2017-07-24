import { connect } from 'react-redux';
import { postActions } from 'features/post';
import Header from 'components/app/header';
import ActionBar from 'components/partials/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/partials/nav';
import Footer from 'components/app/footer';
import 'components/post/index.scss';

const posts = postsArray =>
  postsArray.map(post => {
    return <PostBody key={post.id} post={post} />;
  });

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
  { postActions }
)(Post);
