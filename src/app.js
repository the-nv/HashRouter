"use strict";

import Navbar from './views/components/navbar.js'
import Home from './views/pages/Home.js'
import Error404 from './views/pages/Error404.js'
import InterviewShow from './views/pages/interviews/InterviewShow.js'
import Interviews from './views/pages/interviews/Interviews.js'
import InterviewCreate from './views/pages/interviews/InterviewCreate.js'
import InterviewUpdate from './views/pages/interviews/InterviewUpdate.js'

import Utils from './services/Utils.js'

const routes = {
    '/'                     : Home,
    '/interviews'           : Interviews,
    '/interviews/new'       : InterviewCreate,
    '/interviews/:id'       : InterviewShow,
    '/interviews/:id/edit'  : InterviewUpdate
};

const router = async() => {
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');

    header.innerHTML = await Navbar.render();
    await Navbar.after_render();

    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb: '')

    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);