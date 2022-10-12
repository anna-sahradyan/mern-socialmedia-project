import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Grow,
  Paper,
  TextField,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import {getPosts, getPostsBySearch} from "../../actions/postAction";
import { useDispatch } from "react-redux";
import useStyles from "./homeStyle";
import Paginate from "../paginationList/Paginate";
import { useLocation, useNavigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  //!searchPost
  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search,tags:tags.join(",")}))
    } else {
      navigate("/");
    }
  };
  //!handleKeyDown
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  //!handleDelete
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));
  //!handleAdd
  const handleAdd = (tag) => setTags([...tags, tag]);

  return (
    <>
      <Grow in>
        <Container maxWidth={"xl"}>
          <Grid
            container
            alignItems={"stretch"}
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position={"static"} color={"inherit"}>
                <TextField
                  name={"search"}
                  variant={"outlined"}
                  label={"Search Memories"}
                  fullWidth
                  value={search}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                  style={{ margin: "10px 0" }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label={"Search Tags"}
                  variant={"outlined"}
                />
                <Button
                  onClick={searchPost}
                  className={classes.appBarSearch}
                  color={"secondary"}
                  variant="contained"
                >
                  Search
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Paginate />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
