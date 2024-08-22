import { components } from "/services/primer/js/primer.js";
components.include("rh-pagination");

function each_row(callback, table) {
    // the rows of tbody content; ie, not within <thead>
    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].parentElement.tagName != "THEAD") {
            callback(table.rows[i], i);
        }
    }
}

function show_page(table, page = 1, per_page = 10) {
    each_row((row, i) => {
        let before_page_end = i <= page * per_page;
        let after_page_start = i > (page - 1) * per_page;
        let on_current_page = after_page_start && before_page_end;

        if (on_current_page) {
            table.rows[i].removeAttribute("hidden")
        } else {
            table.rows[i].setAttribute("hidden", "hidden")
        }
    }, table);
}

function filter_table(filter = "*", table) {
    if (filter.trim() == "*" || filter.trim() == "") {
        show_page(table);
    } else {
        let filter_lc = filter.toLowerCase().replace("*", ".*");
        let pattern;
        let is_regex;

        // if the pattern is valid regex, use it, otherwise do a plain text search
        try {
            pattern = new RegExp(".*" + filter_lc + ".*");
            is_regex = true;
        } catch (e) {
            pattern = filter_lc;
            is_regex = false;
        }
        each_row((row, i) => {
            // don't operate on thead rows
            if (row.parentElement.tagName == "THEAD") {
                return;
            }

            // test regex match
            if (is_regex && pattern.test(row.textContent.toLowerCase())) {
                table.rows[i].removeAttribute("hidden");
                // test plaintext match
            } else if (!is_regex && row.textContent.toLowerCase().includes(pattern)) {
                table.rows[i].removeAttribute("hidden");
            } else {
                table.rows[i].setAttribute("hidden", "hidden");
            }
        }, table);
    }
}

function init_filter(input, table) {
    input.addEventListener("keyup", ev => {
        if (ev.target.value != ev.target.dataset.prev_value) {
            filter_table(ev.target.value, table);
        }
        ev.target.dataset.prev_value = ev.target.value;
    });
}

function init_pagination(wrapper, table, per_page = 10, filter = "*") {
    let rh_pagination = document.createElement("rh-pagination");
    let pagination_ol = document.createElement("ol");
    rh_pagination.appendChild(pagination_ol);
    for (let i = 1; i <= Math.ceil(table.rows.length / per_page); i++) {
        let page = i;
        let li = document.createElement("li")
        let page_link = document.createElement("a")
        page_link.href = `#${page}`;
        page_link.innerText = page;
        show_page(table, page, per_page);
        page_link.dataset.page = page;
        page_link.addEventListener("click", () => show_page(table, page, per_page));
        li.appendChild(page_link);
        pagination_ol.appendChild(li);
    }

    window.addEventListener("hashchange", ev => {
        if (hash_is_page_number(ev.target.location.hash)) {
            rh_pagination.requestUpdate();
        }
    });

    wrapper.appendChild(rh_pagination);
}

// listen for changes to the URL hash
function init_hash_routing(table, per_page = 10) {
    window.addEventListener("hashchange", ev => {
        if (hash_is_page_number(ev.target.location.hash)) {
            let hash = ev.target.location.hash;
            let page = +hash.replace("#", "");
            show_page(table, page, per_page);
        }
    });
}

function hash_is_page_number(hash) {
    return !Number.isNaN(get_page_from_hash(hash));
}

function get_page_from_hash(hash) {
    return Number.parseInt(hash.replace(/^#/, ""));
}

let per_page = 10;
let table = document.querySelector("#cve-affected-packages-table");
let input = document.querySelector("#cve-filter-input");
let controls_wrapper = document.querySelector("#affected-packages-controls");

init_filter(input, table);
init_hash_routing(table, per_page);
init_pagination(controls_wrapper, table, per_page);
show_page(table, 1, per_page);
