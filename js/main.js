// create a couple of components we can request and render
let SplashComponent = {
    template: `<h1>Welcome to my super awesome app!</h1>`
}

let AppComponent = {
    template: `<h1>App PAge</h1>`
}

let ErrorComponent = {
    template: `<h1>Page not found</h1>`
}

// these are the same as express routes -> router.get('/', ... do something with the request)
const routes = [
    {path: '/', name: 'splash', component: SplashComponent },
    {path: '/app', name: 'app', component: AppComponent },
    {path: '*', name: 'error', component: ErrorComponent }
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue({
    el: "#app",
    data: {

    },

    methods: {

    },

    router
})