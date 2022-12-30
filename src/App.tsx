import { PageHeader } from '@ant-design/pro-layout';
import icon from './resources/icon.png';

import 'antd/dist/reset.css';
import './App.css';
import { useState } from 'react';

import SearchPage from './pages/SearchPage'
import ResultsPage from './pages/ResultsPage'
import { useSearchParams } from 'react-router-dom';

import { Search, Result } from './helpers/engineInterface';

const App = () => {
  const [results, setResults]: [Result[] | undefined, any] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("search params: ", searchParams.get("query"));  

  const onSearch = (query: string) => {
    searchParams.set("query", query)
    setSearchParams(searchParams);
  }

  const queryParam: string = (searchParams.get("query") || "").replaceAll("+", " ") 
  if (query != queryParam) {
    setQuery(queryParam)
    setLoading(true)
    setResults([])
    console.log("Searching:\"" + query + "\"")
    Search(queryParam).then((results: Result[]) => {
      setResults(results)
      setLoading(false)
    })
    .catch((r) => {
      console.log("Failed to search: " + r)
    })
  }

  const page = query.length == 0
    ? <SearchPage onSearch={onSearch}/>
    : <ResultsPage onSearch={onSearch} query={query} loading={loading} results={results || []}/>

  return  <div className="App">
     <PageHeader className="TopBar"
      onBack={undefined}
      title="Zearch"
      avatar={{ shape: 'square', src: icon}}
    />
    {page}
  </div>

};

export default App;