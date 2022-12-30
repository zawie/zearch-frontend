import { Input, Space , Typography} from 'antd';

const { Title } = Typography;
const { Search } = Input;

type SearchPageProps = {
  onSearch: (query: string) => void
}


const SearchPage = ({onSearch}: SearchPageProps) => {
    return <div className="SearchBody">
      <div style={{width: "100%", maxWidth:750, padding:10}}>
      <Title> Zearch </Title>
        <Search
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <Space/>
    </div>;
  };
  
  export default SearchPage;