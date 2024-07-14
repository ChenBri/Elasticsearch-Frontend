import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
import Bold from "./Bold";
function HomePage() {

    return (

        <div className=" flex flex-col text-left  pl-12 pr-2 font-mono ">
            <Header header="ElasticSearch Queries" subHeader={"By Chen Brilling"} />
            <div className="flex flex-col gap-8 text-[18px] justify-center">

                <div className="flex flex-col text-[19px]">
                    <SubHeader text="About:" />
                    <p>
                        This project is a full-stack application demonstrating different Elasticsearch capabilities,
                        including executing search queries, updating documents, and adding new documents through a custom form.
                    </p>
                    <p className="py-4">
                        The website executes various queries, sending requests to a backend connected to Elasticsearch
                        Cloud that I created, and displays the results on the front-end in both JSON format and as a
                        formatted table.
                    </p>
                    <p>
                        The front-end and back-end are deployed using Netlify, so any change committed to either
                        side is automatically updated and deployed. All queries on the website have been tested using Kibana,
                        the Elasticsearch JavaScript API, and the Elasticsearch Python API. The code can easily be adapted to
                        integrate with any backend, regardless of the programming language.
                    </p>
                </div>

                <div className="flex flex-row justify-between leading-8">
                    <div className="w-[55%]">
                        <SubHeader text="Backend:" />
                        <p>
                            The backend is built with Node.js using the Express framework.
                            I managed database access through API keys stored as environment variables. The API supports three
                            primary endpoints:
                        </p>
                        <ol className="list-decimal	">
                            <li className="ml-16">
                                <Bold>/api/add</Bold>: Adds a new document to a specified index.
                            </li>
                            <li className="ml-16">
                                <Bold>/api/search</Bold>: Searches within a specified index based on a custom query, script, or aggregation,
                                returning different data depending on the request type using _search.
                            </li>
                            <li className="ml-16">
                                <Bold>/api/update</Bold>: Updates documents that match the provided query using _update_by_query.
                            </li>


                        </ol>
                        <p>
                            The backend is deployed on Netlify and can be accessed at
                            <a className="break-keep pl-2" href="http://elasticsearchbackend.netlify.app">elasticsearch-backend.netlify.app</a>.
                        </p>
                    </div>
                    <div className="w-[40%]">
                        <SubHeader text="Frontend:" />
                        <p>
                            The front-end is developed using React, and React Router, and styled with Material UI and Tailwind CSS.
                            All API calls are made using Axios. The list of queries is generated dynamically, so to add new queries,
                            you only need to update a JSON file with the new data—no code changes are required.
                        </p>
                        <p>
                            The front-end is also deployed on Netlify and can be accessed at
                            <a className="break-keep pl-2" href="http://elasticsearchfrontend.netlify.app">elasticsearch-frontend.netlify.app</a>.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
