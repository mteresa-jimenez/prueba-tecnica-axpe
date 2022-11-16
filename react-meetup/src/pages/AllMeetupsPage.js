import { useFetch } from "../util-hooks/useFetch";
import MeetupList from "../components/meetups/MeetupList";
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {
  const { data } = useFetch({
    url: "/data.json",
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupList data={data} />
      </ul>
    </section>
  );
}
