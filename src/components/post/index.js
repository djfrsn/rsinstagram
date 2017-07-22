import Header from 'components/app/header';
import ActionBar from 'components/partials/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/partials/nav';
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
