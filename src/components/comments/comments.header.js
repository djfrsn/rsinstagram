import { Link } from 'react-router';
import Header from 'components/app/header';
import Icon from 'components/partials/faIcon';
import 'components/comments/comments.header.scss';

const CommentsHeader = props =>
  <Header className="commentsheader">
    <div className="commentsheader-backicon-wrapper">
      <Link to="/">
        <Icon name="angle-left" size="3x" className="commentsheader-backicon" />
      </Link>
    </div>
    <div className="commentsheader-title-wrapper">
      <h1 className="commentsheader-title">Comments</h1>
    </div>
  </Header>;

export default CommentsHeader;
