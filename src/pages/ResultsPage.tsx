import { Input, Space, Pagination} from 'antd';
import ResultCard from '../components/result/Result'
import './ResultsPage.css'

import { Result } from '../helpers/engineInterface'

const { Search } = Input;

type ResultsPageProps = {
  onSearch: (query: string) => void
  query: string
  loading: boolean
  results: Result[]
}

const ResultsPage = ({onSearch, query, results, loading}: ResultsPageProps) => {
    return <div style={{padding:15}}>
        <Search
          enterButton="Search"
          size="large"
          defaultValue={query}
          onSearch={onSearch}
        />
        <br/>
        <br/>

        <div className="ResultsList">
          {results.map((r: Result) => <ResultCard result={r}/>)}
        </div>
        <br/>
        <Pagination defaultCurrent={2} total={40} pageSize={16} />
      <Space/>
    </div>;
  };
  
  export default ResultsPage;