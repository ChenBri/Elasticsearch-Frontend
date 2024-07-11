import HomePage from "./HomePage";
import { CodeBlock, dracula } from 'react-code-blocks';
import { useState } from "react";
import { useEffect } from "react";
import api from "../Utils/axiosUtils";
import Header from "./Header";
import { Button } from "@mui/material";

import MyTable from "./MyTable";

const getAllQuery = {
    "query": {
        "index": "sample",
        "body": {
            "query": {
                "match_all": {}
            },
            "sort": [
                {
                    "id": {
                        "order": "desc"
                    }
                }
            ]
        }
    }
}

function Content({ currentQuery, currentResult }) {
    const [toggleView, setToggleView] = useState(true);

    const [dataset, setDataset] = useState({});
    useEffect(() => {
        async function fetchData() {
            await api.post("/search", getAllQuery)
                .then(function (response) {
                    setDataset(response.data.data);
                })
                .catch(function (error) {

                    setDataset({});
                });
        }
        fetchData();
    }, []);



    if (Object.keys(currentQuery).length === 0) {
        return (
            <HomePage />
        )
    }


    if (currentQuery.name === "Dataset") {

        return (
            <div className='w-full py-4 px-24'>
                <Header header="Dataset:" subHeader={"Employees Sample (Last 10 Hits)"} />

                <CodeBlock
                    text={JSON.stringify(dataset, undefined, 4)}
                    showLineNumbers={true}
                    theme={dracula}
                    language={"json"}
                    codeBlock
                />
            </div>
        )
    }

    let { query } = currentQuery;
    let { hits } = currentResult;
    console.log(query);
    return (
        <div className="flex flex-col w-full">

            <Header header={currentQuery.name} subHeader={currentQuery.content} />


            <div className="flex flex-row justify-around gap-12 px-12 ">

                <div className="w-[50%]">
                    <div>Query:</div>
                    <CodeBlock
                        text={JSON.stringify(query, undefined, 4)}
                        showLineNumbers={true}
                        theme={dracula}
                        language={"json"}
                        codeBlock
                    />
                </div>
                <div className="w-full relative">

                    <div>Result:</div>
                    <div className="absolute -top-4 z-10 right-2">
                        <Button variant="contained" onClick={() => setToggleView(!toggleView)}>{toggleView ? "Table" : "Code"}</Button>
                    </div>

                    {toggleView ? <CodeBlock
                        text={JSON.stringify(currentResult, undefined, 4)}
                        showLineNumbers={true}
                        theme={dracula}
                        language={"json"}
                        codeBlock
                    /> :
                        <MyTable hits={hits} />
                    }
                </div>


            </div>
        </div>
    );
}

export default Content;
