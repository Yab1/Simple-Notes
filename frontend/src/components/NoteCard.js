// Material-UI imports
import { Avatar, Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

// MUI icons imports
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const style = (category) => ({
  background:
    category === "work"
      ? "#fbc02d"
      : category === "money"
      ? "#4caf50"
      : category === "todos"
      ? "#e91e63"
      : "#2196f3",
});

const NoteCard = (props) => {
  const { title, details, category, id } = props.note;
  const { handleDelete } = props;
  const avatar = style(category);

  return (
    <Card key={id} elevation={1}>
      <CardHeader
        avatar={<Avatar style={avatar}>{category[0].toUpperCase()}</Avatar>}
        action={
          <IconButton onClick={() => handleDelete(id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {details}
          {props.note.url ? (
            <Link href={props.note.url}>{props.note.name}</Link>
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
