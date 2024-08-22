const DEBUG = false;

let currentHeading;
let currentSection;
let currentTocLink;
let dot = DEBUG ? createDot() : null;
let toc = document.querySelector("#mimir-doc-toc");
let tocInner = document.querySelector("#mimir-doc-toc .mimir-doc-toc-inner");
let offset = 0;
window.addEventListener("scroll", selectSection, { passive: true });
toc.addEventListener("click", navigateToc);

selectSection(!!location.hash);

function createDot() {
    const dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.width = "2px";
    dot.style.height = "2px";
    dot.style.background = "red";
    dot.style.zIndex = 100000;
    dot.style.display = DEBUG ? "block" : "none";
    document.body.appendChild(dot);
    return dot;
}

function moveDot(x, y) {
    if (dot) {
        dot.style.left = x + "px";
        dot.style.top = (y + 4) + "px"; // the extra value added to y pushes it just a tad further down, so it isn't clinging to the top edge of the targeted element
        // set CSS custom property --mimir-doc-toc-heading-buffer on body 
        // to the height of the heading buffer in the TOC
        document.body.style.setProperty("--mimir-doc-toc-heading-buffer", `${y}px`);
    }
}

function selectSection(ev, styleSection = false) {
    // position the selection point at a "prominent" part of the page that should do a good job of finding the most prominent section on screen.
    const x = window.innerWidth * 0.6;
    const y = window.innerHeight / 6;
    const hits = document.elementsFromPoint(x + 20, y + 20);

    // from the elements hit by the ray, find one that's a section, chapter, etc, and also for which the `id` exists in the TOC.
    let section = hits
        .find((el) => {
            let is_correct_type = el.matches(".preface,.section,.chapter,.mimir-doc-title");
            let exists_in_toc = toc.querySelector(`a[href$="#${getId(el)}"]`) != null;
            return is_correct_type && exists_in_toc
        });

    if (!section) {
        section = document.querySelector("#doc-wrapper");
    }

    if (section) {
        moveDot(x, y);
        setActive(section, styleSection, false);
        offset = y;
    }
}

function getId(el) {
    return el.id.replace(/^mimir-doc--/, "");
}

function setActive(section, styleSection = false, setHash = false) {
    const sectionChanged = section != currentSection;
    const sectionExists = !!section;

    if (sectionExists) {
        if (sectionChanged) {
            if (currentSection) {
                unhighlightTocLink(getId(currentSection));
            }
            setInactive(currentHeading);
        }

        highlightTocLink(getId(section));

        currentHeading = section.querySelector(".title,.legalnotice");
        currentSection = section;

        if (styleSection) {
            currentHeading.classList.add("mimir-doc-toc__active");
        }
    }
}

function highlightTocLink(id) {
    // find the link in the TOC that corresponds to this id.  The "doc-wrapper"
    // id appears many times, but is only used in multi-page, so the || here
    // separates the two.  on the left is multi-page, and on the right is
    // single-page.
    const link = toc.querySelector(`a[href$="${location.pathname}#${id}"]`) || toc.querySelector(`a[href$="#${id}"]`);

    // TODO this 1200 value matches a media query in mimir-doc-toc.css and it
    // would be better to read the value dynamically (in a zero-cost way, no
    // getComputedStyle) or inject it with an esbuild define const, than to
    // hardcode it here.
    const isTocAside = window.innerWidth > 1200;

    // if the link was found
    if (shouldScroll() && link) {
        // only scroll the TOC into view if it's beside the content (in mobile mode it's above the content)
        if (isTocAside) {
            // use the superior scrollIntoViewIfNeeded if available
            if (link.scrollIntoViewIfNeeded) {
                link.scrollIntoViewIfNeeded();
            } else {
                // find an approximate location of the link within the toc so
                // we can scroll directly to it.  this is necessary because
                // firefox doesn't support scrollIntoViewIfNeeded.
                let linkPos = link.offsetTop;
                let tocPos = tocInner.offsetTop;
                let winMid = window.innerHeight / 3;
                let targetPos = linkPos - winMid;
                tocInner.scrollTo(0, targetPos);
            }
        }

        link.classList.add("mimir-doc-toc__active");
    }
}

/**
 * Determine if the scroll should take place.
 */
function shouldScroll() {
    // if we scroll past the TOC, and then try to `scrollTo()` the TOC, it causes erratic jumping, so we should not scroll if we've scrolled past the TOC.
    const scrolledPastTOC = tocInner.getBoundingClientRect().y < 0;
    return !scrolledPastTOC;
}

function navigateToc(ev) {
    const isAnchor = ev.target.constructor == HTMLAnchorElement;
    if (isAnchor) {
        const id = ev.target.href.split("#")[1];
        if (id) {
            const section = document.querySelector(`#${id}`);
            setActive(section, true, true);
        }
    }
}

/**
 * Returns true if the element is found and the scroll succeeds, false if the target element is not found.
 */
function tocScrollTo(section, offset) {
    if (section) {
        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: "instant"
        });
        return true;
    }
    return false;
}

function unhighlightTocLink(id) {
    // find the link in the TOC that corresponds to this id.  The "doc-wrapper"
    // id appears many times, but is only used in multi-page, so the || here
    // separates the two.  on the left is multi-page, and on the right is
    // single-page.
    const link = toc.querySelector(`a[href$="${location.pathname}#${id}"]`) || toc.querySelector(`a[href$="#${id}"]`);
    if (link) {
        link.classList.remove("mimir-doc-toc__active");
    }
}

function setInactive(el) {
    if (el) {
        el.classList.remove("mimir-doc-toc__active");
    }
}
