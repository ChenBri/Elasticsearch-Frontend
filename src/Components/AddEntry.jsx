import { TextField, Button } from "@mui/material";
import { useRef } from "react";
import api from "./../Utils/axiosUtils";
import { CopyBlock, dracula } from 'react-code-blocks';
import { useState } from "react";




const code = `let countSearch = await client.search({
    "index": "sample",
    "body": {
        "query": {
            "match_all": {}
        }
    }
});
let count = countSearch.hits.total.value;

const data = await client.index({
    index: 'sample',
    document: { 
        "first_name": "First Name",
        "last_name": "Last Name",
        "gender": "Gender",
        "email": "example@gmail.com",
        "salary": 99999.99,
        "department": "Engineering",
        "birthday": "1970-01-01",
        "job": "Data Scientist",
        id: ++count },
})`

function AddEntry() {

    const [status, setStatus] = useState({});

    let firstNameRef = useRef("");
    let lastNameRef = useRef("");
    let genderRef = useRef("");
    let emailRef = useRef("");
    let salaryRef = useRef("");
    let departmentRef = useRef("");
    let birthdayRef = useRef("");
    let jobRef = useRef("");

    async function handleSubmit() {

        console.log("Button Pressed");
        let firstName = firstNameRef.current.value;
        let lastName = lastNameRef.current.value;
        let gender = genderRef.current.value;
        let email = emailRef.current.value;
        let salary = salaryRef.current.value;
        let department = departmentRef.current.value;
        let birthday = birthdayRef.current.value;
        let job = jobRef.current.value;



        let entry = {
            "first_name": firstName,
            "last_name": lastName,
            "gender": gender,
            "email": email,
            "salary": salary,
            "department": department,
            "birthday": new Date(birthday),
            "job": job
        }
        console.log(entry);

        await api.post("/add", entry)
            .then(function (response) {
                console.log(response.data);
                setStatus(response.data);
            })
            .catch(function (error) {
                setStatus(error)
            });
    }

    return (
        <div className="pt-24 px-12 flex flex-row gap-12 w-full">
            <div className="flex flex-col gap-2 mx-4 border-2 p-6">
                <TextField id="first_name" label="First Name" variant="standard" inputRef={firstNameRef} />
                <TextField id="last_name" label="Last Name" variant="standard" inputRef={lastNameRef} />
                <TextField id="gender" label="Gender" variant="standard" inputRef={genderRef} />
                <TextField id="email" label="Email" variant="standard" inputRef={emailRef} />
                <TextField id="salary" label="Salary" variant="standard" inputRef={salaryRef} />
                <TextField id="department" label="Department" variant="standard" inputRef={departmentRef} />
                <TextField id="birthday" label="Birthday" variant="standard" inputRef={birthdayRef} />
                <TextField id="job" label="Job" variant="standard" inputRef={jobRef} />
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
            <div className="w-5/12">
                <div>Code (Javascript):</div>
                <CopyBlock
                    text={code}
                    showLineNumbers={true}
                    theme={dracula}
                    language={"js"}
                    CopyBlock
                    className=""
                />
            </div>
            <div className="w-5/12">
                <div>Result:</div>
                <CopyBlock
                    text={JSON.stringify(status, undefined, 4)}
                    showLineNumbers={true}
                    theme={dracula}
                    language={"json"}
                    CopyBlock
                />
            </div>

        </div>
    );
}

export default AddEntry;
