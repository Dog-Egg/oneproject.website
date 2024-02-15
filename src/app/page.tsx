// import NesContainer from "@/components/nes-container";
import dynamic from "next/dynamic";

const NesContainer = dynamic(() => import("@/components/nes-container"), {
  ssr: false,
});
const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), {
  ssr: false,
});
const Calendar = dynamic(() => import("@/components/calendar"), { ssr: false });
const Greeting = dynamic(() => import("@/components/greeting"), { ssr: false });

export default async function Home() {
  const data = await fetchData();
  return (
    <div className="container my-12">
      <header className="mb-10 flex items-baseline justify-between">
        <h1>
          <i className="nes-icon trophy is-large" />
          <Greeting className="ml-4" />
        </h1>
        <ThemeToggle />
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
            <li key={n.name}>
              <NesContainer>
                <a href={n.homepageUrl || n.url} target="_blank">
                  <h3>{n.name}</h3>
                </a>
                {n.description && <p>{n.description}</p>}

                <div className="flex flex-col space-y-4 text-sm md:flex-row md:items-center md:justify-between md:space-y-0">
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
              </NesContainer>
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
