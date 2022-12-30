export type Result = {
    url: URL;
    title: string;
    description: string;
    author: string;
    keywords:string
};

export async function Search(query: string): Promise<Result[]> {
    const host =  "api.search.zawie.io"
    const response = await fetch("http://"+host+"/search/?query="+query.replaceAll(" ","+"));
    if (response.status === 200) {
        console.log(response);
        const json = await response.json() as {results: Result[]}
        console.log(json);
        return json.results as Result[];
    } else {
        throw Error(response.status + " error: " + response.statusText);
    }
}