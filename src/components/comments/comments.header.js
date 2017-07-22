import Header from 'components/app/header';
import Icon from 'components/partials/fa-icon';

const CommentsHeader = props =>
  <Header>
    <Icon iconName="leftarrow" />
    <h1 className="commentstitle">Comments</h1>
  </Header>;

export default CommentsHeader;
