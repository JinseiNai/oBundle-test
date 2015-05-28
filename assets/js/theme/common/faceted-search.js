import { hooks } from 'bigcommerce/stencil-utils';
import $ from 'jquery';
import Url from 'url';
import History from 'browserstate/history.js/scripts/bundled-uncompressed/html4+html5/jquery.history';

export default function(template) {
    let $productListingContainer = $('#product-listing');

    function goToUrl(url) {
        History.pushState({}, document.title, url);
    }

    hooks.on('facetedSearch-facet-clicked', (event) => {
        let url = $(event.currentTarget).attr('href');

        event.preventDefault();

        goToUrl(url);
    });

    hooks.on('facetedSearch-range-submitted', (event) => {
        let url = Url.parse(location.href),
            queryParams = $(event.currentTarget).serialize();

        event.preventDefault();

        goToUrl(Url.format({pathname: url.pathname, search: '?' + queryParams}));
    });

    hooks.on('sortBy-submitted', (event) => {
        let url = Url.parse(location.href, true),
            queryParams = $(event.currentTarget).serialize().split('=');

        url.query[queryParams[0]] = queryParams[1];

        event.preventDefault();

        goToUrl(Url.format({pathname: url.pathname, query: url.query}));
    });

    $(window).on('statechange', () => {
        $.ajax(History.getState().url, {data: {render_with: template}}).success((html) => {
            $productListingContainer.html(html);
        });
    });
}
