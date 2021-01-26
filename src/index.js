import "./style.css";
import "./style.scss";

const getUserModule = () => import("./common/usersAPI");

var hello = (name) => console.log(`hello ${name}`);

hello("jiangjianxx");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	getUserModule().then(({ getUsers }) => {
		getUsers().then((json) => console.log(json));
	});
});
