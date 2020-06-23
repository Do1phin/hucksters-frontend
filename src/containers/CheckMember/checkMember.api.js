// Core
import {store} from '../../redux/store'
import { readCountersFromDB } from '../../components/Counters/counters.api';
import { APIReadMembersFromDB, APIUpdateMembersInDB } from '../Members/members.api';
import { CheckerSetStepNumberAction } from '../../redux/actions/check.actions';
import { getAlbumsFromVk, getMembersInfoFromVk, login } from '../../components/admin/_api-vk';
import { checkAlbumsNames } from '../../components/admin/_api-check';
import { APICreateAlbumsToDB } from '../Albums/albums.api';
import {
	CheckMembersAllAction, CheckMembersBannedAction,
	CheckMembersClosedAction, CheckMembersDeletedAction,
	CheckMembersFillAllParametersAction, CheckMembersSellerAction,
	CheckMembersWithInfoAction,
} from './checkMember.actions';

export const APIGetInfoFromVkMembers = async (owner_id) => {

		try {
			let source;
			await Promise.resolve([])
				.then(async () => { // Получение счётчиков из базы
					const counters = await readCountersFromDB();
					// store.dispatch(CheckMembersFillAllParametersAction(counters)
					store.dispatch(CheckMembersAllAction(counters.all_members));
					store.dispatch(CheckMembersWithInfoAction(counters.with_info));
					store.dispatch(CheckMembersClosedAction(counters.closed));
					store.dispatch(CheckMembersSellerAction(counters.seller));
					store.dispatch(CheckMembersBannedAction(counters.banned));
					store.dispatch(CheckMembersDeletedAction(counters.deleted));
					return []
				}).then(APIReadMembersFromDB) // Получение пользователей из базы
				.then((response) => {
					source = response.members; // массив продавцов
					return source
				});

			async function action(i) {
				store.dispatch(CheckerSetStepNumberAction(i));

				let obj = {
					owner_id: source[i].owner_id,
					info: 'full'
				};

				await Promise.resolve(obj)
					.then(getMembersInfoFromVk)
					.then(APIUpdateMembersInDB)
					.catch((err) => console.error(`* id ${source[i].owner_id}. `, err));
			}

			// for (let i = 1; i < store.state.check_members.all_members; i++) {
			for (let i = 1; i < 25000; i++) {
				setTimeout(action, i * 1000, i);
			}
		} catch (e) {
			console.error(e)
		}
};


export const MemberAlbumsGetAsyncAction = (owner_id) => {
	return async (dispatch, getState) => {
		let state = getState();
		try {
			let source;
			await Promise.resolve([])
				.then(async response => { // Получение счётчиков из базы
					const counters = await readCountersFromDB();
					dispatch(CheckMembersAllAction(counters.all_members));
					dispatch(CheckMembersWithInfoAction(counters.with_info));
					dispatch(CheckMembersClosedAction(counters.closed));
					dispatch(CheckMembersSellerAction(counters.seller));
					dispatch(CheckMembersBannedAction(counters.banned));
					dispatch(CheckMembersDeletedAction(counters.deleted));
					return []
				}).then(APIReadMembersFromDB) // Получение пользователей из базы
				.then((response) => {
					console.log('re ', response)
					source = response; // массив продавцов
					return source
				});

			async function action(i) {
				dispatch(CheckerSetStepNumberAction(i));

				let obj = {
					owner_id: source[i].owner_id,
					info: 'check_one'
				};

				await Promise.resolve(obj)
					.then(getAlbumsFromVk) // Получение альбомов из ВК
					.then(checkAlbumsNames) // Проверка полученных альбомов на ключи
					.then(APICreateAlbumsToDB) // Добавление альбомов в базу
					.then(() => {
						let membersArray = [];
						membersArray.push(obj);
						return membersArray // массив где id и тело пользователя // Изменение информации о пользователе
					}).then(APIUpdateMembersInDB)
					.catch((err) => console.error(`* id ${source[i].owner_id}. `, err));
			}

			for (let i = 1; i < state.check_members.all_members; i++) {
				setTimeout(action, i * 1000, i);
			}
		} catch (e) {
			console.error(e)
		}
	}
};
