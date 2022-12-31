import { Input, Space , Typography} from 'antd';

import './SearchPage.css'

const { Title } = Typography;
const { Search } = Input;

type SearchPageProps = {
  onSearch: (query: string) => void
}


const SearchPage = ({onSearch}: SearchPageProps) => {
    return <div className="SearchBody">
      <div style={{width: "100%", maxWidth:750, padding:10}}>
      <h1 className="LandingTitle"> Zearch </h1>
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