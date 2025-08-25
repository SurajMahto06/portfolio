const ROOTS = {
  HOMEPAGE: process.env.NEXT_PUBLIC_APP_URL,
};

export const routes = {
  homepage: {
    root: ROOTS.HOMEPAGE,
    about_me: `${ROOTS.HOMEPAGE}/about`,
    projects: `${ROOTS.HOMEPAGE}/projects`,
    contacts: `${ROOTS.HOMEPAGE}/contact`,
  },
};
