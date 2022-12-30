import { Input, Space, Pagination, Spin, Result as ErrorCard} from 'antd';
import ResultCard from '../components/result/Result'
import './ResultsPage.css'

import { Result } from '../helpers/engineInterface'

import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;
const { Search } = Input;


type ResultsPageProps = {
  onSearch: (query: string) => void
  query: string
  loading: boolean
  errored: boolean
  results: Result[]
}

const ResultsPage = ({onSearch, query, results, loading, errored}: ResultsPageProps) => {
    const PAGE_SIZE = 10;
    const [page, setPage] = useState(0);

return <div style={{padding:15}}>
        <Search
          enterButton="Search"
          size="large"
          defaultValue={query}
          onSearch={onSearch}
        />
        <br/>
        <br/>

        {loading && <>
          <br/>
          <br/>
          <br/>
          <Spin indicator={antIcon} />
        </>}

        {errored && <>
          <br/>
          <br/>
          <br/>
          <ErrorCard
            status="500"
            title="Oops!"
            subTitle="Sorry, something went wrong."
          />
        </>}

        {(!loading && results.length > 0) && <>
          <div className="ResultsList">
            {results.slice(Math.min(page*PAGE_SIZE, results.length-1), Math.min((page+1)*PAGE_SIZE, results.length)).map((r: Result) => <ResultCard result={r}/>)}
          </div>
          <br/>
          <Pagination 
            total={results.length} 
            defaultCurrent={page+1}
            pageSize={PAGE_SIZE} 
            onChange={(page,_) => {
              setPage(page-1);
            }}
          />
        </>}
        
      <Space/>
    </div>;
  };
  
  export default ResultsPage;