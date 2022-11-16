import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupList({ data }) {
  return data.map((item) => {
    return (
      <li key={item.id} className={classes.item} data-test="meet-up-item">
        <MeetupItem item={item} />
      </li>
    );
  });
}
