import Footer from 'components/app/footer';
import Icon from 'components/partials/faIcon';

const CommentsFooter = props =>
  <Footer>
    <Icon name="paper-plane-o" />
    <input className="commentinput" />
    <button className="postbutton">Post</button>
  </Footer>;

export default CommentsFooter;
