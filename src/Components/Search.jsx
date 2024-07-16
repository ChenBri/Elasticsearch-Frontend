import api from "./../Utils/axiosUtils";
import Header from "./Header";
import { TextField, Button } from "@mui/material";
import { useRef, useState } from "react";
import { CodeBlock, dracula } from 'react-code-blocks';
import MyTable from "./MyTable";


function Search() {

    let searchRef = useRef("");
    const [searchResult, setSearchResult] = useState({});
    const [toggleView, setToggleView] = useState(true);

    async function handleChange() {

        let searchQuery = {
            "query": {
                "index": "sample",
                "body": {
                    "query": {
                        "multi_match": {
                            "query": searchRef.current.value,
                            "fields": [
                                "first_name",
                                "last_name",
                                "gender",
                                "email",
                                "department",
                                "job"
                            ],
                            "fuzziness": "AUTO"
                        }
                    }
                }
            }
        }

        await api.post("/search", searchQuery)
            .then(function (response) {
                setSearchResult(response.data.data.hits)
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <>
            <div className="flex flex-col w-full mx-12">

                <Header header="Search:" subHeader={"Search for any term/index (case-sensitive)."} />

                <div className="border-2 p-6 flex justify-center mx-auto">
                    <TextField className="self-center" id="search" label="Search" variant="standard" inputRef={searchRef} onChange={handleChange} />
                </div>

                <div className="w-full relative">

                    {searchResult.length ?
                        <>
                            <div className="absolute -top-4 z-10 right-2">

                            </div>
                            <div className="absolute -top-4 z-10 right-2">
                                <Button variant="contained" onClick={() => setToggleView(!toggleView)}>{toggleView ? "Table" : "Code"}</Button>
                            </div>
                            <div>Result:</div>

                            {toggleView ?
                                <CodeBlock
                                    text={JSON.stringify(searchResult, undefined, 4)}
                                    showLineNumbers={true}
                                    theme={dracula}
                                    language={"json"}
                                    codeBlock
                                /> :
                                <MyTable hits={searchResult} />}

                        </>



                        :
                        <div className="text-center text-2xl pt-12">No result was found.</div>}

                </div>

            </div>

        </>
    );
}

export default Search;

