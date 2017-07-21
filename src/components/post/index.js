import Header from 'components/rsinstagram/header';
import ActionBar from 'components/rsinstagram/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/rsinstagram/nav';
import Footer from 'components/rsinstagram/footer';

const Post = props =>
  <div>
    <Header>
      <ActionBar />
    </Header>
    <PostBody />
    <Footer>
      <Nav />
    </Footer>
  </div>;

export default Post;
