import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
import dotenv from "dotenv";
import Enzyme from "enzyme";
import "isomorphic-unfetch";
import nock from "nock";

dotenv.config({ path: ".env.test" });

axios.defaults.adapter = httpAdapter;

Enzyme.configure({ adapter: new Adapter() });

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();
