import Header from 'components/app/header';
import Icon from 'components/partials/faIcon';

const CommentsHeader = props =>
  <Header>
    <Icon name="leftarrow" />
    <h1 className="commentstitle">Comments</h1>
  </Header>;

export default CommentsHeader;
