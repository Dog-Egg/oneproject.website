import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("@/components/calendar"), { ssr: false });
const Greeting = dynamic(() => import("@/components/greeting"), { ssr: false });

export default async function Home() {
  const data = await fetchData();
  return (
    <div className="container my-12">
      <header className="flex items-baseline mb-10 justify-between">
        <h1>
          <i className="nes-icon trophy is-large" />
          <Greeting className="ml-4" />
        </h1>
      </header>
      <main>
        <h2 className="mb-8">
          <a className="mr-4" href="#">
            #
          </a>
          <span>Development Tools</span>
        </h2>
        <ol className="list-none space-y-8 p-0">
          {data.user.pinnedItems.nodes.map((n) => (
            <li className="nes-container is-rounded" key={n.name}>
              <a href={n.homepageUrl || n.url} target="_blank">
                <h3>{n.name}</h3>
              </a>
              {n.description && <p>{n.description}</p>}

              <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row md:justify-between md:items-center text-sm">
                <div>
                  <span className="mr-2">last update:</span>
                  <span>
                    <Calendar date={n.pushedAt} />
                  </span>
                </div>

                <div>
                  <span className="mr-2">{n.stargazerCount}</span>
                  <i className="nes-icon star is-small" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}

const fetchData = async () => {
  const response = await fetch("https://api.github.com/graphql", {
    cache: process.env.NODE_ENV === "development" ? "no-store" : undefined,
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
      user(login: "Dog-Egg") {
        pinnedItems(first: 20) {
          totalCount
          nodes {
            ... on Repository {
              name
              description
              stargazerCount
              url
              pushedAt
              homepageUrl
            }
          }
        }
      }
    }`,
    }),
  });
  return (await response.json()).data as {
    user: {
      pinnedItems: {
        nodes: {
          name: string;
          url: string;
          description: string | null;
          pushedAt: string;
          stargazerCount: number;
          homepageUrl: string | null;
        }[];
      };
    };
  };
};
