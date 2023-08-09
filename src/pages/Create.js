// React imports
import { useReducer } from "react";
import { useHistory } from "react-router-dom";

// Material-UI imports
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

// MUI icons imports
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// TSS-React imports
import { makeStyles } from "tss-react/mui";

// Other imports
import { v4 as uuidv4 } from "uuid";

// Reducer imports
import { ACTION_TYPES } from "../variables/ACTION_TYPES";
import { formReducer, INITIAL_STATE } from "../reducers/formReducer";

const useStyles = makeStyles()((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
}));

export default function Create({ handleAdd }) {
  const [form, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { classes } = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    dispatch({ type: ACTION_TYPES.SET_TITLE_ERROR, payload: false });
    dispatch({ type: ACTION_TYPES.SET_DETAIL_ERROR, payload: false });
    if (!form.title)
      dispatch({ type: ACTION_TYPES.SET_TITLE_ERROR, payload: true });
    if (!form.details)
      dispatch({ type: ACTION_TYPES.SET_DETAIL_ERROR, payload: true });
    if (form.title && form.details) {
      handleAdd({
        title: form.title,
        details: form.details,
        category: form.category,
        id: uuid,
      });
      history.push("/");
    }
  };

  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a new Note
        </Typography>
        <form noValidate autoCorrect="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              dispatch({
                type: ACTION_TYPES.SET_TITLE,
                payload: e.target.value,
              })
            }
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={form.titleError}
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: ACTION_TYPES.SET_DETAILS,
                payload: e.target.value,
              })
            }
            className={classes.field}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={form.detailError}
          />
          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={form.category}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPES.SET_CATEGORY,
                  payload: e.target.value,
                })
              }
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel value="todo" control={<Radio />} label="Todo" />
              <FormControlLabel
                value="reminder"
                control={<Radio />}
                label="Reminder"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            startIcon={<SendIcon />}
            endIcon={<KeyboardArrowRightIcon />}
          >
            submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
