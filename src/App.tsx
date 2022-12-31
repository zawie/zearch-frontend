import { PageHeader } from '@ant-design/pro-layout';
import icon from './resources/icon.png';

import 'antd/dist/reset.css';
import './App.css';
import { useState } from 'react';

import SearchPage from './pages/SearchPage'
import ResultsPage from './pages/ResultsPage'
import { useSearchParams } from 'react-router-dom';
import { Button, Typography } from 'antd'
import { Search, Result } from './helpers/engineInterface';

const { Text } = Typography;

type State = {
  results: Result[]
  loading: boolean
  errored: boolean
  query: string
}


const App = () => {
  const [state, setState]: [State, any] = useState({
    results: [],
    loading: false,
    errored: false,
    query: ""
  } as State);
  
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("search params: ", searchParams.get("query"));  

  const onSearch = (query: string) => {
    searchParams.set("query", query)
    setSearchParams(searchParams);
  }

  const queryParam: string = (searchParams.get("query") || "").replaceAll("+", " ") 
  if (state.query !== queryParam) {
    setState({
      results: [],
      loading: true,
      errored: false,
      query: queryParam
    })
    Search(queryParam).then((results: Result[]) => {
      setState({
        results,
        loading: false,
        errored: false,
        query: queryParam
      })
    })
    .catch((r) => {
      setState({
        result: [],
        loading: false,
        errored: true,
        query: queryParam
      })
    })
  }

  const page = state.query.length < 1
    ? <SearchPage onSearch={onSearch}/>
    : <ResultsPage onSearch={onSearch} query={state.query} errored={state.errored} loading={state.loading} results={state.results || []}/>

  return  <div className="App">
     <PageHeader className="TopBar"
      onBack={undefined}
      title="Zearch"
      avatar={{ shape: 'square', src: icon}}
      extra={[
        <Button type="link" href='/about'> About </Button>,
      ]}
    />
    {page}
    <div className="Footer">
      <br/>
      <Text type="secondary"> Developed by <a href="https://zawie.io">Adam Zawierucha</a>.</Text>
      <br/>
    </div>
  </div>


};

export default App;