import Footer from 'components/app/footer';
import Icon from 'components/partials/fa-icon';

const CommentsFooter = props =>
  <Footer>
    <Icon iconName="paper-plane-o" />
    <input className="commentinput" />
    <button className="postbutton">Post</button>
  </Footer>;

export default CommentsFooter;
