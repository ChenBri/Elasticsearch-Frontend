import HomePage from "./HomePage";
import { CopyBlock, dracula } from 'react-code-blocks';
import { useState } from "react";
import { useEffect } from "react";
import api from "../Utils/axiosUtils";
import Header from "./Header";

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

    const [dataset, setDataset] = useState({});
    useEffect(() => {
        async function fetchData() {
            await api.post("/search", getAllQuery)
                .then(function (response) {
                    setDataset(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                    setDataset({});
                });
        }
        fetchData();
    }, [])

    if (Object.keys(currentQuery).length === 0) {
        return (
            <HomePage />
        )
    }


    if (currentQuery.name === "Dataset") {

        return (
            <div className='w-full py-4 px-24'>
                <Header header="Dataset:" subHeader={"Employees Sample (Last 10 Hits)"} />

                <CopyBlock
                    text={JSON.stringify(dataset, undefined, 4)}
                    showLineNumbers={true}
                    theme={dracula}
                    language={"json"}
                    CopyBlock
                />
            </div>
        )
    }

    let { query } = currentQuery;
    return (
        <div className="flex flex-col w-full">

            <Header header={currentQuery.name} subHeader={currentQuery.content} />


            <div className="flex flex-row justify-around gap-12 px-12 ">

                <div className="w-[50%]">
                    <div>Query:</div>
                    <CopyBlock
                        text={JSON.stringify(query, undefined, 4)}
                        showLineNumbers={true}
                        theme={dracula}
                        language={"json"}
                        CopyBlock
                    />
                </div>
                <div className="w-full">
                    <div>Result:</div>
                    <CopyBlock
                        text={JSON.stringify(currentResult, undefined, 4)}
                        showLineNumbers={true}
                        theme={dracula}
                        language={"json"}
                        CopyBlock
                    />
                </div>


            </div>
        </div>
    );
}

export default Content;
