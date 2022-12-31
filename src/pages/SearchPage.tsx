import { Input, Space } from 'antd';

import './SearchPage.css'

const { Search } = Input;

type SearchPageProps = {
  onSearch: (query: string) => void
}


const SearchPage = ({onSearch}: SearchPageProps) => {
    return <div className="SearchBody">
      <div style={{width: "100%", maxWidth:750, padding:10}}>
      <h1 className="Title"> Zearch </h1>
        <Search
          size="large"
          onSearch={onSearch}
        />
      </div>
      <Space/>
    </div>;
  };
  
  export default SearchPage;