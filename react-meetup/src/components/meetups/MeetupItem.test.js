/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";

const item = { id: "id" };
const favorites = [];
const setFavorites = jest.fn(() => item);

describe("<MeetupItem/> component", () => {
  let wrapper = shallow(<MeetupItem item={item} favorites={favorites} setFavorites={setFavorites} />);

  beforeEach(() => {
    shallow(<MeetupItem item={item} favorites={favorites} setFavorites={setFavorites} />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("clicking the button changes favourites state", () => {
    wrapper.find("button").simulate('click');
    expect(setFavorites).toHaveBeenCalled();
  });
});
