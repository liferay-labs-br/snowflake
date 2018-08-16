import WeDeploy from 'wedeploy';

const URL = 'https://db-snowflake.wedeploy.io';
const PATH = 'users';

const getUsers = () => WeDeploy.data(URL).get(PATH);
const createUser = data => WeDeploy.data(URL).create(PATH, data);
const updateUser = (id, data) => WeDeploy.data(URL).update(`${PATH}/${id}`, data);
const deleteUser =  id => WeDeploy.data(URL).delete(`${PATH}/${id}`);
const userChanged = () => new Promise((resolve, reject) => {
	WeDeploy.data(URL).watch(PATH)
		.on('changes', resolve)
		.on('fail', reject);
});

export {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
	userChanged,
};
