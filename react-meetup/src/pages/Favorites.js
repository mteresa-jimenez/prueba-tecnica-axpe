import MeetupList from "../components/meetups/MeetupList";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage({ favorites, setFavorites}) {
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        <MeetupList data={favorites} favorites={favorites} setFavorites={setFavorites}/>
      </ul>
    </section>
  );
}
