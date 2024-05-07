/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

// import NesContainer from "@/components/nes-container";
import dynamic from "next/dynamic";
import {
  StarIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/button";
import ThemeToggle from "@/components/theme-toggle";

const Calendar = dynamic(() => import("@/components/calendar"), { ssr: false });

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="container p-6">
      <h1 className="text-5xl font-extrabold">
        {"Hello, I'm "}
        <strong>Lee</strong>
      </h1>

      <div className="mt-8">
        <Button className="hover:bg-black" asChild>
          <a href="https://github.com/Dog-Egg">
            <GitHubLogoIcon className="mr-2" />
            GitHub
          </a>
        </Button>
        <Button className="hover:bg-[#00b0ff]" asChild>
          <a href="mailto:294622946@qq.com">
            <EnvelopeClosedIcon />
          </a>
        </Button>
        <ThemeToggle />
      </div>

      <img
        className="block dark:hidden"
        src="https://raw.githubusercontent.com/Dog-Egg/Resources/output/github-contribution-grid-snake.svg"
      />
      <img
        className="hidden dark:block"
        src="https://raw.githubusercontent.com/Dog-Egg/Resources/output/github-contribution-grid-snake-dark.svg"
      />

      <div>
        <h2 className="mb-4 mt-8 text-2xl font-semibold">
          🛠️ Development Tools
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.user.pinnedItems.nodes.map((item, index) => (
            <a
              key={index}
              className="rounded-md bg-gray-400/10 px-4 py-3 text-current transition-colors hover:bg-gray-400/20"
              href={item.homepageUrl || item.url}
              target="_blank"
            >
              <div className="flex h-full items-center justify-between">
                <div className="flex h-full grow flex-col">
                  <div className="text-lg">{item.name}</div>
                  <div className="mt-2 text-base opacity-50">
                    {item.description}
                  </div>
                  <div className="mt-auto opacity-50">
                    <div className="mt-2 flex text-sm">
                      <span>
                        <span className="mr-2">Last update:</span>
                        <Calendar date={item.pushedAt} />
                      </span>
                      <span className="ml-auto flex items-center">
                        {/* {item.stargazerCount}
                        <StarIcon className="ml-1" /> */}
                        {item.object.history.totalCount} Commits
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-4">
                  <i
                    className={`twa twa-3x ${(() => {
                      if (item.name in name2Emoji) {
                        return `twa-${name2Emoji[item.name]}`;
                      } else {
                        return `twa-regional-indicator-symbol-letter-${item.name[0].toLowerCase()}`;
                      }
                    })()}`}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 mt-8 text-2xl font-semibold">✨ Skills</h2>
        <div className="grid grid-cols-10 gap-2 md:grid-cols-12 lg:grid-cols-16">
          {skills.map((item) => (
            <a
              key={item.i}
              className="transition duration-100 ease-in-out hover:scale-110 focus:scale-110"
              href={item.url}
              target="_blank"
            >
              <item.Icon className="max-h-12 max-w-12 dark:hidden" />
              <item.IconDark className="hidden max-h-12 max-w-12 dark:block" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

const name2Emoji: Record<string, string> = {
  "scrapy-ui": "spider-web",
  "django-oasis": "desert-island",
};

const skills: Array<{
  i: string;
  url: string;
  Icon: React.ElementType;
  IconDark: React.ElementType;
}> = [
  {
    i: "py",
    url: "https://www.python.org/",
    Icon: require("@/skill-icons/Python-Light.svg").default,
    IconDark: require("@/skill-icons/Python-Dark.svg").default,
  },
  {
    i: "vue",
    url: "https://vuejs.org/",
    Icon: require("@/skill-icons/VueJS-Light.svg").default,
    IconDark: require("@/skill-icons/VueJS-Dark.svg").default,
  },
  {
    i: "webpack",
    url: "https://webpack.js.org/",
    Icon: require("@/skill-icons/Webpack-Light.svg").default,
    IconDark: require("@/skill-icons/Webpack-Dark.svg").default,
  },
  {
    i: "css",
    url: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
    Icon: require("@/skill-icons/CSS.svg").default,
    IconDark: require("@/skill-icons/CSS.svg").default,
  },
  // {
  //   i: "dart",
  //   url: "https://dart.dev/",
  //   Icon: require("@/skill-icons/Dart-Light.svg").default,
  //   IconDark: require("@/skill-icons/Dart-Dark.svg").default,
  // },
  {
    i: "django",
    url: "https://www.djangoproject.com/",
    Icon: require("@/skill-icons/Django.svg").default,
    IconDark: require("@/skill-icons/Django.svg").default,
  },
  {
    i: "docker",
    url: "https://www.docker.com/",
    Icon: require("@/skill-icons/Docker.svg").default,
    IconDark: require("@/skill-icons/Docker.svg").default,
  },
  {
    i: "flask",
    url: "https://flask.palletsprojects.com/",
    Icon: require("@/skill-icons/Flask-Light.svg").default,
    IconDark: require("@/skill-icons/Flask-Dark.svg").default,
  },
  // {
  //   i: "flutter",
  //   url: "https://flutter.dev/",
  //   Icon: require("@/skill-icons/Flutter-Light.svg").default,
  //   IconDark: require("@/skill-icons/Flutter-Dark.svg").default,
  // },
  {
    i: "git",
    url: "https://git-scm.com/",
    Icon: require("@/skill-icons/Git.svg").default,
    IconDark: require("@/skill-icons/Git.svg").default,
  },
  {
    i: "gulp",
    url: "https://gulpjs.com/",
    Icon: require("@/skill-icons/Gulp.svg").default,
    IconDark: require("@/skill-icons/Gulp.svg").default,
  },
  {
    i: "html",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    Icon: require("@/skill-icons/HTML.svg").default,
    IconDark: require("@/skill-icons/HTML.svg").default,
  },
  {
    i: "htmx",
    url: "https://htmx.org/",
    Icon: require("@/skill-icons/Htmx-Light.svg").default,
    IconDark: require("@/skill-icons/Htmx-Dark.svg").default,
  },
  {
    i: "js",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Icon: require("@/skill-icons/JavaScript.svg").default,
    IconDark: require("@/skill-icons/JavaScript.svg").default,
  },
  {
    i: "md",
    url: "https://www.markdownguide.org/",
    Icon: require("@/skill-icons/Markdown-Light.svg").default,
    IconDark: require("@/skill-icons/Markdown-Dark.svg").default,
  },
  {
    i: "mongodb",
    url: "https://www.mongodb.com/",
    Icon: require("@/skill-icons/MongoDB.svg").default,
    IconDark: require("@/skill-icons/MongoDB.svg").default,
  },
  {
    i: "mysql",
    url: "https://www.mysql.com/cn/",
    Icon: require("@/skill-icons/MySQL-Light.svg").default,
    IconDark: require("@/skill-icons/MySQL-Dark.svg").default,
  },
  {
    i: "nextjs",
    url: "https://nextjs.org/",
    Icon: require("@/skill-icons/NextJS-Light.svg").default,
    IconDark: require("@/skill-icons/NextJS-Dark.svg").default,
  },
  {
    i: "nginx",
    url: "https://www.nginx.com/",
    Icon: require("@/skill-icons/Nginx.svg").default,
    IconDark: require("@/skill-icons/Nginx.svg").default,
  },
  {
    i: "nodejs",
    url: "https://nodejs.org/",
    Icon: require("@/skill-icons/NodeJS-Light.svg").default,
    IconDark: require("@/skill-icons/NodeJS-Dark.svg").default,
  },
  {
    i: "react",
    url: "https://react.dev/",
    Icon: require("@/skill-icons/React-Light.svg").default,
    IconDark: require("@/skill-icons/React-Dark.svg").default,
  },
  {
    i: "redis",
    url: "https://redis.io/",
    Icon: require("@/skill-icons/Redis-Light.svg").default,
    IconDark: require("@/skill-icons/Redis-Dark.svg").default,
  },
  {
    i: "sass",
    url: "https://sass-lang.com/",
    Icon: require("@/skill-icons/Sass.svg").default,
    IconDark: require("@/skill-icons/Sass.svg").default,
  },
  {
    i: "sqlite",
    url: "https://www.sqlite.org/",
    Icon: require("@/skill-icons/SQLite.svg").default,
    IconDark: require("@/skill-icons/SQLite.svg").default,
  },
  {
    i: "sentry",
    url: "https://sentry.io/",
    Icon: require("@/skill-icons/Sentry.svg").default,
    IconDark: require("@/skill-icons/Sentry.svg").default,
  },
  {
    i: "ts",
    url: "https://www.typescriptlang.org/",
    Icon: require("@/skill-icons/TypeScript.svg").default,
    IconDark: require("@/skill-icons/TypeScript.svg").default,
  },
  {
    i: "vim",
    url: "https://www.vim.org/",
    Icon: require("@/skill-icons/VIM-Light.svg").default,
    IconDark: require("@/skill-icons/VIM-Dark.svg").default,
  },
  {
    i: "vscode",
    url: "https://code.visualstudio.com/",
    Icon: require("@/skill-icons/VSCode-Light.svg").default,
    IconDark: require("@/skill-icons/VSCode-Dark.svg").default,
  },
  {
    i: "ansible",
    url: "https://www.ansible.com/",
    Icon: require("@/skill-icons/Ansible.svg").default,
    IconDark: require("@/skill-icons/Ansible.svg").default,
  },
].sort((a, b) => {
  if (a.i < b.i) {
    return -1;
  } else if (a.i > b.i) {
    return 1;
  } else {
    return 0;
  }
});

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
                object(expression: "HEAD") {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
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
          object: {
            history: {
              totalCount: number;
            };
          };
        }[];
      };
    };
  };
};
