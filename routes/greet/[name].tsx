import { Handler, PageProps } from "$fresh/server.ts";
import api from "../../services/api.ts";

interface Data {
  name: string;
  url: string;
}

export const handler: Handler<Data> = {
  async GET(_, cxt) {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            name: "Luke Skywalker",
            url: "https://swapi.dev/api/people/1/",
          },
        });
      }, 10000);
    });
    // const response = await api.get("/people/1");

    return cxt.render({
      name: response.data.name,
      url: response.data.url,
    });
  },
};

export default function Greet(props: PageProps<Data>) {
  return <div>Hello {props.data.name}</div>;
}
