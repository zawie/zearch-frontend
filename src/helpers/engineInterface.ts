export type Result = {
    url: URL;
    title: string;
    description: string;
    author: string;
    keywords:string
};

export async function Search(query: string): Promise<Result[]> {
    const host =  "api.search.zawie.io"
    const response = await fetch("https://"+host+"/search/?query="+query.replaceAll(" ","+"));
    if (response.status === 200) {
        const json = await response.json() as {results: Result[]}
        const results = (json.results as Result[]).map(r => {
           r.url = new URL(r.url)
           return r;
        })
        return results;
    } else {
        throw Error(response.status + " error: " + response.statusText);
    }
}