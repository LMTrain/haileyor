import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = event => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          margin: 0,
          padding: 0,
          fontWeight: isCurrentPath ? "normal" : "normal",
          color: isCurrentPath ? "#FFF" : "#000000"
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default withRouter(ActiveLink);
