import BasicTemplates from '../../templates/BasicTemplates';
import ArticleList from '../../components/ArticleList';

const ListPage = (props) => {
  return (
    <BasicTemplates>
      <div style={{ width: '700px', margin: 'auto' }}>
        <ArticleList />
      </div>
    </BasicTemplates>
  );
};

export default ListPage;
