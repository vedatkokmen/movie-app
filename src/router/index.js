import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home";
import LatestMovie from "../components/LatestMovie";
import Movie from "../components/Movie";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/latest-movie",
		name: "LatestMovie",
		component: LatestMovie
	},
	{
		path: "/movie/:id",
		name: "Movie",
		component: Movie,
		props: true
	}
];

export default new VueRouter({
	routes
});
