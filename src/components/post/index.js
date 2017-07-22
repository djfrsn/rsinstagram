import Header from 'components/app/header';
import ActionBar from 'components/app/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/app/nav';
import Footer from 'components/app/footer';

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
