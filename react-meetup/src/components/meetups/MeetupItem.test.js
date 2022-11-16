/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(<MeetupItem item={{}} favorites={[]} setFavorites={[]} />);
  expect(wrapper.exists()).toBe(true);
});
