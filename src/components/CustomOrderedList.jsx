import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function BulletList(props) {
  return (
    <List>
      {props.dataList.map((item, index) => (
        <ListItem key={index} className="p-0">
          <ListItemText primary={item} className="p-0" />
        </ListItem>
      ))}
    </List>
  );
}
