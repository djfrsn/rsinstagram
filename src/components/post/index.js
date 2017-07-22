import Header from 'components/app/header';
import ActionBar from 'components/partials/actionBar';
import PostBody from 'components/post/post.body';
import Nav from 'components/partials/nav';
import Footer from 'components/app/footer';
import 'components/post/index.scss';

const Post = props =>
  <div className="post">
    <Header>
      <ActionBar />
    </Header>
    <PostBody />
    <Footer>
      <Nav />
    </Footer>
  </div>;

export default Post;
