import { Toolbar, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import searchQueries from "./../Queries/SearchQueries.json";
import updateQueries from "./../Queries/UpdateQueries.json";

function Navbar({ changeQuery, updateQuery, changeRoute }) {
    return (
        <Drawer
            sx={{
                width: 300,
                flexShrink: 0,
                position: "relative",
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
            className="relative"
        >
            <Toolbar>Elasticsearch Queries</Toolbar>

            <Divider />

            <ListItem key={"Home"} disablePadding>
                <ListItemButton onClick={() => changeRoute('/')}>
                    <ListItemText primary={"Home"} />
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem key={"Add Index"} disablePadding>
                <ListItemButton onClick={() => changeRoute('/add')}>
                    <ListItemText primary={"Add Index"} secondary="Add new index to the database" />
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem key={"Add Index"} disablePadding>
                <ListItemButton onClick={() => changeRoute('/search')}>
                    <ListItemText primary={"Search"} secondary="Free search of indexes" />
                </ListItemButton>
            </ListItem>

            <Divider />

            <List>
                {searchQueries.map((query, index) => (

                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            changeRoute('/queries')
                            changeQuery(query);
                        }}>
                            <ListItemText primary={query.name} secondary={query.description} className="truncate" />
                        </ListItemButton>
                    </ListItem>
                ))}
                {updateQueries.map((query, index) => (

                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            changeRoute('/queries')
                            updateQuery(query);
                        }}>
                            <ListItemText primary={query.name} secondary={query.description} className="truncate" />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Navbar;
