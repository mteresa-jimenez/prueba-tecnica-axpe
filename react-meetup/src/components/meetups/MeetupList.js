import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupList({ data, favorites, setFavorites }) {
  return data.map((item, index) => {
    return (
      <li key={index} className={classes.item} data-test="meet-up-item">
        <MeetupItem item={item} favorites={favorites} setFavorites={setFavorites}/>
      </li>
    );
  });
}
