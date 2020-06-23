// Получаем продавцов из базы
const APIReadMembersFromDB = (params) => new Promise((resolve, reject) => {

	const { owner_id, search_text, skip, limit, status, country, flagTotalMembers } = params;

	let body = {
		owner_id,
		search_text,
		skip,
		limit: limit,
		status,
		country,
		flagTotalMembers,
	};

	try {
		return fetch('/members', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}).then((response) => {
			const data = response.json();
			resolve(data);
		}).catch((err) => reject(err));
	} catch (e) {
		reject(e);
	}
});

const APIReadManyMembersForIdsFromDB = (params) => new Promise((resolve, reject) => {
	// const {member_ids} = params;

	let body = params;

	try {
		return fetch('/members_for_ids', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}).then((response) => {
			const data = response.json();
			resolve(data);
		}).catch((err) => reject(err));
	} catch (e) {
		reject(e);
	}
});

// Получаем количество продавцов в базе
const APIReadMembersSizesFromDB = (params) => new Promise((resolve, reject) => {
	try {
		return fetch('//')
			.then((response) => {
				console.log('response ', response);
				resolve(response);
			}).catch((err) => {
				console.error('err ', err);
				reject(err);
			});

	} catch (e) {
		reject(e);
	}
	resolve({ all_sellers: 10000, banned: 100, deleted: 50, closed: 20, seller: 300 });
});

// Добавляем продавцов в базу
const APICreateMembersToDB = (membersArray) => new Promise(async (resolve, reject) => {

	await membersArray.map((owner_id) => {

		const body = { 'owner_id': owner_id, '_updated.info': 'create' };

		try {
			fetch('/members/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			}).then((response) => {
				if (response.ok) {
					return true;
				}
			}).catch((err) => {
				reject(err);
			});

		} catch (e) {
			reject(e);
		}
		resolve('+ 1K members');
	});
});

const APIUpdateMembersInDB = (membersWithInfoArray) => new Promise((resolve, reject) => {
	// const dispatch = useDispatch();
	// store.dispatch(setCheckStatusString('- обновление информации мемберов в базе...'));
	membersWithInfoArray.map((item) => {
		try {
			fetch('./members/update', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(item),
			}).then((response) => {
				if (response.ok) resolve(response);
			}).catch((err) => reject(err));
		} catch (e) {
			reject(e);
		}
		return null;
	});
});

export {
	APICreateMembersToDB,
	APIReadMembersFromDB,
	APIReadManyMembersForIdsFromDB,
	APIReadMembersSizesFromDB,
	APIUpdateMembersInDB,
};
