import Footer from 'components/app/footer';
import Icon from 'components/partials/faIcon';
import 'components/comments/comments.footer.scss';

// TODO: add active class to postbutton when input has text

const CommentsFooter = props =>
  <Footer className="commentsfooter">
    <div className="commentsfooter-icon-wrapper">
      <Icon name="paper-plane-o" size="2x" className="commentsfooter-icon" />
    </div>
    <div className="commentsfooter-input-wrapper">
      <input className="commentinput" placeholder="Add a comment..." />
    </div>
    <div className="commentsfooter-postbutton-wrapper">
      <button className="postbutton">Post</button>
    </div>
  </Footer>;

export default CommentsFooter;
