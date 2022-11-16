import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ item, favorites, setFavorites }) {

  function addFavorites() {
    if (favorites.includes(item)){
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      return setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  return (
      <Card >
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button id={item.id} onClick={addFavorites}>Add to favorites</button>
        </div>
      </Card>
  );
}
