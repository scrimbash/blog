import React from "react";

export const UtterancesComments = () => (
    <section
      ref={elem => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.crossOrigin = "anonymous";
        scriptElem.setAttribute("repo", "scrimbash/blog");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("label", "blog-comment");
        scriptElem.setAttribute("theme", "github-light");
        elem.appendChild(scriptElem);
      }}
    />
  );